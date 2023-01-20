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
    parcela: 0, // quantidad e de parcelas se === 1 === única
    vencimento: [], // lista de vencimentos de cada boleto da nota
    valorParcela: [], // lista de valores de cada parcela
  },
};

const { vencimento, parcela, valorParcela } = entrada.boleto;

vencimento.push("2023-02-20", "2023-03-20");

const days0 = vencimento[0];
const days1 = vencimento[1];

console.log(days1)
console.log(days0)

console.log(
  new Intl.DateTimeFormat("pt-BR", {    
    timeZone: "UTC",
    dateStyle: "full"
  }).format(new Date(vencimento[1]))
);
