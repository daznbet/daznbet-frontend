import styled from 'styled-components'
import Button from './Button.jsx'
const LoadingButton = styled(Button)`
  ${({theme: { colors }, fill}) => fill && `
    background-color: ${colors.yellow01};
    color: ${colors.black01};
    transition: color .4s ease .4s,
      background-color .4s ease .4s;
    ;
  `}

  > * {
    position: relative
    z-index: 99;
  }
  &:before {
   content: '';
   color: ${({ theme: { colors } }) => colors.black01 };
   background-color: ${({ theme: { colors } }) => colors.yellow01 };
   min-width:  ${({ loading }) => !loading ? "0" : "100%"};
   position: absolute;
   top: 0;
   left: 0;
   z-index: 1;
   height: 100%;
   transition: min-width 1.4s ease;
  }
`
export default LoadingButton
