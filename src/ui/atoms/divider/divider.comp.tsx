import styled from 'styled-components'
import { DividerProps } from './divider.types'

export const Divider = styled.div<DividerProps>`
  background-color: ${({ theme, bg }) => bg ? theme.colors[bg] : theme.colors.black};
  height: 1px;
  width: 100%;
`
