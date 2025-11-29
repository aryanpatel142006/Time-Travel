import { useState, useRef } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import FuzzyText from './components/FuzzyText';
import FallingText from './components/FallingText';
import ASCIIText from './components/ASCIIText';
import Shuffle from './components/Shuffle';
import CountUp from './components/CountUp';
// import { c } from 'node_modules/typegpu/matrix-DIfOiRyz';
// import controls from './machine-machenism.tsx';



function App() {
  const [count, setCount] = useState(2025)
  const [yearInput, setYearInput] = useState<string>('')
  const [currYear, setCurrYear] = useState<number>(2000);
  const [destinationYear, setDestinationYear] = useState<number>(2025);
  const dollyRef = useRef<number>(1);

  const animateDolly = async (to: number, duration = 200) => {
    try {
      // Dynamically import controls to avoid executing top-level awaits during initial render
      const mod = await import('./machine-machenism');
      const ctrl = (mod as any).controls?.['dolly zoom'];
      if (!ctrl || typeof ctrl.onSliderChange !== 'function') return;

      const from = dollyRef.current ?? 1;
      const start = performance.now();
      const step = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - (1 - t) * (1 - t); // easeOutQuad
        const value = from + (to - from) * eased;
        dollyRef.current = value;
        try {
          ctrl.onSliderChange(value);
        } catch (err) {
          // ignore write errors
        }
        if (t < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn('animateDolly failed', e);
    }
  };
  const setDollyImmediate = async (value: number) => {
    try {
      const mod = await import('./machine-machenism');
      const ctrl = (mod as any).controls?.['dolly zoom'];
      if (!ctrl || typeof ctrl.onSliderChange !== 'function') return;
      dollyRef.current = value;
      try { ctrl.onSliderChange(value); } catch (e) { /* ignore */ }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn('setDollyImmediate failed', e);
    }
  };
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
          text={`REALITY BARRIER UNSTABLE | DO NOT CROSS || TEMPORAL ANOMALY DETECTED: UNAUTHORIZED ENTRY STRICTLY PROHIBITED // RETURN IMMEDIATELY TO YOUR OWN TIME || WARNING: PARADOX RISK INCREASED || WARNING: BREAKING THIS BARRIER WILL CAUSE A PARADOX // CONTINUE AT YOUR OWN RISK `}
          highlightWords={["WARNING:", "PROHIBITED", "PARADOX", "UNAUTHORIZED"]}
          // highlightClass="logo"
          trigger="hover"
          backgroundColor="transparent"
          wireframes={false}
          gravity={0.56}
          fontSize="1.5rem"
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
        
        <div className='w-[100%] h-[300px] flex flex-col justify-center items-center text-center mx-auto  bg-yellow'>
          <button onClick={() => setCount((count) => count + 1)} style={{fontSize: '2rem', marginBottom: '20px'}}>
          Year is {count}
        </button>
          Go to year:
          <input
            type="text"
            value={yearInput}
            onChange={(e) => setYearInput(e.target.value)}
            className="ml-2 p-1 border rounded ml-20 text-black text-3xl"
            style={{width: '100px', fontSize: '2rem', textAlign: 'center', borderRadius: '8px', border: '2px solid #000', backgroundColor: '#fff', color: '#000', fontWeight: 'bold'}}
          />
          <br />
          <button
            onClick={() => { setCount(Number(yearInput) || 0); setCurrYear(count); setDestinationYear(Number(yearInput) || count); setYearInput(''); }}
            className="ml-2 px-3 py-1 bg-gray-800 text-white rounded"
          >
            Go To year {yearInput}
          </button>

          <br />
          <CountUp
            from={currYear}
            to={destinationYear}
            separator="," 
            direction="up"
            duration={1}
            className="count-up-text extra-class"
            onStart={() => {
              // immediately set dolly to the fast-travel zoom and keep it there
              console.log('CountUp setting dolly zoom for fast-travel');
              setDollyImmediate(0.01);
            }}
            onEnd={() => {
              // restore zoom back to normal when counting finishes
              // animateDolly(1, 3000);
              console.log('CountUp ended, resetting dolly zoom');
              animateDolly(1, 300); // longer duration for larger year jumps
            }}
          />
     
        </div>
        
      </div>

      <div className="w-screen h-screen flex justify-center items-center align-center overflow-hidden relative mx-auto">
        <canvas id="gpu-canvas" width={2000} height={1000}></canvas>
     </div>

      
      
    </>
  )
}

export default App
