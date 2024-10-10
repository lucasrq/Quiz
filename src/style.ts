import { createGlobalStyle } from "styled-components";
import Fundo from '../public/Fundos.png'
const GlobalStyle = createGlobalStyle`
        *{
            padding:0;
            margin:0;
            box-sizing:border-box;
            font-family: "Poppins", sans-serif;
        }
    @media screen and (max-width:768px) {
        body{
            background-color:#000000;
            color:white;
            background-image: url(${Fundo});
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            background-attachment: fixed;
            overflow-y:hidden;
        }
    }
`
export default GlobalStyle