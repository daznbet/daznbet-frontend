import React from 'react'
import { connect } from 'react-redux';
import Players from '../components/Players'

const StramContainer = ({ showColumns }) => (
  <Players
    direction="column"
    players={[{ name: 'Neymar', number: 10 }, { name: 'Mbappé', number: 7 }]}
    side="left"
  />
)

export default connect()(StramContainer)
