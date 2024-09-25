---
sidebar_position: 1
title: 📦Main 游戏的运行
tags:
  - GBA 图形
  - GBA 教程
---

> 翻译和补充: [泡泡](https://github.com/Bubble791) <br />
> 原作者: [Pokeemerald Wiki by huderlem](https://github.com/pret/pokeemerald/wiki/Overview%E2%88%B6-The-Game-Loop) <br />
---

## 游戏循环
许多游戏都有所谓的“游戏循环”，这是更新游戏状态的主要控制流程。从高层次来看，它看起来像这样：
```c
while (1)
{
    ReadPlayerInput(); // 获取玩家的输入，比如按键
    UpdateGameState(); // 更新游戏状态
    DrawScreen(); // 绘制游戏画面
}
```
GBA系列的三代游戏也不例外，但它们的游戏循环看起来并不像上面的例子那么清晰。

让我们看看游戏循环代码，位于src/main.c的gbMain()函数内部，该函数是游戏代码的入口点。如果你浏览一下游戏初始化代码，你会看到一个无限for循环，即游戏循环。
```c
// src/main.c
for (;;)
{
    ReadKeys();

    if (gSoftResetDisabled == FALSE
     && JOY_HELD_RAW(A_BUTTON)
     && JOY_HELD_RAW(B_START_SELECT) == B_START_SELECT)
    {
        rfu_REQ_stopMode();
        rfu_waitREQComplete();
        DoSoftReset();
    }

    if (Overworld_SendKeysToLinkIsRunning() == TRUE)
    {
        gLinkTransferringData = TRUE;
        UpdateLinkAndCallCallbacks();
        gLinkTransferringData = FALSE;
    }
    else
    {
        gLinkTransferringData = FALSE;
        UpdateLinkAndCallCallbacks();

        if (Overworld_RecvKeysFromLinkIsRunning() == TRUE)
        {
            gMain.newKeys = 0;
            ClearSpriteCopyRequests();
            gLinkTransferringData = TRUE;
            UpdateLinkAndCallCallbacks();
            gLinkTransferringData = FALSE;
        }
    }

    PlayTimeCounter_Update();
    MapMusicMain();
    WaitForVBlank();
}
```

忽略与联机相关的功能，它归结为这个高级流程

```c
while (1)
{
	ReadPlayerInput();
	CheckForSoftReset();
	RunCallbacks();
	UpdatePlayTimeCounter();
	UpdateMusic();
	WaitForVBlank();
}
```

前面描述的常见游戏循环与3代系列游戏循环有两个主要区别。
- `RunCallbacks()`而不是`UpdateGameState()`
- `WaitForVBlank()`而不是`DrawScreen()`

### RunCallbacks()
3代的代码大量使用了“回调”，即在未来某个时间调用的函数，并且可能以重复间隔调用，在游戏循环中运行的回调通常有[主回调](#MainCallback)、[Sprite图像回调](#SpriteCallback)和[Task 任务](#Task)。

[主回调](#MainCallback)决定了[Sprite图像回调](#SpriteCallback)和[Task 任务](#Task)是否运行，[Sprite图像回调](#SpriteCallback)和[Task 任务](#Task)的执行顺序取决于他们对应的运行函数在[主回调](#MainCallback)函数中的顺序

#### 主回调{#MainCallback}

最主要的回调，一共有两个，游戏循环每帧都会调用它们一次。
```c
// src/main.c
static void CallCallbacks(void)
{
    if (gMain.callback1)
        gMain.callback1();

    if (gMain.callback2)
        gMain.callback2();
}
```
由于主回调函数每一帧都会被调用，因此游戏的大部分逻辑都存在于主回调函数中。许多主回调函数的结构类似于以下结构：

```c
void MyBasicMainCallback(void)
{
    // 运行所有激活的Task回调
    RunTasks();

    // 运行当前所有的Sprite回调
    AnimateSprites();

    // 将所有Sprite数据在V-Blank期间复制到VRAM的缓冲区。
    BuildOamBuffer();

    // 存在淡出淡入效果时，运行色板的淡出淡入效果
    // 通常用于场景之间的切换
    UpdatePaletteFade();
}
```

为了使上述回调每帧执行一次，必须将其分配给两个主回调之一。
```c
gMain.callback1 = MyBasicCallback;
// 或者
SetMainCallback2(MyBasicCallback);
// 或者
gMain.callback2 = MyBasicCallback;
```
基本将其设置给gMain.callback2用于主要游戏逻辑，gMain.callback1则保留用于更多辅助相关逻辑。

#### Sprite 回调{#SpriteCallback}

Sprite 回调是附加到所有单个struct Sprite对象的函数。

Sprite 回调主要用于为其所附加的OBJ图像制作动画，当AnimateSprites()在主回调中调用时，则每帧只调用一次Sprite 回调。

如您所见，AnimateSprites()遍历所有活动精灵并调用它们的每个回调函数。
```c
// src/sprite.c
void AnimateSprites(void)
{
    u8 i;
    for (i = 0; i < MAX_SPRITES; i++)
    {
        struct Sprite *sprite = &gSprites[i];

        if (sprite->inUse)
        {
            sprite->callback(sprite);

            if (sprite->inUse)
                AnimateSprite(sprite);
        }
    }
}
```
Sprite 回调无任何返回值，并且struct Sprite *作为其唯一参数，Sprite 回调通常会对OBJ执行一些动画或移动，然后在OBJ的生命周期结束时清除OBJ。 

Sprite结构体中有一个8元素的数组称为data，供Sprite 回调用于一些参数读取/保存。此data数组在sprite创建时初始化0。

这是一个简单示例，它将OBJ移动到屏幕上，然后清除：
```c
MoveRight_SpriteCallback(struct Sprite *sprite)
{
    // 使用data[0]作为帧数.
    // 当帧数大于10, 清除当前的Sprite.
    if (++sprite->data[0] > 10)
        DestroySprite(sprite);
    else
        sprite->pos1.x++; // 将当前的Sprite向右移动1像素
}
```
有关Sprite的更多信息请参阅后续文档

#### [Task 任务](Task){#Task}
Task，又叫任务，是3代游戏中使用的第三个主要回调。它们类似于Sprite回调，但本质上不依赖于Sprite。假设RunTasks()在其中一个主回调中调用，那么每个激活的任务将每帧执行一次。
```c
// src/task.c
void RunTasks(void)
{
    u8 taskId = FindFirstActiveTask();

    if (taskId != NUM_TASKS)
    {
        do
        {
            gTasks[taskId].func(taskId);
            taskId = gTasks[taskId].next;
        } while (taskId != TAIL_SENTINEL);
    }
}
```
每个任务都分配有优先级，这决定了任务的执行顺序,每当使用CreateTask()创建新任务时，它都会被插入到活动任务的内存列表中，按优先级从低到高排序。

与 Sprites 类似，Task结构中也有一个通用data数组，但这个数组有16个元素。Task是跨越多个游戏帧的逻辑的基本构建块，它们可以非常灵活地完成指定任务。

举一个小例子，你可以创建一个任务，每次玩家按下A按钮时都会播放声音，最多10次：
```c
// 5 is the priority, and is not important.
u8 taskId = CreateTask(ButtonPressSound_Task, 5);
...
void ButtonPressSound_Task(u8 taskId)
{
    if (gMain.newKeys & A_BUTTON)
    {
        PlaySE(SE_PC_LOGIN);
        if (++gTasks[taskId].data[0] == 10)
            DestroyTask(taskId);
    }
}
```
有关任务的更多信息请参阅[后续文档](Task)。

### WaitForVBlank()

通用游戏循环和3代游戏循环之间的第二个主要区别是WaitForVBlank()而不是DrawScreen()之类的东西绘制屏幕图像。这是因为Game Boy Advance图形的工作方式，与现代游戏开发中直接将像素绘制到屏幕或像素缓冲区不同，Game Boy Advance 有一个专用的内存区域，称为 VRAM（视频 RAM），其中存储着图块、图块Map、调色板和OBJ数据。

VRAM的详细信息超出了本文档的范围。但是，游戏循环的重点是，每秒会发生60次所谓的“VBlank 中断”。这是视频控制器完成将最后一行像素绘制到屏幕上的时间，因此GBA 的屏幕刷新率为 60 fps。通过在WaitForVBlank()每个游戏循环结束时调用，确保游戏状态进展的上限为一致的60 fps。

---
---

## 相关函数

代码文件：[src/main.c](https://github.com/pret/pokeemerald/blob/master/src/main.c)

---

### SetMainCallback2{#SetMainCallback2}
```c
void SetMainCallback2(MainCallback callback);
```
💬将主回调`gMain.callback2`设置为指定的函数，游戏中最常用的主回调设置函数，在调用时会将`gMain.state`初始化为`0`

| 参数 | 类型 | 介绍 |
| --- | --- | --- |
| callback | MainCallback | 回调函数的地址 |

在切换场景时，通常会将初始化当前场景的函数用`SetMainCallback2`设置给`MainCallback2`，这样能避免上一个场景存留在Callback2中的回调和其他任务（通常为Task、Sprite回调，淡出淡入效果，oam构建）仍在运行导致的出错

而初始化当前场景的函数中，可以根据`gMain.state`的值一步步的清理掉之前的数据并设置成当前场景所需要的配置

✔️实例：

在玩家打开菜单选择训练师卡片时，游戏会先等待淡出效果执行完毕，然后使用`SetMainCallback2`将`MainCallback2`设置为`CB2_InitTrainerCard`，此时野外场景的所有sprite，task都被中止运行，屏幕处于一片漆黑

```c
void ShowPlayerTrainerCard(void (*callback)(void))
{
    // 初始化一片内存用于训练师卡片显示
    sData = AllocZeroed(sizeof(*sData));
    sData->callback2 = callback;
    if (callback == CB2_ReshowFrontierPass)
        sData->blendColor = RGB_WHITE;
    else
        sData->blendColor = RGB_BLACK;

    if (InUnionRoom() == TRUE)
        sData->isLink = TRUE;
    else
        sData->isLink = FALSE;

    sData->language = GAME_LANGUAGE;
    TrainerCard_GenerateCardForPlayer(&sData->trainerCard);
    SetMainCallback2(CB2_InitTrainerCard); // 将MainCallback2设置为TrainerCard的初始化函数
}
```

接下来游戏专注于执行`CB2_InitTrainerCard`，由于通常情况下不会把所有的初始化代码堆一块去执行，所以会根据`gMain.state`的值逐步初始化Vblank、清理之前野外场景的图像VARM数据、清除所有的Sprite和Task避免冲突出现问题、构建训练师卡片界面的bg、等等一系列动作

```c
static void CB2_InitTrainerCard(void)
{
    switch (gMain.state)
    {
    case 0:
        ResetGpuRegs();
        SetUpTrainerCardTask();
        gMain.state++;
        break;
    case 1:
        DmaClear32(3, (void *)OAM, OAM_SIZE);
        gMain.state++;
        break;
    case 2:
        if (!sData->blendColor)
            DmaClear16(3, (void *)PLTT, PLTT_SIZE);
        gMain.state++;
        break;
    case 3:
        ResetSpriteData();
        FreeAllSpritePalettes();
        ResetPaletteFade();
        gMain.state++;
    // ...
    default:
        SetMainCallback2(CB2_TrainerCard);
        break;
    }
}
```
当运行到初始化的最后一步，将`MainCallback2`重新设置成包含4种基础运行函数的`CB2_TrainerCard`(并不局限于这四个函数，随需求添加)，此时场景里所有的Task开始运作，Sprite动画开始生效，然后淡出淡入效果执行，游戏正常淡入到训练师卡片页面

```c
static void CB2_TrainerCard(void)
{
    RunTasks();
    AnimateSprites();
    BuildOamBuffer();
    UpdatePaletteFade();
}
```

---
---
### SetVBlankCallback{#SetVBlankCallback}
```c
void SetVBlankCallback(IntrCallback callback);
```
💬将主回调`gMain.vblankCallback`设置为指定的函数，同样也是游戏中最常用的vblank回调设置函数

| 参数 | 类型 | 介绍 |
| --- | --- | --- |
| callback | IntrCallback | 回调函数的地址 |

✔️实例：

不同于`MainCallback2`，vblankCallback更多的是和图像相关的功能。同样是训练师卡片的例子，`gMain.vblankCallback`在初始化的第一步基本就被赋为`NULL`，避免继续加载图像数据到VRAM，最后和`MainCallback2`一起重新设置成当前场景所需的Vblank回调函数

VblankCallback的函数中除了3个基础的`LoadOam()`、`ProcessSpriteCopyRequests()`、`TransferPlttBuffer()`外，通常还会添加一些别的效果，比如`ScanlineEffect`，`bg循环位移`
```c
static void VblankCb_TrainerCard(void)
{
    LoadOam();
    ProcessSpriteCopyRequests();
    TransferPlttBuffer();
    BlinkTimeColon();
    if (sData->allowDMACopy)
        DmaCopy16(3, &gScanlineEffectRegBuffers[0], &gScanlineEffectRegBuffers[1], 0x140);
}
```