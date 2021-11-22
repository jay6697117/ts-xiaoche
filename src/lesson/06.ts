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
// enum Direction {
//   Up,
//   Down,
//   Left,
//   Right,
// }

// console.log(`Direction:`, Direction);
// // const a = 0;
// // console.log(a === Direction.Up); // true

// type c = 0;
// // declare let b: c;
// // console.log(`c:`, c); // “c”仅表示类型，但在此处却作为值使用
// let b: c;

// // b = 1 // 不能将类型“1”分配给类型“0”。
// // console.log(`b 0:`, b);
// b = 0;
// console.log(`b 1:`, b);
// b = Direction.Up; // ok
// console.log(`b 2:`, b);

// 联合枚举类型

// enum Direction {
//   Up = 100,
//   Down,
//   Left,
//   Right,
// }
// console.log(`Direction 0:`, Direction);

// enum Animal {
//   Dog = '狗',
//   Cat = '猫'
// }
// console.log(`Animal 0:`, Animal);

// // declare let a: Direction;
// let a: Direction;
// // let a: Animal;

// a = Direction['Up'];
// console.log(`a 1:`, a);
// a = Direction['Down'];
// console.log(`a 2:`, a);
// a = Direction['Left'];
// console.log(`a 3:`, a);
// a = Direction['Right'];
// console.log(`a 4:`, a);
// a = 104;
// console.log(`a 5:`, a);
// // a= Animal['Dog'];// 不能将类型“Animal.Dog”分配给类型“Direction”
// // console.log(`a 2:`, a);

// // 我们把 a 声明为 Direction 类型，可以看成我们声明了一个联合类型 Direction.Up | Direction.Down | Direction.Left | Direction.Right，只有这四个类型其中的成员才符合要求。

// 枚举合并
/*
enum Direction {
  Up = 'u',
  Down = 'd',
  Left = 'l',
  Right = 'r',
}
enum Direction {
  Center = 1,
}
console.log(`Direction`, Direction);
// 上面 两个枚举会合并
*/

// 为枚举添加静态方法
enum Month {
  January,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}
console.log(`Month 0:`, Month);

const isSummer = (month: Month) => {
  switch (month) {
    case Month.June:
      return true;
    case Month.July:
      return true;
    case Month.August:
      return true;
    default:
      return false;
  }
};
// console.log(`isSummer:`, isSummer);

namespace Month {
  export const foo = isSummer;
}
console.log(`Month 1:`, Month);

console.log(Month.foo(Month.June)); // false

/*
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

var Direction;

(function (Direction) {
    Direction["Up"] = "u";
    Direction["Down"] = "d";
    Direction["Left"] = "l";
    Direction["Right"] = "r";
})(Direction || (Direction = {}));
(function (Direction) {
    Direction[Direction["Center"] = 1] = "Center";
})(Direction || (Direction = {}));
//# sourceMappingURL=06.js.map
*/

export { Month };
