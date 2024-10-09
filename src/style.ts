import { createGlobalStyle } from "styled-components";
import Fundo from '../public/Fundos.png'
const GlobalStyle = createGlobalStyle`
    @media screen and (max-width:768px) {
        *{
            padding:0;
            margin:0;
            box-sizing:border-box;
            
        }
        body{
            background-color:#000000;
            color:white;
            background-image: url(${Fundo});
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            background-attachment: fixed;
        }
    }
`
export default GlobalStyle