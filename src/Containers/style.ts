import styled from "styled-components";


export const Container = styled.div`
    height:100vh;
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-bottom:50px;
    .Titulo{
        display:flex;
        font-weight:normal;
        width:100%;
        text-align:center;
        justify-content:center;
    }

    .TituloSobre{
        margin-top:20px;
    }

    h1{
        font-weight:bold; 
        margin-top:20px;
        margin-bottom:20px;
        text-align:center;
        align-items:center;
    }

    p{
        text-align:center;
        justify-content:center;
        align-items:center;
        display:flex;
        width:85%; 
    }


    .ContainerButton{
        
        text-align:center;
        justify-content:center;
        align-items:center;
        button{
            background-color:#21387a;
            margin-top:20px;
            color:white;
            font-size:20px;
            text-decoration:none;
            width:85%;
            padding:20px;
            border-radius:15px;
            border:none;
            cursor:pointer;
        }
    }
`