/*
// 1.0 静态属性
class A {
  static p = 1;
}
console.dir(A);
console.log(A.p)
*/

/*
// 2.0 抽象类
abstract class Animal {
  abstract makeSound(param: unknown): void;
  move(param: unknown): void {
    console.log(`move:\n ${param}`);
  }
}

class Cat extends Animal {
  makeSound(param: unknown): void {
    console.log(`makeSound:\n ${param}`);
  }
}

const cat = new Cat();
console.log(`cat:`, cat);
console.log(`Cat.prototype:\n`, Cat.prototype);
cat.makeSound('miao miao miao !!!');
cat.move('run run run cat !!!');

// const animal = new Animal(); // error: 无法创建抽象类的实例。ts(2511)
// function foo(params: unknown): void {}
// 默认导出模块
export {};
*/

/*
// 3.0 访问限定符
class Car {
  public run1() {
    console.log('public 启动 1...');
  }
  private run2() {
    console.log('private 启动 2...');
  }
  protected run3(params: any) {
    console.log('protected 启动 3...' + ' -- ' + params);
  }
  constructor() {
    this.run3(1);
    this.run2();
  }
}

class RaceCar extends Car {
  constructor() {
    super(); // super === Car.prototype.constructor
    this.run3(2);
  }
}

const car = new Car();
car.run1(); // 启动...
console.log('----------------');
const raceCar = new RaceCar();
*/

// 4.0 class 可以作为接口
// class Carousel extends React.Component<Props, State> {}


/*
// props的类型
class Props {
  public children: Array<React.ReactElement<any>> | React.ReactElement<any> | never[] = []
  public speed: number = 500
  public height: number = 160
  public animation: string = 'easeInOutQuad'
  public isAuto: boolean = true
  public autoPlayInterval: number = 4500
  public afterChange: () => {}
  public beforeChange: () => {}
  public selesctedColor: string
  public showDots: boolean = true
}
*/


// Props 的实例就是 defaultProps 的初始值
// public static defaultProps = new Props()

// 默认导出模块
export {};
