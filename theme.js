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
      paddingLeft: '1em',
      paddingRight: '1em',
    },
    'blockquote + p': {
      paddingRight: '2em',
      textAlign: 'right',
    },
    li: {
      fontFamily: monospace,
      fontSize: '1.4em',
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
    fontSize: '1.5em',
    lineHeight: '1.4',
  },
  link: {
    textDecoration: 'none',
    fontSize: '1.6rem',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  transitionDuration: 0, // disable transitions
}
