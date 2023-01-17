//Convertendo para data local (Brasil)
export function convertDate(dateString: string) {
  const date = new Date(dateString);
  const brazilDate = new Intl.DateTimeFormat("pt-BR", {
    timeZone: "UTC",
  }).format(date);
  return brazilDate;
}

//Converter valor no formato moeda local (Brasil)
export function convertValor(valor: number) {
  const valorReais = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(valor);

  return valorReais;
}
