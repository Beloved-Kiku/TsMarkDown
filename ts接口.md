# TypeScript接口

>使用interface关键字声明一个接口

```ts
interface IPerson {
    name?:string
    age?:string
    gender?:string
}
//使用方法用type相似
//使用接口对数组进行限制
const best:IPerson[] =[{
    name:"Beloved"
}] 
//使用接口对普通对象限制
const best:IPerson ={
    name:"Best"
}

```

## interface和type的区别

```ts

//多个同名interface会进行自动合并

  interface IBest {
    name: string;
  }
  interface IBest {
    age: number;
  }
  const best: IBest = {
    name: "Best",
    age: 18,
  };
  //interface可以继承别的interface

  interface IL extends IBest{
    address:string
  }
  const boy:IL ={
    name: "Best",
    age: 18,
    address:'China'
  }
  //interface继承type对象结构
  
   type IPerson = {
    gender: string;
  };
  type IHobby = {
    play: string;
  };
  type Boy = IPerson & IHobby & { like: string };
  interface Girl extends Boy {
    shopping: string;
  }
  const Beloved: Girl = {
    gender: "女",
    play: "code",
    like: "shopping",
    shopping: "everyday",
  };
  //type 继承方式只能通过& 无法使用extends

  type A = {
    name:string
  }
  type B= {age:string} & A
```

1. type 后面有 =interface 没有。
2. type 能表示的任何类型组合。
3. interface 只能表示对象结构的类型。
4. interface 可以继承（extends）另一个 interface。
5. interface 也可以继承自 type，但只能是对象结构，或多个对象组成交叉类型（&）的 type。
6. type 只能通过 & 做对象结构的继承；
7. interface 支持声明合并，文件下多个同名的 interface，它们的属性会进行合并,但是同名属性的不能进行类型覆盖修改。
8. type 不支持声明合并，一个作用域内不允许有多个同名 type。
