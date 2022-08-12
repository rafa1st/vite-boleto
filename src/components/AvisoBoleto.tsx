import { useState } from "react";
import "/src/styles/AvisoBoleto.css";

export default function AvisoBoleto() {
  const [boleto, setBoleto] = useState({
    emissao: "",
    fornecedor: "",
    nota: "",
    vencimento: "",
    cod: "",
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
    <div className="aviso-boleto">
      <h3>Início do Componente</h3>
      <body>
        <h1>Cadastro de boletos</h1>
        <form className="container-box" onSubmit={handleSubmit}>
          <div>
            <label>Emissão:</label>
            <input
              type="date"
              name="emissao"
              value={boleto.emissao}
              onChange={handleChange}
              placeholder="Data da Emissão"
            />
          </div>
          <div className="row-2">
            <label>Código:</label>
            <input
              type="number"
              name="cod"
              value={boleto.cod}
              onChange={handleChange}
              placeholder="Código"
            />          
            <label>Fornecedor:</label>
            <input
              type="text"
              name="fornecedor"
              value={boleto.fornecedor}
              onChange={handleChange}
              placeholder="Fornecedor"
            />
            <label>Nota Fiscal: </label>
            <input
              type="number"
              name="nota"
              value={boleto.nota}
              onChange={handleChange}
              placeholder="Nota Fiscal"
            />          
            <label>Vencimento: </label>
            <input
              type="date"
              name="vencimento"
              value={boleto.vencimento}
              onChange={handleChange}
              placeholder="Vencimento"
            />
          </div>
          <div className="row-3">
            
            <label>Parcela: </label>
            <input
              type="text"
              name="parcela"
              value={boleto.parcela}
              onChange={handleChange}
              placeholder="Parcela"
            />
            <label>Valor: </label>
            <input
              type="text"
              name="valor"
              value={boleto.valor}
              onChange={handleChange}
              placeholder="Valor da Nota"
            />
          </div>
          <button>Submit</button>
        </form>
        <p>Data de emissão: {boleto.emissao}</p>
        <p>Fornecedor: {boleto.fornecedor}</p>
        <p>Nota Fiscal: {boleto.nota}</p>
        <p>Vencimento: {boleto.vencimento}</p>
        <p>Código: {boleto.cod}</p>
        <p>Parcela: {boleto.parcela}</p>
        <p>boleto valor: {boleto.valor}</p>
      </body>
    </div>
  );
}
