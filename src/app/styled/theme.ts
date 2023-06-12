
import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme extends BlogTheme {}
}

export type Variant = 'primary' | 'secondary' | 'danger';

export type Color = { light: string, dark: string };

interface BlogTheme {
    gridSize: number;
    colors: {
      primary: Color,
      secondary: Color,
      danger: Color
    }
  }

const theme: BlogTheme = {
  gridSize: .25,
  colors: {
    primary: {
      dark: 'var(--primary-7)',
      light: 'var(--primary-9)',
    },
    secondary: {
      dark: 'var(--secondary-7)',
      light: 'var(--secondary-9)',
    },
    danger: {
      dark: 'var(--danger-7)',
      light: 'var(--danger-9)',
    }
  }
}

export const getVariant = (props: any): Variant => props.variant || 'primary';

export default theme;

