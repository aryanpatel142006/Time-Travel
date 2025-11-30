import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import SpaceBackground from './components/SpaceBackground.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     
    <SpaceBackground />
    <App />
  </StrictMode>,
)
