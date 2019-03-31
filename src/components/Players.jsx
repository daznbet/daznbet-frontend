import React, { useState } from 'react'

import CardList from './CardList'
import Player from './Player'

const Players = ({ players, side, direction }) =>  {
  const [selectedPlayers, setSelected] = useState([])

  const toggleSelect = (player) => {
    const index = selectedPlayers.indexOf(player)
    if (index >= 0)
      setSelected([...selectedPlayers.slice(0, index), ...selectedPlayers.slice(index + 1)])
    else
      setSelected([ ...selectedPlayers, player ])
  }

  return (
    <CardList direction={direction}>
      {
        !!players.length && players.map(player => (
          <li onClick={() => { toggleSelect(player) }}>
            <Player side={side} player={player} selected={selectedPlayers.indexOf(player) >= 0} />
          </li>
        ))
      }
    </CardList>
  )
}

export default Players
