import { useState } from 'react'


export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <body>
       
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>        
      </body>
    </div>
  )
}
