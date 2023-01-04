import { useLocation, useNavigate } from "react-router-dom";

import "./Print.css";

const Print = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const handleClick = (e: {preventDefault: () => void}) => {
    e.preventDefault();
    navigate("/dashboard");
  }



  return (
    <div className="print">
      <h3>Imprimir</h3>
      <p>{state.emissao}</p>
      <p>{state.fornecedor}</p>
      <p>{state.nota}</p>
      <p>{state.vencimento}</p>
      <p>{state.parcela}</p>
      <p>{state.valor}</p>
      <button type="button" onClick={handleClick}>Voltar</button>
    </div>
  );
};

export default Print;
