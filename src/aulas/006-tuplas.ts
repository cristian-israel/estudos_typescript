// Tuple
const dadosPLataforma: [boolean, number, string] = [true, 1, 'netflix'];
const dadosConta: [boolean, number, string, string?] = [true, 1, 'netflix', 'SAPCE-H'];
const dadosCliente: [boolean, number, number, string, ...string[]] = [true, 2, 1, 'Cristian', 'teste', 'teste1'];

dadosConta[1] = 654;
dadosConta[2] = 'netflix - teste';

console.log(dadosConta);
console.log(dadosCliente);

// Readyonly Array
const array1: readonly string[] = ['Cristian', 'Israel'];
const array2: ReadonlyArray<string> = ['Cristian', 'Israel'];

console.log(array1);
console.log(array2);
