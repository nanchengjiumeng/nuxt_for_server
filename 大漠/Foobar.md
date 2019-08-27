---
layout: dmLayout
---

# Foobar

## dm.CreateFoobarCustom 创建一个自定义形状的窗口

`dm.CreateFoobarCustom`根据指定的位图创建一个自定义形状的窗口

- 示例:

```js
foobar = dm.CreateFoobarCustom(hwnd,10,10,"菜单.bmp","FF00FF",1.0)
```
- 函数原型:

long CreateFoobarCustom(`hwnd`,`x`,`y`,`pic_name`,`trans_color`,`sim`)

- 参数定义:

    - `hwnd` 整形数: 指定的窗口句柄,如果此值为0,那么就在桌面创建此窗口

    - `x` 整形数: 左上角X坐标(相对于hwnd客户区坐标)

    - `y` 整形数: 左上角Y坐标(相对于hwnd客户区坐标)

    - `pic_name` 字符串: 位图名字

    - `trans_color` 字符串: 透明色(RRGGBB)

    - `sim` 双精度浮点数: 透明色的相似值 0.1-1.0

- 返回值: 

    - 整形数 创建成功的窗口句柄