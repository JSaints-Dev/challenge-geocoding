import { theme } from '@resources/styles/theme'

export type ButtonProps = {
  children?: React.ReactNode
  backgroundColor?: keyof typeof theme.colors
  color?: keyof typeof theme.colors
  fontSize?: keyof typeof theme.fonts.fontSizes
}
