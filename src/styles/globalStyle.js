import { createGlobalStyle } from 'styled-components'

const globalStyle = createGlobalStyle`
  html,
  body {
    display: flex;
    margin: 0;
    padding: 0;
    justify-content: center;
    align-items: center;
  }

  body {
    background-color: ${({ theme: { colors } }) => colors.black01 };
    color: ${({ theme: { colors } }) => colors.white01 };
    font-family: ${({ theme: { fonts } }) => fonts.family };
  }
`

export default globalStyle;
