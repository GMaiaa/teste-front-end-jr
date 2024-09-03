import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Home } from './pages/Home.tsx'
import GlobalStyle from './styles/global.ts';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyle />
    <Home />
  </StrictMode>,
)
