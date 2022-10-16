import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from '@resources/styles/theme'
import { BrowserRouter } from 'react-router-dom'
import { RouterProvider } from '@/router-provider'
import { App } from '@/app'

export const RootProvider = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <App>
          <RouterProvider />
        </App>
      </BrowserRouter>
    </ThemeProvider>
  )
}
