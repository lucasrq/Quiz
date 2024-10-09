import styled from "styled-components";


export const Container = styled.div`
    height:100vh;
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    .Titulo{
        display:flex;
        font-weight:normal;
        width:100%;
        text-align:center;
        justify-content:center;
       
    }

    h1{
        font-weight:bold;
        margin-top:15px;
    }

    p{
        text-align:center;
        justify-content:center;
        align-items:center;
        display:flex;
        width:85%; 
        margin-top:15px;
    }


    .ContainerButton{
        text-align:center;
        justify-content:center;
        align-items:center;
        margin-top:20px;
        button{
            background-color:blue;
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