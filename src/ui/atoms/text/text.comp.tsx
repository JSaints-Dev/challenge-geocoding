import { theme } from '@resources/styles/theme'
import styled, { css } from 'styled-components'
import { TextProps } from './text.types'

export const Text = styled.span.attrs<TextProps>(({ variant }) => ({
  as: variant,
}))<TextProps>`
  ${({ color = 'black', fontSize = 'xs', fontWeight = 'normal' }) => css`
    color: ${theme.colors[color]};
    font-size: ${theme.fonts.fontSizes[fontSize]};
    font-weight: ${theme.fonts.fontWeight[fontWeight]};
    margin: 0;
`}
`
