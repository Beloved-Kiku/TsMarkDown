# TypeScript字面量

**字面量的概念.**

>在 TypeScript 中，字面量（Literal）是指直接表示特定值的语法表示法。

**字面量的作用.**

>字面量可以用于表示字符串、数字、布尔值和对象等不同类型的值。

**常见字面量.**

1. ***字符串字面量***：使用引号括起的字符序列，如 `"hello"` 或 `'world'`。
2. ***数字字面量***：表示数字的直接值，可以是整数或浮点数，如 `42` 或 `3.14`。

```ts
//贪吃蛇移动函数中移动方向字面量限制
type Direction ='上'|'下'|'左'|'右'
function changeDirection(k:Direction){
    //此时该函数传递参数就被限制为了上下左右
    console.log(k)
}
changeDirection('上')
```

## Typescript枚举  

**枚举的概念.**

>枚举（Enumeration）是编程中的一种用于定义一组命名常量的数据类型。它可以帮助我们在代码中表示一组有意义的、相关联的值，并为这些值分配易于记忆的名称

```ts
//typescript中的枚举
enum Direction {
    Up,
    Down,
    Left,
    Right
}
function changeDirection(k:Direction){
    console.log(k)
    //此处利用枚举限制我们所传入的参数只能是枚举中定义好的属性
}
//若在枚举中我们并为给声明的属性赋值则会默认从0开始递增
changeDirection(Direction.Up) // 0
changeDirection(Direction.Down) // 1
changeDirection(Direction.Left) // 2
changeDirection(Direction.Right) // 3

//若其中某一项赋值为数字则在其之后的每一项都会基于赋值数字进行递增
//若其中某一项赋值若不为数字则会停止递增后续值为undefind
enum Add{
    Up,
    Down=100,
    Left,
    Right
}
function ADD(k:Add){
    console.log(k)
}
ADD(Add.Up) //0
ADD(Add.Down) //100
ADD(Add.Left) //101
ADD(Add.Right) //102
//自定义枚举值 但不能为函数体
enum User{
    name='Beloved',
    age=20,
    gender='男',
}
```

## 总结

使用type和枚举对字面量进行限制都是可行的从可读性来讲type更易读.
枚举在某些情况下也可简化开发流程:通过0或1判断性别等特定情况.
