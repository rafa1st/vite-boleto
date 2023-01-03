import { useLocation } from "react-router-dom";

const PrintPage = () => {
  const { state } = useLocation();

  return (
    <>
      <h3>Imprimir</h3>
      <p>{state.emissao}</p>
      <p>{state.fornecedor}</p>
      <p>{state.nota}</p>
      <p>{state.vencimento}</p>
      <p>{state.parcela}</p>
      <p>{state.valor}</p>
    </>
  );
};

export default PrintPage;
