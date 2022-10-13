import styled, { css } from 'styled-components'
import { ButtonProps } from './button.types'

export const ButtonElement = styled.button<Omit<ButtonProps, 'children'>>`
${({ theme, backgroundColor = 'primary', fontSize = 'md', color = 'white' }) => css`
  background-color: ${theme.colors[backgroundColor]};
  border: none;
  border-radius: 4px;
  color: ${theme.colors[color]};
  font-size: ${theme.fonts.fontSizes[fontSize]};
  font-weight: 700;
  padding: ${theme.spacing.sm};
`}
`
