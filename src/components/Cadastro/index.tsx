import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Printer, Save } from "react-feather";

import "./styles.css";

export default function CadastroBoleto() {
  const [formulario, setFormulario] = useState({
    emissao: "",
    fornecedor: "",
    numNota: 0,
    valorNota: 0,
    parcelas: 0,
    vencimentos: [],
    valorParcelas: [],
    tipo: ["tipo1", "tipo2", "tipo3", "tipo4"],
    prazo: 0,
  });

  const {
    emissao,
    fornecedor,
    numNota,
    valorNota,
    parcelas,
    vencimentos,
    valorParcelas,
    
    prazo,
  } = formulario;

  const navigate = useNavigate();

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    navigate("/print", { state: formulario });
  };

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormulario((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSave = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(formulario);
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
              name="numNota"
              value={numNota}
              onChange={handleChange}
            />
          </label>
          <label>
            Valor da Nota:
            <input
              type="number"
              name="valorNota"
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
              name="parcelas"
              value={parcelas}
              onChange={handleChange}
              placeholder="Qtde de Parcelas"
            />
          </label>
            <label>
              Tipo de parcelamento:
              <select name="tipo" id="tipo" >
                {formulario.tipo.map((item, key) => {
                  return (
                    <option value={formulario.tipo[key]} key={key}>
                      {item}
                    </option>
                  );
                })}
              </select>
            </label>
        </div>
        <div></div>
        <div className="form-buttons">
          <button className="save-btn" onClick={handleSave}>
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
