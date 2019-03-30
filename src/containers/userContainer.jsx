import React, { useState } from 'react'
import { connect } from 'react-redux'

import { save } from '../redux/modules/user'
import Input from '../components/Input'
import Button from '../components/Button'
import Form from '../components/Form'
import Card from '../components/Card'
import Title from '../components/Title'

const UserContainer = ({ saveUser, user }) => {
  const [name, setName] = useState('')

  const handleSubmit = (ev) => {
    ev.preventDefault()
    saveUser(name)
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
      <Button fill={user.loading} block>watch</Button>
    </Form>
  )
}

const stateToProps = ({ user }) => ({
  user
})

const dispatchToProps = {
  saveUser: save,
}

export default connect(stateToProps, dispatchToProps)(UserContainer)
