// any
// let notsure: any = 123;
// notsure = 'may be is a string';
// console.log(`notsure:`, notsure);

// unknown
// function dateToString(param: unknown): string {
//   if (param instanceof Date) {
//     return param.toISOString();
//   }
//   return String(param);
// }

// console.log(dateToString(123));
// console.log(dateToString(new Date()));
// console.log(typeof dateToString(123));

// never
// // 抛出异常的函数永远不会有返回值
// function error(message: string): never {
//   throw new Error(message);
// }

// // 空数组，而且永远是空的
// const empty: never[] = [];
// console.log(`empty:`, empty)

// error('我是错误');//报错

// 数组
// const numArr: Array<number> = [1, 2, 3];
// console.log(`numArr:`, numArr);
// const strArr: string[] = ['4', '5', '6'];
// console.log(`strArr:`, strArr);

// 元组（Tuple）
let x: [string, number];
x = ['1', 2];
console.log(`x 000:`, x);
x.push('越界');
console.log(`x 001:`, x);
console.log('--------------------');
console.log(`x.length:`, x.length);
console.log(`x[0]:`, x[0]);
console.log(`x[1]:`, x[1]);
// ts允许向元组中使用数组的push方法插入新元素(但不允许访问)
// console.log(`x[2]:`, x[2]);