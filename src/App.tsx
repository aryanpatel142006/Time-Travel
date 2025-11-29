import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import FuzzyText from './components/FuzzyText';
import FallingText from './components/FallingText';
import ASCIIText from './components/ASCIIText';
import Shuffle from './components/Shuffle';
// import controls from './machine-machenism.tsx';



function App() {
  const [count, setCount] = useState(0)
  // const [DollyZoom, setDollyZoom] = useState(0)
  // const DollyZoomInitial = controls['dolly zoom'].initial;

  return (
    <>


      <div className='flex justify-center items-center align-center flex-col'> 
        <FuzzyText 
        baseIntensity={0.2}
        fontSize = {'clamp(1rem, 4vw, 4rem)'}>
         404
        </FuzzyText>
        <FuzzyText baseIntensity={0.2} fontFamily={"Gochi Hand"} fontSize={60}>Not Found</FuzzyText>
      </div>

      {/* <div className='w-[1200px] h-[400px] flex justify-center items-center align-center text-center'> */}
        <div className='w-[1200px] h-[400px] flex justify-center items-center mx-auto text-center'>
        <FallingText 
      text={`REALITY BARRIER UNSTABLE | DO NOT CROSS || TEMPORAL ANOMALY DETECTED: UNAUTHORIZED ENTRY STRICTLY PROHIBITED // RETURN IMMEDIATELY TO YOUR OWN TIME || WARNING: PARADOX RISK INCREASED || WARNING: BREAKING THIS BARRIER WILL CAUSE A PARADOX // CONTINUE AT YOUR OWN RISK`}
      highlightWords={["WARNING:", "PROHIBITED", "animated", "components", "simplify"]}
      // highlightClass="logo"
      trigger="hover"
      backgroundColor="transparent"
      wireframes={false}
      gravity={0.56}
      fontSize="2rem"
      mouseConstraintStiffness={0.9}/>
      </div>

      <div className='w-[100%] min-h-[400px]  flex justify-center items-center mx-auto text-center'>
        <ASCIIText
          text='time-machine'
          enableWaves={true}
          asciiFontSize={10}
          textFontSize={30}
        />
        {/* <ASCIIText
          text='machine'
          enableWaves={true}
          asciiFontSize={8}
          textFontSize={20}
        /> */}
      </div>



      <div className='text-center w-[800px] h-[400px] mx-auto'>
        <Shuffle
          // className='text-6xl'
          fontSize={'5rem'}
          // className='text-6xl'
          // baseTw='text-9xl'
          text="TEMPORAL DISPLACEMENT"
          shuffleDirection="right"
          duration={0.35}
          animationMode="evenodd"
          // shuffleTimes={10}
          ease="power3.out"
          stagger={0.03}
          threshold={0.1}
          // triggerOnce={false}
          triggerOnHover={true}
          respectReducedMotion={false}
          loop={true}
          // fontsLoaded={"'Press Start 2P(20rem)', sans-serif"}
        />
      </div>
      {/* <h1 className='text-9xl'>TEMPORAL DISPLACEMENT</h1> */}
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Years is {count}
        </button>
        
      </div>

      <div className="w-screen h-screen flex justify-center items-center align-center overflow-hidden relative mx-auto">
        <canvas id="gpu-canvas" width={2000} height={1000}></canvas>
     </div>

      
      
    </>
  )
}

export default App
