import React from 'react'
import styled, { keyframes } from 'styled-components'

const Entering = keyframes`
  from { opacity: 0; transform: translateY(500px)}
  to { opacity: 1; transform: translateY(0)}
`

const StyledTooltip = styled.div`
  background-color: ${({ type, theme: { colors } }) => type === 'error' ? colors.red01 : colors.yellow01 };
  border-radius: ${({ theme: { radius } }) => radius.sm};
  padding: ${({ theme: { spacing } }) => `${ spacing.base } ${ spacing.md }`};

  position: absolute;
  bottom: ${({ theme: { spacing } }) => spacing.lg};
  left: ${({ theme: { spacing } }) => spacing.lg};

  animation: ${Entering} .4s ease;

  button {
    background-color: transparent;
    border: 0;
    padding: 0;
    position: absolute;
    right: 4px;
    top: -4px;
    color: ${({ theme: { colors } }) => colors.white01};
  }
`


const Tooltip = ({ onClose, children, ...props }) => {
  return <StyledTooltip { ...props }>{children} <button type='button' onClick={() => onClose && onClose()}>x</button></StyledTooltip>
}
export default Tooltip
