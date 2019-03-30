import React from 'react'
import { ThemeProvider } from 'styled-components'
import { connect } from 'react-redux'

import theme from './styles/theme'
import GlobalStyle from './styles/globalStyle'

import Title from './components/Title'
import Container from './components/Container'

import UserContainer from './containers/userContainer'

const App = ({ user }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Container>
        <Title size="xxg">DAZN Bet</Title>
        {(user && user.name && user.id) ? 'streaming' : <UserContainer />}
      </Container>
    </>
  </ThemeProvider>
)

const stateToProps = ({ user }) => ({
  user
})

export default connect(stateToProps)(App)
