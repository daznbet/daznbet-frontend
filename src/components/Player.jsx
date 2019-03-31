import React from 'react';

import Card from './Card'
import Title from './Title'
import Subtitle from './Subtitle'

const Player = ({ side, player, selected }) => (
  <div style={{cursor: 'pointer'}}>
  <Card side={side} inverse={selected}>
    <Title styled={false} size="sm">{player.playerName}</Title>
    <Subtitle>{player.playerNumber}</Subtitle>
  </Card>
  </div>
)



export default Player
