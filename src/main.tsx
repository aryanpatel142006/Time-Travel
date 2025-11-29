import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import SpaceBackground from './components/SpaceBackground.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     {/* <div className='text-xl'> 
        <FuzzyText 
        baseIntensity={0.2}
        fontSize = {'clamp(1rem, 4vw, 4rem)'}>
         404
        </FuzzyText>
      </div> */}
    <SpaceBackground />
    <App />
  </StrictMode>,
)
