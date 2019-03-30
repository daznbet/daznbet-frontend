import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components'

import theme from './styles/theme'
import GlobalStyle from './styles/globalStyle'

import store from './redux'

const App = () => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <h1>DAZN BET</h1>
    </>
  </ThemeProvider>
)

export default App;
