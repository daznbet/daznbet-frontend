import styled from 'styled-components'

const Subtitle = styled.span`
  font-size: ${({ theme: { fonts } }) => fonts.size.sm };
  color: #eee;
`

Subtitle.displayName = "Subtitle"

export default Subtitle;
