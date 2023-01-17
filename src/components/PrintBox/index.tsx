import "./styles.css";
import { convertDate, convertValor } from "../../utils/utils";

const PrintBox = (props: any) => {
  const { fornecedor, vencimento, parcela, valor, mensagem } = props;

  return (
    <div className="print-box">
      <div className="print-data">
        <h4>Fornecedor: {fornecedor}</h4>
        <h4>Vencimento: {convertDate(vencimento)}</h4>
        <h4>Parcela: {parcela}</h4>
        <h4>Valor: {convertValor(valor)}</h4>
      </div>
      <p className="message">{mensagem}</p>
      <div className="signature">
        <hr />
        <p>VIMATEL TELECOM</p>
      </div>
    </div>
  );
};

export default PrintBox;
