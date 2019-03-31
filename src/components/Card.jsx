import styled from 'styled-components'
import PropTypes from 'prop-types'

const Card = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${({ theme: { colors }, inverse }) => !inverse ? colors.black02 : colors.yellow01 };
  padding: ${({ theme: { spacing } }) => spacing.base }
  box-shadow: ${({ theme: { shadow }}) => shadow.base };
  border-radius: ${({ theme: { radius }}) => radius.base };
  align-items: middle;
  min-width: 200px;

  ${({ theme: { colors }, side }) => !!side && `
    border-${side}: 10px solid ${colors.yellow01};
  `}

  h1 {
    margin-bottom: 0;
  }

  &,
  & h1,
  & span {
    color: ${({ theme: { colors }, inverse }) => inverse ? colors.black02 : 'inhereit' };
  }

  transition: color .4s ease,
    background-color .4s ease;
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
