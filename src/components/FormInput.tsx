


export default function FormInput(props: any) {
  

  return (
    <>      
        <input
          type="date"
          name={props.name}
          value={props.emissao}
          onChange={props.handleChange}          
        />      
    </>
  );
}
