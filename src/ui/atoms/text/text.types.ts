import { theme } from '@resources/styles/theme'

export type TextProps = {
  color?: keyof typeof theme.colors;
  fontSize?: keyof typeof theme.fonts.fontSizes;
  fontWeight?: keyof typeof theme.fonts.fontWeight;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'strong';
};
