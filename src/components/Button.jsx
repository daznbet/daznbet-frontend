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

  &:before {
   content: '';
   color: ${({ theme: { colors } }) => colors.black01 };
   background-color: ${({ theme: { colors } }) => colors.yellow01 };
   min-width:  ${({ fill }) => !fill ? "0" : "100%"};
   position: absolute;
   top: 0;
   left: 0;
   z-index: 1;
   height: 100%;
   transition: min-width 1.4s ease;
  }
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
