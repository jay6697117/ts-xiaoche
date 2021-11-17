// any
// let notsure: any = 123;
// notsure = 'may be is a string';
// console.log(`notsure:`, notsure);


// unknown
function dateToString(param: unknown): string {
  if (param instanceof Date) {
    return param.toISOString();
  }
  return String(param);
}

console.log(dateToString(123));
console.log(dateToString(new Date()));
console.log(typeof dateToString(123));