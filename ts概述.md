# Typescript概述  

**什么是ts?**</br>

`ts全称为Typescript是JavaScript的超集`</br>

**为什么需要ts?**</br>

1. 使用ts可以让我们的项目稳定性提升。
2. 使用ts可以对函数变量等进行类型限制降低维护成本。
3. 同样的功能，TS的代码量要大于JS，但由于TS的代码结构更加清晰，变量类型更加明确，在后期代码的维护中TS却远远胜于JS。
4. 使用ts可以更好的进行模块化开发。

**ts和js有什么区别?**
> 语言类型的强弱不同
>
>> Js 解释型弱类型语言且是动态语言在代码执行中可以动态为对象添加属性

```js
   function Person(name){
    this.name = name
   }
   const p1 =new Person('Beloved')
   p1.age =20

```

>在上述代码中我们创建了Person的构造函数并且为它添加了一个age的属性这在js中是合法的  
>> ts 编译型强类型语言且是静态语言在代码执行中不能随意添加属性

```ts
function Person(name) {
  this.name = name;
}
const p1 = new Person("Beloved");
p1.age = 20;
console.log(p1);
//Property 'age' does not exist on type 'Person'
```

>>在ts中这段代码就会产生报错,提示Person不存在age属性

## 总结  

1. TS是在JS的基础上增加的类型检测是基于JS的本质上也还是JS
2. TS是强语言,是需要使用ts编译器预编译转化为JS然后通过JS编译器执行
3. TS对JS进行了扩展，向JS中引入了类型的概念，并添加了许多新的特性。
4. TS完全兼容JS，换言之，任何的JS代码都可以直接当成JS使用。
5. 相较于JS而言，TS拥有了静态类型，更加严格的语法，更强大的功能。
6. TS的类型限制便于我们在代码编写阶段就能找出编码错误而不是像JS在代码执行时进行报错,降低了我们查找BUG时间。
