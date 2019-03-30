import PropTypes from 'prop-types'
import styled from 'styled-components'

const Button = styled.button`
  display: inline-block;
  padding: ${ ({ theme: { spacing }}) => `${spacing.base} ${spacing.base}` }
  background-color: ${({ variant, theme: { colors } }) => variant === 'secondary' ? 'transparent' : colors.yellow01 };
  color: ${({ variant, theme: { colors } }) => variant === 'secondary' ? colors.yellow01 : colors.black01 };
  border-radius: ${({ theme: { radius } }) => radius.sm };
  border: ${({ variant, theme: { colors } }) => variant === 'secondary' ? `1px solid ${colors.yellow01}` : 0 };
  outline: none;
  min-height: ${({ theme: { spacing }}) => spacing.xxg };
  font-size: ${({ theme: { fonts } }) => fonts.size.lg };
  min-width: 120px;
  cursor: pointer;
  text-transform: lowercase;
`

Button.propTypes = {
  variant: PropTypes.string,
}

Button.defaultProps = {
  variant: 'primary'
}

export default Button;
