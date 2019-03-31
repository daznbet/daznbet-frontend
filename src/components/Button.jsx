import PropTypes from 'prop-types'
import styled from 'styled-components'

const Button = styled.button`
  position: relative;
  display: inline-block;
  padding: ${ ({ theme: { spacing }}) => `${spacing.base} ${spacing.base}` }
  background-color: ${({ theme: { colors } }) => 'transparent' };
  color: ${({ theme: { colors } }) => colors.yellow01 };
  border-radius: ${({ theme: { radius } }) => radius.sm };
  border: ${({ theme: { colors } }) => `1px solid ${colors.yellow01}`};
  outline: none;
  min-height: ${({ theme: { spacing }}) => spacing.xxg };
  font-size: ${({ theme: { fonts } }) => fonts.size.lg };
  min-width: ${({ block }) => !!block ? '100%' : '120px' };
  cursor: pointer;
  text-transform: lowercase;
  background-size: 0px 0px;
`

Button.displayName = "Button"

Button.propTypes = {
  fill: PropTypes.bool,
  filledText: PropTypes.string,
}

Button.defaultProps = {
  fill: false,
  filledText: '',
}

export default Button;
