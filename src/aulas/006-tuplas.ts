const dadosCliente1: readonly [string, number] = ["Cristian", 21];
const dadosCliente2: [string, number, string] = ["Cristian", 21, "Silva"];
const dadosCliente3: [string, number, string, string?] = [
  "Cristian",
  21,
  "Silva",
];
const dadosCliente4: [string, string, number, ...string[]] = [
  "Cristian",
  "Israel",
  21,
];

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);

dadosCliente2[1] = 22;
dadosCliente3[2] = "Israel";

console.log("\n\n");
console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);

// readeonly
const array1: readonly string[] = ["Cristian", "Israel"];
const array2: ReadonlyArray<string> = ["Cristian", "Israel"]; 
