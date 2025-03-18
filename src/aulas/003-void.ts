function semRetorno(...args: string[]): void {
  console.log(args);
  return;
}

// const pessoa: { nome: string; idade: number; genero: 'masculino' | 'feminino'; exibirNome: void } = {
//   nome: 'Cristian',
//   idade: 21,
//   genero: 'masculino',
// };

const pessoa = {
  nome: 'Cristian',
  sobrenome: 'Israel',
  exibirNomeCompleto(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('console', 'teste');
pessoa.exibirNomeCompleto();
