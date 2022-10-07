import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { App } from '@/app'

ReactDOM.createRoot(document.querySelector('[data-js="root"]') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
