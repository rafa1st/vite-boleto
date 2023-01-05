import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./CadastroBoleto.css";

export default function CadastroBoleto() {
  const [boleto, setBoleto] = useState({
    emissao: "",
    fornecedor: "",
    nota: "",
    vencimento: "",
    parcela: "",
    valor: "",
  });
  
  const navigate = useNavigate();
  
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    navigate("/print", { state: boleto });
  };

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setBoleto((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


  return (
    <div>
      <h3>Cadastro de Boletos</h3>
      
      <form className="container-box">
        <div className="row-1">
          <label>
            Emissão:
            <input
              type="date"
              name="emissao"
              value={boleto.emissao}
              onChange={handleChange}
              placeholder="Data da Emissão"
            />
          </label>
        </div>
        <div className="row-2">
          <label>
            Fornecedor:
            <input
              type="text"
              name="fornecedor"
              value={boleto.fornecedor}
              onChange={handleChange}
              placeholder="Fornecedor"
            />
          </label>
          <label>
            Nota Fiscal:
            <input
              type="number"
              name="nota"
              value={boleto.nota}
              onChange={handleChange}
              placeholder="Nota Fiscal"
            />
          </label>
          <label>
            Vencimento:
            <input
              type="date"
              name="vencimento"
              value={boleto.vencimento}
              onChange={handleChange}
              placeholder="Vencimento"
            />
          </label>
        </div>
        <div className="row-3">
          <label>
            Parcela:
            <input
              type="text"
              name="parcela"
              value={boleto.parcela}
              onChange={handleChange}
              placeholder="Parcela"
            />
          </label>
          <label>
            Valor:
            <input
              type="number"
              name="valor"
              value={boleto.valor}
              onChange={handleChange}
              placeholder="Valor da Nota"
            />
          </label>
        </div>
        <button onClick={handleSubmit}>Imprimir</button>
      </form>
    </div>
  );
}
