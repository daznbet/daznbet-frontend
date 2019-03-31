import styled from 'styled-components'
import PropTypes from 'prop-types'

const CardList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: ${ ({direction}) => direction }
  max-width: 100%;
  padding: 0;
  margin: 0;
  z-index: 999;

  li {
    margin: ${({ theme: { spacing } }) => spacing.base}
  }
`

CardList.displayName = 'CardList'

CardList.propTypes = {
  direction: PropTypes.oneOf([ 'row', 'column' ]).isRequired
}

export default CardList
