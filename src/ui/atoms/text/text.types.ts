import { theme } from '@resources/styles/theme'

export type TextProps = {
  color?: keyof typeof theme.colors;
  fontSize?: keyof typeof theme.fonts.fontSizes;
  fontWeight?: 400 | 700 | 'normal';
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'strong';
};
