const baseColor = {
  white: '#ffffff',
  black: '#000000',
  gray: {
    200: '#a6a6a6',
    500: '#f1f1f1',
    700: '#E6E6E6'
  },
  text: {
    bold: '#212529',
    medium: '#424561',
    regular: '#77798C',
    light: '#909090',
    label: '#767676'
  },
  transparent: 'transparent',
  primary: {
    regular: '#B71C1C',
    hover: '#8A171A',
    alternate: '#028489',
    light: '#b7dbdd'
  },
  secondary: {
    regular: '#ff5b60',
    hover: '#FF282F',
    alternate: '#fc5c63'
  }
}

export const defaultTheme = {
  colors: {
    ...baseColor,
    body: {
      bg: '',
      text: ''
    },
    borderColor: 'gray.500',
    headingsColor: 'text.bold',
    subheadingsColor: '',
    textColor: 'text.regular',
    buttonColor: 'white',
    buttonBgColor: 'primary.regular',
    buttonBgHoverColor: 'primary.hover',
    buttonBorderColor: 'primary.regular',
    linkColor: 'primary.regular',
    input: {
      text: '',
      bg: '',
      border: '',
      focus: '',
      placeholder: ''
    }
  },
  breakpoints: ['767px', '991px', '70em', '90em'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: {
    xs: 12,
    sm: 13,
    base: 15,
    md: 19,
    lg: 21,
    xl: 24,
    '2xl': 30,
    '3xl': 36,
    '4xl': 42,
    '5xl': 48
  },
  fontWeights: {
    body: 400,
    heading: 700,
    thin: 100,
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    bolder: 900
  },
  fonts: {
    body: 'Lato, sans-serif',
    heading: 'Poppins, sans-serif',
    monospace: 'Menlo, monospace'
  },

  customs: {
    transition: '0.35s ease'
  },

  lineHeights: {
    body: 1.5,
    heading: 1.125
  },

  boxSizing: 'border-box',
  radii: {
    base: '6px',
    small: '3px',
    medium: '12px',
    big: '18px'
  },
  shadows: {
    base: '0 3px 6px rgba(0, 0, 0, 0.16)',
    medium: '0 6px 12px rgba(0, 0, 0, 0.16)',
    big: '0 21px 36px rgba(0, 0, 0, 0.16)',
    header: '0 1px 2px rgba(0, 0, 0, 0.06)'
  }
}
