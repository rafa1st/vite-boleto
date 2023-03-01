export const meuObjeto = {
    emissao: "",
    fornecedor: "",
    numNota: 0,
    valorNota: 0,
    parcelas: 0,
    vencimentos: [],
    valorParcelas: [],
    tipo: ["tipo0", "tipo1", "tipo2", "tipo3"],
    prazo: 0,
  };
  
  const { tipo } = meuObjeto;
  const [a, b, c, d] = tipo;
  
  console.log(a)
  
  console.log(typeof tipo[1]);
  
  console.log(meuObjeto.tipo[2]);
  
  meuObjeto.tipo.map((item, key ) => {
  
    return console.log(item, key) 
  
  
  })