import "../styles/Form.css";

export default function Form() {
  return (
    <div>
      <p className="parForm">meu parágrafo</p>
      <form action="">
        <label htmlFor="">label1</label>
        <input type="text" placeholder="input1" />
        <label htmlFor="">label2</label>
        <input type="text" placeholder="input2" />
        <label htmlFor="">label3</label>
        <input type="text" placeholder="input3" />
        <label htmlFor="">label4</label>
        <input type="text" placeholder="input4" />
        <label htmlFor="">label5</label>
        <input type="text" placeholder="input5" />
        <label htmlFor="">label6</label>
        <input type="text" placeholder="input6" />
        <label htmlFor="">label7</label>
        <input type="text" placeholder="input7" />
      </form>
    </div>
  );
}
