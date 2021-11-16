class Foo {
  fn(input: string): number {
    return parseInt(input);
  }
}

class Bar {
  fn(input: string): number {
    return parseInt(input);
  }
}

const foo: Foo = new Foo(); // Okay.
const bar: Bar = new Foo(); // Okay.

console.log(`foo:`, foo);
console.log(`bar:`, bar);

const res1 = foo.fn('123');
console.log(`res1:`, res1);
const res2 = bar.fn('456');
console.log(`res2:`, res2);
