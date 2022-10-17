import { theme } from '@resources/styles/theme'

export type ButtonProps = {
  bg?: keyof typeof theme.colors
  children?: React.ReactNode
  color?: keyof typeof theme.colors
  fontSize?: keyof typeof theme.fonts.fontSizes
  onClick?: () => void
} & React.ButtonHTMLAttributes<HTMLButtonElement>
