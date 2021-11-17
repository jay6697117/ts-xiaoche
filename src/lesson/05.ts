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
