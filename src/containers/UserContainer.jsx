import React, { useState } from 'react'
import { connect } from 'react-redux'

import { create, clear } from '../redux/modules/user'
import Input from '../components/Input'
import LoadingButton from '../components/LoadingButton'
import Form from '../components/Form'
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
      <LoadingButton
        loading={user.loading || !!user.id}
        block
        fill={!!user.id}
      >
        <span> { (user.id && `welcome, ${user.id}`) || 'go!'} </span>
        </LoadingButton>
      {(!!user.error) && (
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
