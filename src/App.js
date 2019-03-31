import React from 'react'
import { ThemeProvider } from 'styled-components'
import { connect } from 'react-redux'
import * as moment from 'moment'

import daznLogo from './assets/dazn.png'
import theme from './styles/theme'
import GlobalStyle from './styles/globalStyle'

import Title from './components/Title'
import Container from './components/Container'
import Logo from './components/Logo'

import UserContainer from './containers/UserContainer'
import VideoContainer from './containers/VideoContainer'
import GameContainer from './containers/GameContainer'

const App = ({ user }) => {
  const shouldShowUserContainer = !user || !user.id
  const shouldShowPlayersContainer = !shouldShowUserContainer
  const [videoWidth, videoHeight] = [window.innerWidth, window.innerHeight - 180]
  const offset = moment.duration('1:37:10').asSeconds()

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Container>
          <Logo src={daznLogo} alt="dzn" />
          <VideoContainer
            videoId="tc_UbQ69XHg"
            width={videoWidth}
            height={videoHeight}
            offset={offset}
          />
          {shouldShowUserContainer && <UserContainer />}
          {shouldShowPlayersContainer && <GameContainer />}
        </Container>
      </>
    </ThemeProvider>
  )
}

const stateToProps = ({ user }) => ({
  user
})

export default connect(stateToProps)(App)
