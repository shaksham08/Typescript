function add(n1: number, n2: number): number {
  const result = n1 + n2;
  return result;
}

function printResult(n1: number): void {
  console.log(n1);
}

let combineValue: (a: number, b: number) => number;

combineValue = add;

console.log(combineValue(10, 10));
