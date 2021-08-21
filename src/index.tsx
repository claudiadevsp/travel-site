import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { GlobalStyles } from './globalstyles/globalstyles'
import { ThemeProvider } from 'styled-components'
import theme from '../src/globalstyles/theme/theme'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
