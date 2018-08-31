import { swiss as theme } from 'mdx-deck/themes'
import style from 'react-syntax-highlighter/styles/prism/solarizedlight'
import scss from 'react-syntax-highlighter/languages/prism/scss'

const monospace =
  'SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier, monospace'

export default {
  ...theme,
  monospace,
  font: 'Tinos, serif',
  prism: {
    style,
    languages: {
      scss,
    },
  },
  colors: {
    text: '#333',
    background: '#f1f1f2',
    link: '#1c7cc2',
    pre: '#fff',
    preBackground: '#000',
  },
  p: {
    fontFamily: monospace,
    fontSize: '1.2em',
  },
  li: {
    fontFamily: monospace,
    fontSize: '0.8em',
    padding: '0.2em',
  },
  transitionDuration: 0, // disable transitions
}
