import { theme } from '@resources/styles/theme'

export type BoxProps = {
  bg?: keyof typeof theme.colors
  color?: keyof typeof theme.colors
  dir?: 'row' | 'column'
  gap?: keyof typeof theme.spacing
  h?: string
  minH?: string
  maxH?: string
  minW?: string
  maxW?: string
  p?: string
  w?: string
}