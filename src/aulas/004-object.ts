const objetoA: { chaveA: string; chaveB: string; chaveC?: string; [key: string]: unknown } = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

objetoA.chaveA = 'Valor diferente';
objetoA.chaveC = 'Valor C';
objetoA.chaveD = 1;
