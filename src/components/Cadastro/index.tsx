import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Printer, Save } from "react-feather";

import "./styles.css";

export default function CadastroBoleto() {
  const [entrada, setEntrada] = useState({
    nota: {
      emissao: "",
      fornecedor: "",
      numNota: 0,
      valorNota: 0,
    },
    boleto: {
      quantParcela: 0,
      primeiroVencimento: "",
      vencimentos: "",
      valorParcela: 0.0,
    },
  });

  const { emissao, fornecedor, numNota, valorNota } = entrada.nota;
  const { primeiroVencimento, vencimentos, quantParcela, valorParcela } =
    entrada.boleto;

  const navigate = useNavigate();

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    navigate("/print", { state: entrada });
  };

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setEntrada((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <h3>Cadastro de Boletos</h3>
      <form className="container-form">
        <div>
          <label>
            Emissão:
            <input
              type="date"
              name="emissao"
              value={emissao}
              onChange={handleChange}
              placeholder="Data da Emissão"
            />
          </label>
          <label>
            Fornecedor
            <input
              type="text"
              name="fornecedor"
              value={fornecedor}
              onChange={handleChange}
              placeholder="Nome do fornecedor"
            />
          </label>
          <label>
            Nota Fiscal:
            <input
              type="number"
              name="nota"
              value={numNota}
              onChange={handleChange}
            />
          </label>
          <label>
            Valor da Nota:
            <input
              type="number"
              name="valor"
              value={valorNota}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
        <label>
            Parcelas:
            <input
              type="number"
              name="parcela"
              value={quantParcela}
              onChange={handleChange}
              placeholder="Qtde de Parcelas"
            />
          </label>
          <label>
            Tipo de parcelamento:
            <option>tipo1</option>
          </label>
        </div>
        <div></div>
        <div className="form-buttons">
          <button className="save-btn" onClick={(e) => e.preventDefault()}>
            <Save className="icon-feather" />
            Salvar
          </button>
          <button className="print-btn" onClick={handleSubmit}>
            <Printer className="icon-feather" />
            Imprimir
          </button>
        </div>
      </form>
    </div>
  );
}
