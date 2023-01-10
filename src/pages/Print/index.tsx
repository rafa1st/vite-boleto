import { ArrowLeft } from "react-feather";
import { useLocation, useNavigate } from "react-router-dom";

import "./styles.css";

const Print = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const mensagem = `O boleto referente à Nota Fiscal n° ${state.nota} emitido em ${state.emissao} não estava junto da nota fiscal na hora que foi efetivada a entrada  no sistema. Caso o boleto não chegar até o vencimento acima, por favor, entrar em contato com o fornecedor e solicitar uma segunda via.`;

  const handleClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    navigate("/cadastro");
  };


  return (
    <div className="print-container">
      <button className="print-button" type="button" onClick={handleClick}>
        <ArrowLeft className="icon-arrow-left" />
        Voltar
      </button>
      <h3>Imprimir</h3>
      <div className="print-box">
        <div className="print-data">
          <h4>Fornecedor: {state.fornecedor}</h4>
          <h4>Vencimento: {state.vencimento}</h4>
          <h4>Parcela: {state.parcela}</h4>
          <h4>Valor: R$ {state.valor}</h4>
        </div>
        <p className="message">{mensagem}</p>
        <div className="signature">
          <hr />
          <p>VIMATEL TELECOM</p>
        </div>
      </div>
      <div className="print-box">
        <div className="print-data">
          <h4>Fornecedor: {state.fornecedor}</h4>
          <h4>Vencimento: {state.vencimento}</h4>
          <h4>Parcela: {state.parcela}</h4>
          <h4>Valor: R$ {state.valor}</h4>
        </div>
        <p className="message">{mensagem}</p>
        <div className="signature">
          <hr />
          <p>VIMATEL TELECOM</p>
        </div>
      </div>
      <div className="print-box">
        <div className="print-data">
          <h4>Fornecedor: {state.fornecedor}</h4>
          <h4>Vencimento: {state.vencimento}</h4>
          <h4>Parcela: {state.parcela}</h4>
          <h4>Valor: R$ {state.valor}</h4>
        </div>
        <p className="message">{mensagem}</p>
        <div className="signature">
          <hr />
          <p>VIMATEL TELECOM</p>
        </div>
      </div>
    </div>
  );
};

export default Print;
