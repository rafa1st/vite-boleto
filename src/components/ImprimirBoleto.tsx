export default function ImprimirBoleto(props: any) {
  return (
    <div>
      <h1>Impressão</h1>
      <p>Data de emissão: {props.emissao}</p>
      <p>Fornecedor: {props.fornecedor}</p>
      <p>Nota Fiscal: {props.nota}</p>
      <p>Vencimento: {props.vencimento}</p>
      <p>Parcela: {props.parcela}</p>
      <p>Valor: R$ {props.valor}</p>
    </div>
  );
}
