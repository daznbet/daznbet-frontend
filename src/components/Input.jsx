import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const InputContainer = styled.div`
  width: 100%;
  position: relative;
`
const StyledInput = styled.input`
  display: block;
  width: 100%;
  padding: ${({ theme: { spacing } }) => `${spacing.base} ${spacing.sm} 0`};
  background-color: ${({ theme: { colors }}) => colors.black02 };
  font-size: ${({ theme: { fonts }}) => fonts.size.lg };
  border-radius: ${({ theme: { radius } }) => radius.sm };
  border: 0;
  min-height: ${({ theme: { spacing }}) => spacing.xxg };
  color: ${({ theme: { colors }}) => colors.white01 };
  transition: box-shadow .4s ease;
  outline: none;

  box-shadow: ${({ focused, theme: { shadow } }) => !focused ? 'none' : shadow.base};
`

const Label = styled.span`
  position: absolute;
  font-size: ${({ theme: { fonts }}) => fonts.size.lg };
  top: ${({ theme: { spacing } }) => spacing.sm }
  left: ${({ theme: { spacing } }) => spacing.base }

  transform: ${({ focused }) => !focused ? 'scale(1)' : 'scale(.5) translateY(-32px)'};
  transition: transform .4s ease;
  transform-origin: left;
`


const Input = ({ label }) => {
  const [ focused, setFocused ] = useState(false);

  return (
    <InputContainer
      onClick={() => setFocused(true)}
      focused={focused}
    >
      <StyledInput
        focused={focused}
        onFocus={({ target: { value } }) => setFocused(!!value || true)}
        onBlur={({ target: { value } }) => setFocused(!!value || false)}
      />
      <Label focused={focused}>{label}</Label>
    </InputContainer>
  )
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
}

export default Input
