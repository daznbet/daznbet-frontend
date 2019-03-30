import React, { useState } from 'react'
import { connect } from 'react-redux'

import { create, clear } from '../redux/modules/user'
import Input from '../components/Input'
import Button from '../components/Button'
import Form from '../components/Form'
import Card from '../components/Card'
import Title from '../components/Title'
import Tooltip from '../components/Tooltip'

const UserContainer = ({ createUser, clearUser, user }) => {
  const [name, setName] = useState('')

  const handleSubmit = (ev) => {
    ev.preventDefault()
    createUser(name)
  }

  const handleChange = (ev) => {
    setName(ev.target.value)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        label="tell me your name to start betting"
        onChange={handleChange}
      />
      <Button fill={user.loading || user.id} block>watch</Button>
      {!!user.error && (
        <Tooltip
          type='error'
          onClose={clearUser}
        >{ user.error }</Tooltip>
      )}
    </Form>
  )
}

const stateToProps = ({ user }) => ({
  user
})

const dispatchToProps = {
  createUser: create,
  clearUser: clear,
}

export default connect(stateToProps, dispatchToProps)(UserContainer)
