import styled from 'styled-components'

const Container = styled.div`
  padding: ${({ theme: { spacing } }) => `${spacing.md} 0` };
  box-sizing: content-box;
  width: 100%
  min-height: 100%
  max-width: 325px;

  @media screen and (min-width: 1024px) {
    max-width: 1024px;
  }
`

export default Container
