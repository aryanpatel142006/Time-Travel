import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import controls from './machine-machenism.tsx';



function App() {
  const [count, setCount] = useState(0)
  // const [DollyZoom, setDollyZoom] = useState(0)
  // const DollyZoomInitial = controls['dolly zoom'].initial;

  return (
    <>
      <div className="canvas-container">
        {/* <canvas data-fit-to-container></canvas> */}
        {/* <script type="module" src="machine-machenism.tsx"></script> */}

      </div>
      
      <h1>TIME MACHINE</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Years is {count}
        </button>
        
      </div>

      <div className="w-screen h-screen flex justify-center items-center align-center overflow-hidden relative">
        <canvas width={2000} height={1000}></canvas>
     </div>

      
      
    </>
  )
}

export default App
