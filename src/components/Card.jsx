import styled from 'styled-components'
import PropTypes from 'prop-types'

const Card = styled.div`
  background-color: ${({ theme: { colors } }) => colors.black02 };
  padding: ${({ theme: { spacing } }) => spacing.base }
  box-shadow: ${({ theme: { shadow }}) => shadow.base };
  border-radius: ${({ theme: { radius }}) => radius.base };
  min-height: 150px;

  ${({ theme: { colors }, side }) => !!side && `
    border-${side}: 10px solid ${colors.yellow01};
  `}

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
