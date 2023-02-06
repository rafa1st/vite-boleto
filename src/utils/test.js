const entrada = {
  //objeto que tem as informações da nota
  nota: {
    emissao: "", // data da emissão da nota
    fornecedor: "", // nome fornecedor
    nota: 0, // número da nota
    valorNota: 0.0, // valor total da nota fiscal
  },
  //agora as informações para os boletos
  boleto: {
    parcela: 3, // quantidad e de parcelas se === 1 === única
    vencimento: [{ id: "", name: "Rafael" }], // lista de vencimentos de cada boleto da nota
    valorParcela: [
      { valor: 10.0, dataVencimento: "2023-02-05" },
      { valor: 20.0, dataVencimento: "2023-03-05" },
    ], // lista de valores de cada parcela
  },
};

const { parcela, vencimento, valorParcela } = entrada.boleto;
console.log(parcela);
console.log(vencimento[0].name);


valorParcela.push({
  valor: 30,
  dataVencimento: "2023-04-05",
});

for (let i = 0; i < parcela; i++) {
  console.log(valorParcela[i].valor);
}

console.log(valorParcela);
console.log(parcela.length)