import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import Team from '../components/Team'
import Row from '../components/Row'
import { getPlayers } from '../redux/modules/game'
import { toggleSelect } from '../redux/modules/player'

const GameContainer = ({
  initPlayers,
  gameId,
  teams,
  selectedPlayers,
  togglePlayerSelect,
}) => {
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
          selected={selectedPlayers}
          toggleSelect={togglePlayerSelect}
        />
      )}
    </Row>
  )
}

const stateToProps = ({ game, player }) => ({
  gameId: game.gameId,
  teams: game.teams,
  selectedPlayers: player.selected
})

const dispatchToProps = {
  initPlayers: getPlayers,
  togglePlayerSelect: toggleSelect,
}

export default connect(stateToProps, dispatchToProps)(GameContainer)
