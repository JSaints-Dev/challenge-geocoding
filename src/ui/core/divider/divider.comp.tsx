import styled from 'styled-components'
import { DividerProps } from './divider.types'

export const Divider = styled.div<DividerProps>`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.black};
  width: 100%;
`
