# TypeScript类型

**基础声明**

```ts
const str:string = 'Beloved'
const num:number = 1
//等效于
const str<string> ='Beloved'
const num<number>=2
```

**ts联合类型**

```ts
const gender<string|number> = '男'|1
```

**ts中Type的基本使用**

>Type可以将多个类型聚合在一起重复使用

```ts

//对数组中的对象属性进行类型限制
type ArrayType ={
    name:string;
    age:number;
    gender:string|number;
}
const Array:ArrayType[] =[{
    name:'Beloved',
    age:20,
    gender:1
}] 
//对数组中值进行限制(若类型后面没有指定数据类型也可以给普通变量)
type ArrayType = string|number|boolean
const data:ArrayType = ['Beloved',1,true]
const  res:ArrayType  ='Beloved' 
```
