import styled, { css } from 'styled-components'
import { ButtonProps } from './button.types'

export const ButtonElement = styled.button<Omit<ButtonProps, 'children'>>`
${({ theme, bg = 'primary', fontSize = 'md', color = 'white' }) => css`
  background-color: ${theme.colors[bg]};
  border: none;
  border-radius: 4px;
  color: ${theme.colors[color]};
  cursor: pointer;
  font-size: ${theme.fonts.fontSizes[fontSize]};
  font-weight: 700;
  padding: ${theme.spacing.sm};
`}
`
