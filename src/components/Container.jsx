import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme: { spacing } }) => `${spacing.md} 0` };
  box-sizing: content-box;
  width: 100%
  min-height: 100%
  max-width: 95%;
`

Container.displayName = "Container"

export default Container
