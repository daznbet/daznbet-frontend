import styled from 'styled-components'

const Form = styled.form`
  input {
    margin-bottom: ${({ theme: { spacing } }) => spacing.base}
  }

  button {
    margin-top: ${({ theme: { spacing } }) => spacing.base}
  }
`

export default Form
