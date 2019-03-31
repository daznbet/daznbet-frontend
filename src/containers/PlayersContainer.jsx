import React from 'react'
import Players from '../components/Players'
import Row from '../components/Row'

const PlayersContainer = () => (
  <Row>
    <Players
      direction="column"
      players={[{ name: 'Neymar', number: 10 }, { name: 'Mbappé', number: 7 }]}
      side="left"
    />

    <Players
      direction="column"
      players={[{ name: 'Neymar', number: 10 }, { name: 'Mbappé', number: 7 }]}
      side="right"
    />
  </Row>
)

export default PlayersContainer
