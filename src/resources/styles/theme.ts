import { createGlobalStyle } from 'styled-components'

export const theme = {
  breakpoints: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
  colors: {
    black: '#1E293B',
    lightBlack: '#293445',
    gray: '#E4E5E7',
    white: '#FAFAFA',
    primary: '#1FC8E1',
    primaryDark: '#18A1B5',
  },
  fonts: {
    fontSizes: {
      xs: '0.625rem',
      sm: '0.75rem',
      md: '1rem',
      lg: '1.5rem',
      xl: '2rem',
      xxl: '2.5rem',
    },
    fontWeight: {
      light: 300,
      normal: 400,
      bold: 700,
    },
  },
  spacing: {
    xs: '0.375rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
  },
  flex: {
    alignItems: {
      baseline: 'baseline',
      center: 'center',
      end: 'flex-end',
      start: 'flex-start',
      stretch: 'stretch',
    },
    justifyContent: {
      around: 'space-around',
      between: 'space-between',
      baseline: 'baseline',
      center: 'center',
      end: 'flex-end',
      firstBaseline: 'first baseline',
      lastBaseline: 'last baseline',
      start: 'flex-start',
    },
  },
}

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: ${theme.colors.gray};
    color: ${theme.colors.black};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: ${theme.fonts.fontSizes.md};
  }
`
