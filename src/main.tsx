import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { RootProvider } from '@/root-provider'

ReactDOM.createRoot(document.querySelector('[data-js="root"]') as HTMLElement).render(
  <StrictMode>
    <RootProvider />
  </StrictMode>,
)
