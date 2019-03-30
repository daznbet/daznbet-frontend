import PropTypes from 'prop-types'
import styled from 'styled-components'

const Title = styled.h1`
  position: relative;
  font-size: ${({ theme: { fonts }, size }) => fonts.size[size] };
  margin: 0 0 ${({ theme: { spacing } }) => spacing.sm };
  ${({ styled, theme: { spacing, colors } }) => styled && `
    padding-top: ${ spacing.base };

    &:before {
      content: '';
      position: absolute;
      top: 0;
      width: ${ spacing.md };
      height: ${ spacing.base };
      background-color: ${ colors.yellow01 };
    }
  `}

`

Title.propTypes = {
  size: PropTypes.oneOf(['lg', 'md', 'sm']),
  styled: PropTypes.bool,
}

Title.defaultProps = {
  size: 'xxg',
  styled: true,
}
export default Title
