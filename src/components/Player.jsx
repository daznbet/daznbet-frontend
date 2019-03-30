import React from 'react';

import Card from './Card'
import Title from './Title'

const Player = ({ side, player, selected }) => (
  <Card side={side} inverse={selected}>
    <Title size="sm">{player.name}</Title>
  </Card>
)



export default Player
