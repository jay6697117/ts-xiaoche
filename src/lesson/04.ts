// 空值 Null 和 Undefined
// let a:undefined = undefined;
// let b:null = null;
// let c:unknown = undefined;
// let d:any = null;
// let e:void = undefined;

// Symbol
// const sym1 = Symbol('k1');
// const sym2 = Symbol('k2');
// console.log(`sym1:`, sym1);
// console.log(`sym2:`, sym2);
// // Symbol 的值是唯一不变的
// console.log(Symbol('k1') === Symbol('k1')); // false
// console.log(Symbol('k2') === Symbol('k2')); // false
// console.log(Symbol('k1') === Symbol('k2')); // false

// BigInt
// const max = Number.MAX_SAFE_INTEGER;
// const max = BigInt(Number.MAX_SAFE_INTEGER);
// console.log(`max:`, max);
// const max1 = max + 1n;
// const max2 = max + 2n;
// console.log(`max1:`, max1);
// console.log(`max2:`, max2);
// console.log(`max1 === max2 :`, max1 === max2);

// declare let num: number;
// declare let big: bigint;
// num = big; // 不能将类型“bigint”分配给类型“number”。ts(2322)
// big = num; // 不能将类型“number”分配给类型“bigint”。ts(2322)

/*
小结
我们总结一下 TypeScript 中的原始类型：

布尔类型：boolean
数字类型：number
字符串类型：string
空值：void
Null 和 Undefined：null 和 undefined
Symbol 类型：symbol
BigInt 大数整数类型：bigint
本节我们介绍了几个基本类型，难度并不大，通过简单了解我们可以读懂一些很基础的TS代码了。
*/

export {};
