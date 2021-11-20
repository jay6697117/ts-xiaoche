// 数字枚举
// enum Direction {
//   Up = 100,
//   Down,
//   Left,
//   Right,
// }
// console.log(`Direction:`, Direction);

// console.log(`Direction[100]:`, Direction[100]);
// console.log(`Direction[101]:`, Direction[101]);
// console.log(`Direction[102]:`, Direction[102]);
// console.log(`Direction[103]:`, Direction[103]);
// console.log(`Direction['Up']:`, Direction['Up']);
// console.log(`Direction['Down']:`, Direction['Down']);
// console.log(`Direction['Left']:`, Direction['Left']);
// console.log(`Direction['Right']:`, Direction['Right']);

// 字符串枚举
// enum Direction1 {
//   Up = 'u',
//   Down = 'd',
//   Left = 'l',
//   Right = 'r',
// }
// console.log(`Direction1:`, Direction1);
// console.log('----------------------------------');
// console.log(`Direction1['Up']:`, Direction1['Up']);
// console.log(`Direction1['Down']:`, Direction1['Down']);
// console.log(`Direction1['Left']:`, Direction1['Left']);
// console.log(`Direction1['Right']:`, Direction1['Right']);
// console.log('----------------------------------');

// 异构枚举
// enum Egnum {
//   NO = 0,
//   YES = 'yes',
// }

// console.log(`Egnum`, Egnum);
// console.log('----------------------------------');
// console.log(`Egnum[0]:`, Egnum[0])
// console.log(`Egnum['NO']:`, Egnum['NO'])
// console.log(`Egnum['YES']:`, Egnum['YES'])

// 反向映射
// enum Direction {
//   Up = 100,
//   Down,
//   Left,
//   Right,
// }
// console.log(`Direction:`, Direction)
// // console.log(Direction.Up === 0); // true
// // console.log(Direction.Down === 1); // true
// // console.log(Direction.Left === 2); // true
// // console.log(Direction.Right === 3); // true

// 枚举的本质
/*
"use strict";
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.Up === 0);
console.log(Direction.Down === 1);
console.log(Direction.Left === 2);
console.log(Direction.Right === 3);
*/

/*
"use strict";
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 100] = "Up";
    Direction[Direction["Down"] = 101] = "Down";
    Direction[Direction["Left"] = 102] = "Left";
    Direction[Direction["Right"] = 103] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.Up === 100);
console.log(Direction.Down === 101);
console.log(Direction.Left === 102);
console.log(Direction.Right === 103);
*/
// 我们可以把枚举类型看成一个JavaScript对象，而由于其特殊的构造，导致其拥有正反向同时映射的特性。

// 常量枚举

// const enum Direction {
//   Up = 'u',
//   Down = 'd',
//   Left = 'l',
//   Right = 'r',
// }

// console.log(`Direction['Up']:`, Direction['Up']);
// const aaa = Direction['Up'];
// console.log(`aaa:`, aaa);

/*
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Direction['Up']:", "u");
var aaa = "u";
console.log("aaa:", aaa);
//# sourceMappingURL=06.js.map
*/

// enum Direction {
//   Up,
//   Down,
//   Left,
//   Right
// }
// enum Direction1 {
//   Up = -1,
//   Down = -2,
//   Left = -3,
//   Right = -4,
// }
// console.log(`Direction 000:`, Direction)
// console.log(`Direction1 001:`, Direction1)

/*
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = -1] = "Up";
    Direction1[Direction1["Down"] = -2] = "Down";
    Direction1[Direction1["Left"] = -3] = "Left";
    Direction1[Direction1["Right"] = -4] = "Right";
})(Direction1 || (Direction1 = {}));
console.log("Direction 000:", Direction);
console.log("Direction1 001:", Direction1);
*/

// 枚举成员类型

enum Direction {
  Up,
  Down,
  Left,
  Right,
}

console.log(`Direction:`, Direction)
// const a = 0;
// console.log(a === Direction.Up); // true

type c = 0;

declare let b: c;

// b = 1 // 不能将类型“1”分配给类型“0”
b = 0;
b = Direction.Up; // ok

export {};
