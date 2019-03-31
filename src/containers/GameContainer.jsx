import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import Team from '../components/Team'
import Row from '../components/Row'
import { getPlayers } from '../redux/modules/player'

const GameContainer = ({ initPlayers, gameId, teams }) => {
  useEffect(() => {
    initPlayers()
  }, [initPlayers])
  return (
    <Row>
      { teams.map((team, i) =>
        <Team
          direction="column"
          players={team.players}
          side={ i === 0 ? 'left' : 'right' }
        />
      )}
    </Row>
  )
}

const stateToProps = ({ game }) => ({
  gameId: game.gameId,
  teams: game.teams
})

const dispatchToProps = {
  initPlayers: getPlayers
}

export default connect(stateToProps, dispatchToProps)(GameContainer)