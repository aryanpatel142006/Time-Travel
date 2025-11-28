import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="canvas-container">
        {/* <canvas data-fit-to-container></canvas> */}
        {/* <script type="module" src="machine-machenism.tsx"></script> */}

      </div>


      <div className="w-screen h-screen flex justify-center items-center align-center overflow-hidden relative mb-10">
        <canvas width={2000} height={1000}></canvas>
     </div>

      <h1>TIME MACHINE</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          {/* Edit <code>src/App.tsx</code> and save to test HMR */}
        </p>
      </div>
      <p className="read-the-docs">
        {/* Click on the Vite and React logos to learn more */}
      </p>
    </>
  )
}

export default App
