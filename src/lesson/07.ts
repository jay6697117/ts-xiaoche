// 接口(interface)

/*
function sayHi(word: string): string {
  return 'hi,' + word + ';';
}

interface User {
  name: string;
  age?: number;
  readonly isMale: boolean;
  sayHi: (word: string) => string;
}

const getUserInfo: any = (user: User) => {
  console.log(`user:`, user);
  user.name = '啦啦啦';
  // user.isMale = false; //无法分配到 "isMale" ，因为它是只读属性
  user.sayHi = sayHi;
  return `${user.name} - ${user.age} - ${user.isMale} - ${user.sayHi('李小龙')}`;
};

// console.log(`getUserInfo:`, getUserInfo);
console.log(getUserInfo({ name: 'zjh', age: 31, isMale: true }));
console.log(getUserInfo({ name: 'ytt', isMale: false }));
*/

// 属性检查

/* interface Config {
  width?: number;
  [propName: string]: unknown;
}
function CalculateAreas(config: Config): { area: number } {
  let square = 0;
  if (config.width) {
    square = config.width * config.width;
  }
  return { area: square };
}
//传入了配置{number:5}
let mySquare = CalculateAreas({ widddth: 5 });
console.log(`mySquare:`, mySquare);
//传入了配置{number:undefined}
let mySquare1 = CalculateAreas({});
console.log(`mySquare1:`, mySquare1); */

// 可索引类型
interface Phone {
  [prop: string]: string;
}
interface User {
  name: string;
  age: number;
  isMale: boolean;
  sayHi: (param: string) => string;
  phone: Phone;
}
const user: User = {
  name: '张金辉',
  age: 33,
  isMale: true,
  sayHi: (name: string): string => `hi, ${name}`,
  phone: { NetEase: 'xiaoming@163.com', qq: '784536325@qq.com', sina: 'abc784536325@sina.com' },
};

console.log(`user:`, user);
console.log(user.phone);
console.log(user.sayHi('张金辉'));


// 默认导出模块
export {};
