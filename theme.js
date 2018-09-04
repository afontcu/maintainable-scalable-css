import { future as theme } from 'mdx-deck/themes'
import style from 'react-syntax-highlighter/styles/prism/solarizedlight'
import scss from 'react-syntax-highlighter/languages/prism/scss'

const monospace =
  'SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier, monospace'

export default {
  ...theme,
  monospace,
  font: 'Satisfy, serif',
  prism: {
    style,
    languages: {
      scss,
    },
  },
  css: {
    ...theme.css,
    textAlign: 'left',
    blockquote: {
      paddingLeft: '1em',
      paddingRight: '1em',
    },
    'blockquote > p': {
      lineHeight: '1.2',
      fontSize: '1.2em',
    },
    'blockquote + p': {
      paddingRight: '2em',
      textAlign: 'right',
    },
    li: {
      fontFamily: monospace,
      paddingBottom: '1.2em',
    },
  },
  heading: {
    textTransform: 'inherit',
  },
  colors: {
    text: '#333',
    background: '#fafafa',
    link: '#1c7cc2',
  },
  p: {
    fontFamily: monospace,
    fontSize: '1.4em',
    lineHeight: '1.4',
  },
  link: {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  transitionDuration: 0, // disable transitions
}
