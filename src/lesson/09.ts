// 1
// const add: (a: number, b?: number | undefined) => number = (a: number, b: number | undefined = 100): number =>
//   a + (b ? b : 0);
// console.log('add(10,20):', add(10));

// 2
// const add = (a: number, ...rest: number[]) => rest.reduce((a, b) => a + b, a);
// console.log(add(0, 1, 2, 3));

//3 函数重载
// function assigned(a: number, b?: number, c?: number, d?: any) {
//   if (b === undefined && c === undefined && d === undefined) {
//     b = c = d = a;
//   } else if (c === undefined && d === undefined) {
//     c = a;
//     d = b;
//   }

//   return {
//     top: a,
//     right: b,
//     bottom: c,
//     left: d,
//   };
// }
// console.log(assigned(1, 2, 3));

// 重载1

interface Direction {
  top: number;
  bottom?: number;
  left?: number;
  right?: number;
}
function assigned(all: number): Direction; //1
function assigned(topAndBottom: number, leftAndRight: number): Direction; //2
function assigned(topAndBottom: number, leftAndRight: number, three: number): Direction; //3
function assigned(top: number, right: number, bottom: number, left: number): Direction; //4

function assigned(a: number, b?: number, c?: number, d?: number) {
  if (b === undefined && c === undefined && d === undefined) {
    b = c = d = a;
  } else if (c === undefined && d === undefined) {
    c = a;
    d = b;
  } else if (d === undefined) {
    c = a;
    d = b;
  }

  return {
    top: a,
    right: b,
    bottom: c,
    left: d,
  };
}

console.log(assigned(1)); //1
console.log(assigned(1, 2)); //2
console.log(assigned(1, 2, 3)); //3报错
console.log(assigned(1, 2, 3, 4)); //4

//重载2
type n = number;
type s = string;
function reverseFn(x: number): n;
function reverseFn(x: string): s;
function reverseFn(x: number | string): n | s | void {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
console.log(reverseFn(123))
console.log(reverseFn('hello'))
