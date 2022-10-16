import styled from 'styled-components'
import { BoxProps } from './box.types'

export const Box = styled.div<BoxProps>`
  background-color: ${({ bg, theme }) => bg ? theme.colors[bg] : 'transparent'};
  color: ${({ color, theme }) => color ? theme.colors[color] : 'inherit'};
  display: flex;
  flex-direction: ${({ dir }) => dir ?? 'column'};
  gap: ${({ theme, gap }) => gap ? theme.spacing[gap] : 0};
  height: ${({ h }) => h ?? 'auto'};
  min-height: ${({ minH }) => minH ?? 'auto'};
  min-width: ${({ minW }) => minW ?? 'auto'};
  max-height: ${({ maxH }) => maxH ?? 'auto'};
  max-width: ${({ maxW }) => maxW ?? 'auto'};
  padding: ${({ p }) => p ?? '0'};
  width: ${({ w }) => w ?? 'auto'};
`
