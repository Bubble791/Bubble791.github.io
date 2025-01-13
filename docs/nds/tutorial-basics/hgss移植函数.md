---
sidebar_position: 1
tags:
  - NDS 教程
---

> 作者: [泡泡](https://github.com/Bubble791) <br />
---

# 如何从hgss的反编译源码里将一段函数完整的移植到hg-engine

准备工作：

1.下载[反编译仓库分支xmap里对应版本的xmap](https://github.com/pret/pokeheartgold/blob/xmap/heartgoldus.xMAP)，该文件包含了所有编译出来的函数对应的地址

2.基础的c语言知识

3.vscode，方便用于检查函数是否已经被定义

这里以移植全地图漫游宝可梦的设置函数为例子

首先我们需要从反编译/泄露源码里找到已经被反编译成c文件的函数，游戏里会调用`Save_CreateRoamerByID`函数生成对应的宝可梦数据

```c
void Save_CreateRoamerByID(SaveData *saveData, u8 idx) {
    PlayerProfile *profile;
    RoamerSaveData *roamerSave = Save_Roamers_Get(saveData);
    Roamer *roamerStats = Roamers_GetRoamMonStats(roamerSave, idx);
    Pokemon *mon;
    u16 species;
    u8 level;

    switch (idx) {
    case ROAMER_RAIKOU:
        species = SPECIES_RAIKOU;
        level = 40;
        break;
    case ROAMER_ENTEI:
        species = SPECIES_ENTEI;
        level = 40;
        break;
    case ROAMER_LATIAS:
        species = SPECIES_LATIAS;
        level = 35;
        break;
    case ROAMER_LATIOS:
        species = SPECIES_LATIOS;
        level = 35;
        break;
    default:
        // GF_ASSERT(0); // GF_ASSERT是gf在调试时报错使用的，实际游戏里没作用，这里可以直接注释掉
        return;
    }

    SetRoamerData(roamerStats, ROAMER_DATA_SPECIES, species);
    SetRoamerData(roamerStats, ROAMER_DATA_LEVEL, level);

    profile = Save_PlayerData_GetProfileAddr(saveData);
    mon = AllocMonZeroed((HeapID)4);
    ZeroMonData(mon);
    CreateMon(mon, species, level, 32, FALSE, 0, OT_ID_PRESET, PlayerProfile_GetTrainerID_VisibleHalf(profile));
    SetRoamerData(roamerStats, ROAMER_DATA_STATUS, 0);
    SetRoamerData(roamerStats, ROAMER_DATA_ACTIVE, TRUE);
    SetRoamerData(roamerStats, ROAMER_DATA_IVS, GetMonData(mon, MON_DATA_IVS_WORD, NULL));
    SetRoamerData(roamerStats, ROAMER_DATA_PERSONALITY, GetMonData(mon, MON_DATA_PERSONALITY, NULL));
    SetRoamerData(roamerStats, ROAMER_DATA_HP, GetMonData(mon, MON_DATA_MAXHP, NULL));
    FreeToHeap(mon);
    RoamerLocationSetRandom(roamerSave, idx, PlayerLocationHistoryGetBack(roamerSave));
}
```
将这段复制到hgengine的代码文件里，由于该函数存在于arm9而非overlay里，所以要将代码放在src的根目录中某个代码文件中。
这里我们新建一个名为`field_roamer.c`的文件放到`src`目录下，并将通用的一些头文件include到该代码的开头

接着从反编译中复制所有hgengine里没有的函数声明到头文件里, 在返回的类型和函数名中间插入``LONG_CALL``字段，比如：

```c
RoamerSaveData * LONG_CALL Save_Roamers_Get(SaveData *saveData);
```

# 结构体的处理：

由于该函数返回的是个结构体指针，*但实际我们在目前的代码里用不到这个结构体里的任何成员*，为了偷懒可以将`RoamerSaveData *`替换成`void *`,这样可以不用再去复制`RoamerSaveData`的结构体代码（如果hgengine已经定义过该结构体的则可以保留）

```c
void* LONG_CALL Save_Roamers_Get(SaveData *saveData);
```

由于在定义`Save_Roamers_Get`时返回值类型已经被修改成了`void*`，所以需要将参数`roamerSave`的类型也改为void*，以及`Roamers_GetRoamMonStats`的第一个参数类型

修改后的代码(roamerStats, profile也同样修改成了void*)：
```c
void Save_CreateRoamerByID(SaveData *saveData, u8 idx) {
    void *profile;
    void *roamerSave = Save_Roamers_Get(saveData);
    void *roamerStats = Roamers_GetRoamMonStats(roamerSave, idx);
    Pokemon *mon;
    u16 species;
    u8 level;

    switch (idx) {
    case ROAMER_RAIKOU:
        species = SPECIES_RAIKOU;
        level = 40;
        break;
    case ROAMER_ENTEI:
        species = SPECIES_ENTEI;
        level = 40;
        break;
    case ROAMER_LATIAS:
        species = SPECIES_LATIAS;
        level = 35;
        break;
    case ROAMER_LATIOS:
        species = SPECIES_LATIOS;
        level = 35;
        break;
    default:
        // GF_ASSERT(0);
        return;
    }

    SetRoamerData(roamerStats, ROAMER_DATA_SPECIES, species);
    SetRoamerData(roamerStats, ROAMER_DATA_LEVEL, level);

    profile = Save_PlayerData_GetProfileAddr(saveData);
    mon = AllocMonZeroed((HeapID)4);
    ZeroMonData(mon);
    CreateMon(mon, species, level, 32, FALSE, 0, OT_ID_PRESET, PlayerProfile_GetTrainerID_VisibleHalf(profile));
    SetRoamerData(roamerStats, ROAMER_DATA_STATUS, 0);
    SetRoamerData(roamerStats, ROAMER_DATA_ACTIVE, TRUE);
    SetRoamerData(roamerStats, ROAMER_DATA_IVS, GetMonData(mon, MON_DATA_IVS_WORD, NULL));
    SetRoamerData(roamerStats, ROAMER_DATA_PERSONALITY, GetMonData(mon, MON_DATA_PERSONALITY, NULL));
    SetRoamerData(roamerStats, ROAMER_DATA_HP, GetMonData(mon, MON_DATA_MAXHP, NULL));
    FreeToHeap(mon);
    RoamerLocationSetRandom(roamerSave, idx, PlayerLocationHistoryGetBack(roamerSave));
}
```

声明的头文件：
```c
void* LONG_CALL Save_Roamers_Get(SaveData *saveData);
void* LONG_CALL Roamers_GetRoamMonStats(void *roamerSave, int roamerId);
void LONG_CALL SetRoamerData(void *roamer, int a1, int val);
u32 LONG_CALL PlayerLocationHistoryGetBack(void *roamerSave);
void* LONG_CALL Save_PlayerData_GetProfileAddr(SaveData *saveData);
void LONG_CALL RoamerLocationSetRandom(void *roamer, u8 roamer_idx, u32 last_loc);
u16 LONG_CALL PlayerProfile_GetTrainerID_VisibleHalf(void *profile);
/*其他的一些可能在hgengine里定义过的这里就不用再声明了，请确保不会重复声明*/
```

接着将这些新的外部函数地址添加到`rom.ld`文件里

打开下载的`heartgoldus.xMAP`文件，搜索这些新增的函数名字，找到下列格式的文本：
```
  0202D9C4 0000000C .text   Save_Roamers_Get	(roamer.o)
```
其中最前面的0202D9C4就是在游戏中的函数地址，以下面的格式添加到rom.ld文件中：
```
Save_Roamers_Get = 0x0202D9C4 | 1;
```

注意：函数的指针需要在末尾添加 `| 1 `而表格等数据在移植时不需要添加

接着复制一些常量的定义到头文件里，比如`ROAMER_DATA_STATUS`

```c
enum RoamerDataParam {
    ROAMER_DATA_MET_LOCATION = 1,
    ROAMER_DATA_IVS = 2,
    ROAMER_DATA_PERSONALITY = 3,
    ROAMER_DATA_SPECIES = 4,
    ROAMER_DATA_HP = 5,
    ROAMER_DATA_LEVEL = 6,
    ROAMER_DATA_STATUS = 7,
    ROAMER_DATA_ACTIVE = 8,
};
```
也可以直接将常量写成数字形式：
```c
SetRoamerData(roamerStats, ROAMER_DATA_ACTIVE, TRUE);
↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓修改成↓↓↓↓↓↓↓↓↓↓↓↓↓↓
SetRoamerData(roamerStats, 8, 1);
```
同理将用到的一些结构体也复制到头文件，直到编译时不会报错

# hook进游戏内
全部添加完后将该函数hook进游戏中：

首先观察该函数传入参数的数量，游戏在调用函数时会将前面4个参数放置在r0-r3的寄存器了，而一般直接hook的函数需要参数数量小于等于3个，超过这个数时需要借用asm去hook

`Save_CreateRoamerByID`这个函数只有两个传入的参数，他们会占用r0和r1的寄存器，这时候r2和r3寄存器就是我们可以用来long call加载新函数地址的，这里我们使用r2寄存器

从xmap里获取`Save_CreateRoamerByID`原函数的地址为`020676EC`,同时该函数位于arm9中，所以在hooks文件里添加
```
arm9 Save_CreateRoamerByID 020676EC 2
```
`arm9` : 函数位于哪个文件，如果是overlay则换成4位数的overlayId, 比如`0012`

`Save_CreateRoamerByID` : hgengine里函数的名字

`020676EC` : 函数原来的地址

`2` : 寄存器编号，代表r2

# 测试

如果在运行到该函数调用的地方时游戏不会出现bug那么恭喜你移植成功
