---
sidebar_position: 3
title: 📦Text 文本显示
tags:
  - GBA 图形
  - GBA 教程
---

> 作者: [泡泡](https://github.com/Bubble791) <br />
---
代码文件：[src/text.c](https://github.com/pret/pokeemerald/blob/master/src/text.c)

## DeactivateAllTextPrinters{#DeactivateAllTextPrinters}
```c
void DeactivateAllTextPrinters(void);
```
💬将所有文本显示进程的active设置为FALSE，终止所有的文本显示，通常用于在窗口创建后的初始化

---
---

## AddTextPrinterParameterized{#AddTextPrinterParameterized}
```c
u16 AddTextPrinterParameterized(u8 windowId, u8 fontId, const u8 *str, u8 x, u8 y, u8 speed, void (*callback)(struct TextPrinterTemplate *, u16));
```
💬设置参数并调用文本显示函数，将指定的文本显示到对应ID的窗口，相较于其他的[`AddTextPrinterParameterized`](#AddTextPrinterParameterized)系列函数，该函数省略了`文本颜色`和`文本间隔`的设置，使用了字体默认的颜色和间隔

| 参数 | 类型 | 介绍 |
| --- | --- | --- |
| windowId | u8 | 窗口Id |
| fontId | u8 | 字体类型 |
| str | const u8* | 文本地址 |
| x | u8 | 在窗口中的x起始坐标 |
| y | u8 | 在窗口中的y起始坐标 |
| speed | u8 | 文本打印的速度，(`-1`或`0xFF`时直接显示 )|
| callback | void* | 回调函数，在文本打印的进程中会随时执行该函数 |

:::tip
该函数会执行`AddTextPrinter`并返回一个bool16的`TRUE`值，似乎并没有什么用
:::

---
---

## AddTextPrinter{#AddTextPrinter}
```c
bool16 AddTextPrinter(struct TextPrinterTemplate *printerTemplate, u8 speed, void (*callback)(struct TextPrinterTemplate *, u16));
```
💬基础的文本显示函数，根据传入的模板添加文本显示任务，直接调用的情况比较少(比如战斗内文本显示)，该函数会被[`AddTextPrinterParameterized`](#AddTextPrinterParameterized)系列调用

| 参数 | 类型 | 介绍 |
| --- | --- | --- |
| printerTemplate | struct TextPrinterTemplate * | 文本显示参数模板地址 |
| speed | u8 | 文本打印的速度，(`-1`或`0xFF`时直接显示 ) |
| callback | void* | 回调函数，在文本打印的进程中会随时执行该函数 |

:::tip
当文本显示速度为`-1`或`0xFF`时，文本图像会直接被渲染，并且active设置为FALSE

该函数结束时会返回一个bool16的`TRUE`值，似乎并没有什么用
:::

---
---

## RunTextPrinters{#RunTextPrinters}
```c
void RunTextPrinters(void);
```
💬执行所有active为`TRUE`的文本显示任务，并调用其回调函数，该函数通常放置在`VblankCallBack`实时监控并显示文本

当设置`gDisableTextPrinters`为`TRUE`时所有文本显示停止

:::tip
回调函数仅在文字显示的等待时执行
:::

---
---

## GetStringWidth{#GetStringWidth}
```c
s32 GetStringWidth(u8 fontId, const u8 *str, s16 letterSpacing);
```
💬根据指定字体获取一串文本的图像宽度，可用于计算左右对齐的x起始坐标

| 参数 | 类型 | 介绍 |
| --- | --- | --- |
| fontId | u8 | 该文本的字体 |
| str | const u8* | 文本地址 |
| letterSpacing | s16 | 每个字之间的间隔，当该值为`-1`时使用字体默认的间隔值 |

✔️返回值：
    - `s32`: 该文本的宽度，当文本中存在换行时则返回其中最长一行的宽度

---
---

## GetFontAttribute{#GetFontAttribute}
```c
u8 GetFontAttribute(u8 fontId, u8 attributeId);
```
💬获取字体的指定属性的默认值

| 参数 | 类型 | 介绍 |
| --- | --- | --- |
| fontId | u8 | 字体 |
| attributeId | u8 | 指定的属性 |

✔️attributeId参考：

| attributeId | 类型 | 介绍 |
| --- | --- | --- |
| `FONTATTR_COLOR_SHADOW` | u8 | 字体阴影色编号 |
| `FONTATTR_COLOR_BACKGROUND` | u8 | 字体背景色编号 |
| `FONTATTR_COLOR_FOREGROUND` | u8 | 字体填充色编号 |
| `FONTATTR_LETTER_SPACING` | u8 | 该字体文字的间隔 |
| `FONTATTR_LINE_SPACING` | u8 | 该字体文字行间距 |

✔️返回值：
    - `u8`: 获取到的属性的默认值，不存在时返回`0`

---
---