import { useState } from "react";


export const Select = () => {
    const [value, setValue] = useState([])


  return (
    <div>
      <h1>Select Case of Study</h1>
      <form action="">
        <label htmlFor="">
            Select one of these options:
            <select name="" id="">
                <option value="value 0">Option 0</option>
                <option value="value 1">option 1</option>
                <option value="value 2">option 2</option>
            </select>
        </label>
      </form>
    </div>
  );
};
