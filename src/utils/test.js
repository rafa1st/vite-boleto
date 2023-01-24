const { Database } = require("feather-icons-react/build/IconComponents");

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
    vencimento: [], // lista de vencimentos de cada boleto da nota
    valorParcela: [], // lista de valores de cada parcela
  },
};

const { vencimento, parcela, valorParcela } = entrada.boleto;

const options = {
  timeZone: "UTC",
  dateStyle: "short",
};

const dataBase = new Date("2023-01-21");
console.log(dataBase);
// console.log(dataBase.toLocaleString("pt-BR", options));

for (i = 0; i < parcela; i++) {
  dataBase.setDate(dataBase.getDate() + 28)
  vencimento.push(dataBase.toLocaleDateString())
  console.log(vencimento[i]);
}

console.log(`formato toLocaleString = ${dataBase.toLocaleString()}`);
console.log(`formato toLocaleDateString = ${dataBase.toLocaleDateString()}`);
console.log(`formato toDateString = ${dataBase.toDateString()}`);
console.log(vencimento)
