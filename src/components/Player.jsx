import React from 'react';

import Card from './Card'
import Title from './Title'

const Player = ({ side, player, selected }) => (
  <div style={{cursor: 'pointer'}}>
  <Card side={side} inverse={selected}>
    <Title styled={false} size="sm">{player.name}</Title>
  </Card>
  </div>
)



export default Player
