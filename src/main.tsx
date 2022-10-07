import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { App } from '@/app'
import { GlobalStyle, theme } from '@resources/styles/theme'

ReactDOM.createRoot(document.querySelector('[data-js="root"]') as HTMLElement).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </StrictMode>,
)
