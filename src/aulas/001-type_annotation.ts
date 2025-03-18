// Tipos básicos
let nome: string = 'Teste';
let idade: number = 30;
let adulto: boolean = true;
let simbolo: symbol = Symbol('qualquer-tipo');
let big: bigint = 10n;

// Arrays
let arrayOfNumbers: number[] = [1, 2, 3];
let arrayOfStrings: string[] = ['a', 'b', 'c'];
let arrayOfNumbersGeneric: Array<number> = [1, 2, 3];
let arrayOfStringsGeneric: Array<string> = ['a', 'b', 'c'];

// Objetos
let pessoa: { nome: string; idade: number; adulto?: boolean } = {
  nome: 'Cristian',
  idade: 1,
};

// Funções
function soma(x: number, y: number) {
  return x + y;
}

const soma2: (x: number, y: number) => string = (x, y) => (x + y).toString();
