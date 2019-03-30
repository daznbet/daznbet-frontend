import styled from 'styled-components'
import PropTypes from 'prop-types'

const Card = styled.div`
  background-color: ${({ theme: { colors }, inverse }) => !inverse ? colors.black02 : colors.yellow01 };
  color: ${({ theme: { colors }, inverse }) => inverse ? colors.black02 : 'inhereit' };
  padding: ${({ theme: { spacing } }) => spacing.base }
  box-shadow: ${({ theme: { shadow }}) => shadow.base };
  border-radius: ${({ theme: { radius }}) => radius.base };
  align-items: middle;
  min-width: 200px;

  ${({ theme: { colors }, side, inverse }) => !!side && !inverse && `
    border-${side}: 10px solid ${colors.yellow01};
  `}

  h1 {
    margin-bottom: 0;
  }

`
Card.displayName = "Card"

Card.propTypes = {
  variant: PropTypes.string,
  side: PropTypes.oneOf([ 'left', 'right', '' ])
}

Card.propTypes = {
  variant: 'error',
  side: '',
}

export default Card
