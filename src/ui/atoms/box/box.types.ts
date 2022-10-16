import { theme } from '@resources/styles/theme'

export type BoxProps = {
  alignItems?: keyof typeof theme.flex.alignItems
  bg?: keyof typeof theme.colors
  color?: keyof typeof theme.colors
  children?: React.ReactNode
  dir?: 'row' | 'column'
  gap?: keyof typeof theme.spacing
  h?: string
  justify?: keyof typeof theme.flex.justifyContent
  minH?: string
  maxH?: string
  minW?: string
  maxW?: string
  p?: string
  w?: string
}
