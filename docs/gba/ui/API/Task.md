---
sidebar_position: 2
title: 📦Task 任务
tags:
  - GBA 图形
  - GBA 教程
---

> 翻译和补充: [泡泡](https://github.com/Bubble791) <br />
> 原作者: [Pokeemerald Wiki by tustin2121](https://github.com/pret/pokeemerald/wiki/Overview%E2%88%B6-The-Task-System) <br />
--- 

## Task 任务系统

正如在[游戏循环](../API/Main)中讨论的那样，主回调通常不包含任何游戏逻辑。这是因为3代引擎使用Task系统在给定屏幕期间执行逻辑操作。

让我们以缆车过场动画为例，了解一下这些任务的工作原理。

在过场动画初始化期间，您将看到以下几行：
```c
SetMainCallback2(CB2_CableCar);
CreateTask(Task_CableCar, 0);
if (!GOING_DOWN)
    sCableCar->bgTaskId = CreateTask(Task_AnimateBgGoingUp, 1);
else
    sCableCar->bgTaskId = CreateTask(Task_AnimateBgGoingDown, 1);
```
mainCallback2设置后，游戏会创建两个Task
- 第一个Task函数为`Task_CableCar`，并以优先级0运行（将首先运行）
- 第二个Task是使支架上或下运动的动画函数，优先级为1，这意味着它每一帧在`Task_CableCar`之后运行函数

❗请注意，该`CreateTask`函数返回一个Task ID，它只是一个简单的u8字节。该ID可用于索引内存中的`gTasks`以获取有关我们当前Task的信息。

在创建的第二个Task中，我们保存此ID以供之后使用，从技术上讲，此ID是Task在`gTasks`中创建的位置，但由于Task列表是一个链接列表，因此它在阵列中的位置与Task的运行顺序无关（Task的执行顺序已经由传递给`CreateTask`的优先级决定）此ID不能被修改，而只适用于存储和访问信息。

使用任务ID，我们可以访问Task中的数据：
```c
struct Task
{
    TaskFunc func; // 该Task的程序
    bool8 isActive; // 该Task是否运行
    u8 prev;
    u8 next;
    u8 priority;
    s16 data[NUM_TASK_DATA]; // 该Task的data数组
};
```
通常情况下，我们只需要关注`func`和`data`这两项，其他的都由Task系统分配

- 指针`func`指向我们传递给`CreateTask`的函数回调。该函数必须为`void Task_FunctionName(u8 taskId)`的形式，在`pokeemerald`反编译项目中，每个用作Task回调的函数都命名为`Task_XXX`，因此您应该很容易看出哪些是Task回调。调用此函数时，它会传递`taskId`，所以我们不必在该task中存储这个Task的`taskId`。但是，我们可以存储其他的`taskId`，稍后将讨论。

- `data`数组是一个16个s16类型数据的数组，我们可以在其中放入任何想要的数据。这些数据供我们自己使用。在`pokeemerald`代码库中，您经常会看到这些数据字段的引用方式如下：
```c
#define tTimer   data[0]
#define tState   data[1]

static void Task_ExampleTask(u8 taskId)
{
    // 直接访问
    gTasks[taskId]->tTimer++; // 实际上是gTasks[taskId]->data[0]++;
    
    // 或者可以将data设置为指针
    s16 *data = gTasks[taskId].data;
    tState = 0; // 实际上是: data[1] = 0;
}

#undef tState
#undef tTimer
```
您会发现在代码库中这两种策略可以互换使用。

函数`func`每帧调用一次，输入的数据`data`可用于保持帧之间的状态。您可以将其中一个数据字段设为状态，并将函数设为基于状态的`switch`，或者您可以将其他函数分配给`func`，分配的函数将在下一帧运行：
```c
static void Task_WaitForFade(u8 taskId)
{
    if (!gPaletteFade.active)
    {
        // 在淡出淡入效果结束的下一帧将当前Task的函数设置为Task_HandlePlayerInput
        gTasks[taskId].func = Task_HandlePlayerInput; // 更改Task的函数，之后runTask将会运行Task_HandlePlayerInput函数而不是Task_WaitForFade
    }
}

static void Task_HandlePlayerInput(u8 taskId)
{
  //此任务将使用与上面相同的任务ID和数据运行
  //任何数据都来自上面的函数
}
```
:::tip
Task和一开始`createTask`里的函数并不绑定，并不是`func`变了`taskId`和`data`的数据就会变
:::

如果您想要一个经常使用的示例，请查看[src/credits.c](https://github.com/pret/pokeemerald/blob/master/src/credits.c)。

您还将在该文件中看到使用data字段来存储它创建的其他Task的TaskID。
```c
gTasks[taskId].tTaskId_ShowMons = CreateTask(Task_ShowMons, 0); // 创建一个新Task，将Id存储到当前task中的data里
gTasks[gTasks[taskId].tTaskId_ShowMons].tState = 1; // 设置前面那个创建的task中的data
gTasks[gTasks[taskId].tTaskId_ShowMons].tMainTaskId = taskId; // 在前面那个创建的task的data里储存当前task的Id
```

最后，一旦任务完成，可以使用`DestroyTask`删除当前这个task：
```c
DestroyTask(taskId);
DestroyTask(sCableCar->bgTaskId);
SetMainCallback2(CB2_EndCableCar);
```
这会将Task设置为非活动状态，并且它将不再在后续帧上运行。

请确保在清理屏幕或交互时执行此操作；而`ResetTasks`会销毁所有Task，您会发现它通常在清理场景时运行，只是为了确保不会意外地将Task留在活动状态。

:::tip
原版Task最多16个，请确保不会超标
:::

---
---

## 相关函数

代码文件：[src/task.c](https://github.com/pret/pokeemerald/blob/master/src/task.c)

---

### ResetTasks{#ResetTasks}
```c
void ResetTasks(void);
```
💬初始化所有`gTask`的数据，并给所有的`data`赋值`0`，该函数用于初始化场景时清理上一个场景的Task，无须再使用`DestroyTask`一个个去清理

---
---

### CreateTask{#CreateTask}
```c
u8 CreateTask(TaskFunc func, u8 priority);
```
💬创建一个Task，并返回创建的`TaskId`，当创建失败时会返回`0`
| 参数 | 类型 | 介绍 |
| --- | --- | --- |
| func | TaskFunc | task的回调函数地址 |
| priority | u8 | task的执行优先级 |

✔️返回值：
    - `u8`: 创建的`TaskId`，当创建失败时会返回`0`
---
---

### DestroyTask{#DestroyTask}
```c
void DestroyTask(u8 taskId);
```
💬清除指定Id的Task，仅在该Task处于运行状态时

| 参数 | 类型 | 介绍 |
| --- | --- | --- |
| taskId | u8 | 需要清除的taskId |

---
---

### RunTasks{#RunTasks}
```c
void RunTasks(void);
```
💬根据优先级顺序运行所有task的`func`函数，通常放在mainCallback2中实时运行

---
---

### SetTaskFuncWithFollowupFunc{#SetTaskFuncWithFollowupFunc}
```c
void SetTaskFuncWithFollowupFunc(u8 taskId, TaskFunc func, TaskFunc followupFunc);
```
💬修改指定id的Task的`func`，并将给定的`子回调函数`存储到`data`数组的`最后两个`里，由于data数组是`2`字节，而函数指针是`4`字节，所以此指针会将高低位拆开存放

之后可以配合[`SwitchTaskToFollowupFun`](#SwitchTaskToFollowupFunc)函数将当前Task的`func`赋值为存储的子回调函数

| 参数 | 类型 | 介绍 |
| --- | --- | --- |
| taskId | u8 | 需要设置的taskId |
| func | TaskFunc | 设置的回调函数地址 |
| followupFunc | TaskFunc | 设置的子回调函数地址 |

---
---

### SwitchTaskToFollowupFunc{#SwitchTaskToFollowupFunc}
```c
void SwitchTaskToFollowupFunc(u8 taskId);
```
💬将指定id的Task的`func`修改为存储的子回调函数，配合[`SetTaskFuncWithFollowupFunc`](#SetTaskFuncWithFollowupFunc)使用

| 参数 | 类型 | 介绍 |
| --- | --- | --- |
| taskId | u8 | 需要切换的taskId |

---
---

### FuncIsActiveTask{#FuncIsActiveTask}
```c
bool8 FuncIsActiveTask(TaskFunc func);
```
💬根据传入的函数判断是否有运行中的Task的`func`与该函数相同

| 参数 | 类型 | 介绍 |
| --- | --- | --- |
| func | TaskFunc | 要检查的task的回调函数 |

✔️返回值：
    - `bool8`: 存在一个或者多个运行中的task使用了该函数作为`func`时返回`TRUE`，否则返回`FALSE`
---
---

### FindTaskIdByFunc{#FindTaskIdByFunc}
```c
u8 FindTaskIdByFunc(TaskFunc func);
```
💬根据传入的函数判断是否有运行中的Task的`func`与该函数相同，如果有匹配的Task，返回其中第一个task的`Id`

| 参数 | 类型 | 介绍 |
| --- | --- | --- |
| func | TaskFunc | 要检查的task的回调函数 |

✔️返回值：
    - `bool8`: 存在一个或者多个运行中的task使用了该函数作为`func`时返回该Task的`Id`，否则返回`TASK_NONE`
---
---

### SetWordTaskArg{#SetWordTaskArg}
```c
void SetWordTaskArg(u8 taskId, u8 dataElem, u32 value);
```
💬在指定id的task的`data`数组里写入一个4字节的数据，`dataElem`为空闲的`data`数组下标，会占用该`下标`和`下标+1`的位置

| 参数 | 类型 | 介绍 |
| --- | --- | --- |
| taskId | u8 | 需要写入数据的taskId |
| dataElem | u8 | data数组下标起始 |
| value | u32 | 4字节长度的数据 |

请确保该下标不会超过`NUM_TASK_DATA - 1`

---
---

### GetWordTaskArg{#GetWordTaskArg}
```c
u32 GetWordTaskArg(u8 taskId, u8 dataElem);
```
💬获取指定id的task的`data`数组`dataElem`和`dataElem+1`下标里存储的值，组合成一个`4`字节数据返回

| 参数 | 类型 | 介绍 |
| --- | --- | --- |
| taskId | u8 | 需要获取数据的taskId |
| dataElem | u8 | data数组下标起始 |

✔️返回值：
    - `u32`: 组合的`4`字节数据
  
请确保该下标不会超过`NUM_TASK_DATA - 1`

---
---