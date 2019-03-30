import React from 'react'
import styled from 'styled-components'

import CardList from './CardList.jsx'
import Title from './Title.jsx'
import Card from './Card.jsx'
import Text from './Text.jsx'

const Players = ({ players, side, direction }) =>  (
  <CardList direction={direction}>
    {
      !!players.length && players.map(player => (
        <li>
          <Card side={side}>
            <Title>{player.name}</Title>
            <Text><strong>t-shirt: </strong>{player.number}</Text>
          </Card>
        </li>
      ))
    }
  </CardList>
)

export default Players
