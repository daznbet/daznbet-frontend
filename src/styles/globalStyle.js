import { createGlobalStyle } from 'styled-components'

const globalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');

  html,
  body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme: { colors } }) => colors.black01 };
    font-family: ${({ theme: { fonts } }) => fonts.family };
    font-size: ${({ theme: { fonts }}) => fonts.size.base };
    height: 100%;
  }

  #root {
    display: flex;
    height: 100%;
    color: ${({ theme: { colors } }) => colors.white01 };
    padding: ${({ theme: { spacing } }) => `${spacing.md} 0` };
    justify-content: center;
    align-items: center;
  }
`

export default globalStyle;
