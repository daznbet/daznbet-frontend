import React from 'react'
import { ThemeProvider } from 'styled-components'
import { connect } from 'react-redux'

import theme from './styles/theme'
import GlobalStyle from './styles/globalStyle'

import Title from './components/Title'
import Container from './components/Container'

import UserContainer from './containers/UserContainer'
import PlayersContainer from './containers/PlayersContainer'

const App = ({ user }) => {
  const shouldShowUserContainer = !user || !user.id
  const shouldShowPlayersContainer = !shouldShowUserContainer

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Container>
          <Title size="xxg">DAZN Bet</Title>
          {shouldShowUserContainer && <UserContainer />}
          {shouldShowPlayersContainer && <PlayersContainer />}
        </Container>
      </>
    </ThemeProvider>
  )
}

const stateToProps = ({ user }) => ({
  user
})

export default connect(stateToProps)(App)
