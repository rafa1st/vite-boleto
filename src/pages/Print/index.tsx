import { ArrowLeft } from "react-feather";
import { useLocation, useNavigate } from "react-router-dom";

import "./styles.css";

const Print = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const handleClick = (e: {preventDefault: () => void}) => {
    e.preventDefault();
    navigate("/");
  }





  return (
    <div className="print">
      <h3>Imprimir</h3>
      <div>
      <p>Emissão: {state.emissao}</p>
      <p>Fornecedor: {state.fornecedor}</p>
      <p>Nota: {state.nota}</p>
      <p>Vencimento {state.vencimento}</p>
      <p>Parcela: {state.parcela}</p>
      <p>Valor: R$ {state.valor}</p>

      </div>
      
      <button type="button" onClick={handleClick}><ArrowLeft className="arrow"/>Voltar</button>
    </div>
  );
};

export default Print;
