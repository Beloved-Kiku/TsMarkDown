# TypeScript多个泛型约束

**在某些情况下我们可以需要对多个泛型进行约束.**

```ts
//需求传入一个对象以及对象所包含的某一个key返回对应的属性值
//js
function Foo(obj,key){
return obj[key]
}
// ts 
function Foo(obj:object,key:string){
    return obj[key]
}
//上面这段代码在js中能够正确执行 但是在ts中我们不能通过编译
//Error:No index signature with a parameter of type 'string' was found on type '{}'.
//此时我们就需要用到多个泛型对多个参数进行约束
//因为我们是用key去匹配obj中的箭名所以我们要对泛型K进行约束与obj中的key相匹配
interface IPerson {
  name: string;
  age: number;
  gender: string;
}
function Foo<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
const p1: IPerson = {
  name: "Beloved",
  age: 18,
  gender: "男",
};
const p2: IPerson = {
  name: "CSH",
  age: 18,
  gender: "女",
};
```

**在某些情况下我们还可以使用keyof获取我们所定义接口的属性键和属性类型.**

```ts
type PersonKeys = keyof IPerson; //name,age,gender
type PeopleKeys = keyof IPeople; //name age gender

type PersonValues = IPerson[keyof IPerson]; //string number string
type PeopleValues = IPeople[keyof IPeople]; //string number string
```

**在某些情况下我们要求某个变量的值必须为某个对象的键名时也可以使用keyof.**  

```ts
let number:keyof Iperson = ''//name |age |gender
```
