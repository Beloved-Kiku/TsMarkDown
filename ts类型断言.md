# TypeScript类型断言

**什么是类型断言?**
>强制将某个对象或者变量转化为某个类型
**为什么需要类型断言?**
>在某些特定的情况下我们已知某些数据的具体类型但是ts编译器无法识别此时就需要用到类型断言
>
>>类型断言语法: as Type  或 <Type>

```ts
//普通对象的类型断言
//将某个对象强行断言为某个接口类型
//不推荐使用 因为这样会失去ts自身的类型检测
interface  IType {
    name:string
    age:number,
    gender:string
}
const people =<IType>{
    name:'Beloved'
}
//使用类型断言获取DOM元素
//此时如果我们不使用类型断言当我们在访问获取到的DOM元素属性时则会出现null等报错信息
const p = document.querySelector("p") as HTMLParagraphElement;
const img = document.querySelector("img") as HTMLImageElement;
const a = document.getElementById("link") as HTMLAnchorElement;

```

**双重断言.**
>当使用者了解传入参数更具体的类型时，类型断言能按预期工作

```ts
//获取鼠标事件
function handler(event: Event) {
  const mouseEvent = event as MouseEvent;
}
function handler(event: Event) {
  const element = event as HTMLElement; // Error: 'Event' 和 'HTMLElement' 中的任何一个都不能赋值给另外一个
}
//如果你仍然想使用那个类型，你可以使用双重断言。首先断言成兼容所有类型的 any，编译器将不会报错：
function handler(event: Event) {
  const element = (event as any) as HTMLElement; 
}
```

## 总结

1. 类型断言推荐使用as 同时尽量避免出现 as any  
2. 类型断言通常用于获取DOM元素或者是我们已经确定被断言对象类型的情况的下使用
