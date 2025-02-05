export function media(...args: Array<number>): number {
  const soma = args.reduce((acc, value) => acc + value, 0);
  return soma / args.length;
}

export function concatenar(...args: Array<string>): string {
  return args.join(' ');
}

console.log(media(1, 2, 3, 4, 5));
console.log(concatenar('Cristian', 'Israel', 'da', 'Silva'));
