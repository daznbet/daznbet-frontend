import styled from 'styled-components'
import PropTypes from 'prop-types'

const Card = styled.div`
  background-color: ${({ theme: { colors } }) => colors.black02 };
  padding: ${({ theme: { spacing } }) => spacing.base }
  box-shadow: ${({ theme: { shadow }}) => shadow.base };
  border-radius: ${({ theme: { radius }}) => radius.base };
  min-height: 150px;

  border-left: 10px solid ${({ theme: { colors } }) => colors.yellow01 };
`

Card.propTypes = {
}

Card.propTypes = {
}

export default Card
