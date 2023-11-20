function sum(a: number, b: number): number {
  return a + b;
}

const sum2 = (a: number, b: number): number => a + b;
const sum3 = function (a: number, b: number): number {
  return a + b;
};

sum(2, 4);

function log(name: string, userId?: string): void {
  console.log('Hello', name, 'with ID', userId || 'anonym');
}

log('Mikhail', '213');

function crash(): never {
  throw new Error('crash');
}

function avarage(...nums: number[]) {
  const sum = nums.reduce((current, total) => current + total, 0);

  return sum / nums.length;
}
