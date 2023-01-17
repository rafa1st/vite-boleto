import { ArrowLeft } from "react-feather";
import { useLocation, useNavigate } from "react-router-dom";
import PrintBox from "../../components/PrintBox";
import { convertDate } from "../../utils/utils";

import "./styles.css";

const Print = () => {
  const { state } = useLocation();
  const { nota, emissao, vencimento, fornecedor, valor, parcela } = state;
  const navigate = useNavigate();
  const mensagem = `O boleto referente à Nota Fiscal n° ${nota} emitido em ${convertDate(
    emissao
  )} não estava junto da nota fiscal na hora que foi efetivada a entrada  no sistema. Caso o boleto não chegar até o vencimento acima, por favor, entrar em contato com o fornecedor e solicitar uma segunda via.`;

  //handleclick para voltar para página anterior, perdendo o state
  const handleClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    navigate("/cadastro");
  };

 // area de funções, testes e outros

  //Calculando o valor total divido pelas parcelas
  function calcValorParcela(parcela: number, valor: number) {
    return valor / parcela;
  }

  //calculo do valor da parcela;
  const valorParcela = calcValorParcela(parcela, valor);

  //tentativa com map = funciona ok
  const quantParcelas = [];
  for (let i = 0; i < parcela; i++) {
    quantParcelas.push(i);
  }

  // testes

  
  //render do codigo
  return (
    <div className="print-container">
      <button className="back-btn" type="button" onClick={handleClick}>
        <ArrowLeft className="icon-arrow-left" />
        Voltar
      </button>
      <h3>Imprimir</h3>
      {quantParcelas.map((item, index) => (
        <PrintBox
          fornecedor={fornecedor}
          vencimento={vencimento}
          parcela={parcela}
          valor={valorParcela}
          mensagem={mensagem}          
          key={index}
          item={item}
        />
      ))}
      <h1>{parcela}</h1>
    </div>
  );
};

export default Print;