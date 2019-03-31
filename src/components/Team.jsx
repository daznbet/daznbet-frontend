import React from 'react'

import CardList from './CardList'
import Player from './Player'

const Teams = ({ players, selected, side, direction, toggleSelect }) =>  (
  <CardList direction={direction}>
    {
      !!players.length && players.map(player => (
        <li onClick={() => { toggleSelect(player) }}>
          <Player side={side} player={player} selected={selected.indexOf(player) >= 0} />
        </li>
      ))
    }
  </CardList>
)

export default Teams
