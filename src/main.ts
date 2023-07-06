// {
//   //   //ts联合类型 数组中存储多个数据类型
//   //   let array: Array<number | string> = [1, 2, "Beloved"];
//   //   //使用type声明公共类型
//   //   //声明一个type为number或者string的数组
//   //   type ArrayType = (number | string)[];
//   //   type ArrayObj = {
//   //     name?: string;
//   //     age?: number;
//   //     gender?: string;
//   //   };
//   //   const ArrayT: ArrayType = [1, 2, 3, "Beloved"];
//   //   const ArrayO: ArrayObj[] = [
//   //     {
//   //       name: "d",
//   //       age: 18,
//   //       gender: "男",
//   //     },
//   //   ];
//   //   interface IPerson {
//   //     name?: string;
//   //     age?: number;
//   //     gender: string;
//   //   }
//   //   const best: IPerson[] = [];

//   //ts type与interface区别检测
//   type IPerson = {
//     gender: string;
//   };
//   type IHobby = {
//     play: string;
//   };
//   type Boy = IPerson & IHobby & { like: string };
//   interface Girl extends Boy {
//     shopping: string;
//   }
//   const Beloved: Girl = {
//     // gender: "女",
//     play: "code",
//     like: "shopping",
//     shopping: "everyday",
//   };
// }


//类型断言
// interface IType {
//   name: string;
//   age: number;
//   gender: string;
// }

// const obj = <IType>{
//   name: "d",
// };
// const p = document.querySelector("p") as HTMLParagraphElement;
// const img = document.querySelector("img") as HTMLImageElement;
// const a = document.getElementById("link") as HTMLAnchorElement;
