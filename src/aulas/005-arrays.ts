function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((acc, valor) => acc * valor, 1);
}

function concatenaArgs(...args: string[]): string {
  return args.reduce((acc, valor) => acc + valor);
}

function toUpperCase(...args: string[]): string[] {
  return args.map((v) => v.toLocaleUpperCase());
}

console.log(multiplicaArgs(2, 2, 2, 2));
console.log(concatenaArgs("a", "b", "c"));
console.log(toUpperCase("a", "b", "c"));
