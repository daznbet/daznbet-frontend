import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components'

import theme from './styles/theme'
import GlobalStyle from './styles/globalStyle'

import store from './redux'

import Title from './components/Title'
import Container from './components/Container'
import Input from './components/Input'
import Text from './components/Text'
import Button from './components/Button'
import Card from './components/Card'

const App = () => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Container>
        <Title size="xxg">DAZN Bet</Title>
        <Title size="xg">Input</Title>
        <Input label="Hello, tell me you're name" /><br /><br />
        <Title size="xg">Buttons</Title>
        <Button variant="primary">Primary</Button><br /><br />
        <Button variant="secondary">Secondary</Button><br /><br />
        <Title size="xg">Card</Title>
        <Card>
          <Title styled={false} size="md">I'm a card</Title>
          <Text>Eu sou um card!</Text>
        </Card>
      </Container>
    </>
  </ThemeProvider>
)

export default App;
