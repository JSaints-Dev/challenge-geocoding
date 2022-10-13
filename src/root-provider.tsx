import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from '@resources/styles/theme'
import { RouterProvider } from '@/router-provider'

export const RootProvider = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider />
    </ThemeProvider>
  )
}
