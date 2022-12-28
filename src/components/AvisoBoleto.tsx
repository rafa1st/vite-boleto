import { useState } from "react";
import "/src/styles/AvisoBoleto.css";

export default function AvisoBoleto() {
  const [boleto, setBoleto] = useState({
    emissao: "",
    fornecedor: "",
    nota: "",
    vencimento: "",
    parcela: "",
    valor: "",
  });

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
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
      <h3>Início do Componente</h3>
      <body>
        <h1>Cadastro de boletos</h1>
        <form className="container-box">
          <div>
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
                type="text"
                name="valor"
                value={boleto.valor}
                onChange={handleChange}
                placeholder="Valor da Nota"
              />
            </label>
          </div>
          <button onClick={handleSubmit}>Cadastrar</button>
        </form>
        
        <p>emissao: {boleto.emissao}</p>
        <p>fornecedor: {boleto.fornecedor}</p>
        <p>nota: {boleto.nota}</p>
        <p>vencimento: {boleto.vencimento}</p>
        <p>parcela: {boleto.parcela}</p>
        <p>valor: {boleto.valor}</p>
      </body>
    </div>
  );
}
