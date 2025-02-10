import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "@radix-ui/themes/styles.css"
import './index.css'
import { Theme, ThemePanel } from '@radix-ui/themes'
import App from './App.tsx'
import {BrowserRouter as Router} from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Theme appearance="dark" style={{fontFamily: '"LXGW WenKai TC", serif'}}>
      <Router>
        <App />
      </Router>
    </Theme>
  </StrictMode>,
)
