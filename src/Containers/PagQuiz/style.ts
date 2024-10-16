import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .Titulo {
    display: flex;
    width: 100%;
    text-align: center;
    justify-content: center;
    margin:35px 20px;
    font-style: italic;
    font-weight:100;
    
  }
  h1 {
    font-weight: bold;
    text-align: center;
    align-items: center;
    margin-bottom:14px;
    width:95%;
    font-size:27px;
  }

  p {
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
    width: 85%;
    
  }

  .ContainerButton {
    text-align: center;
    justify-content: center;
    align-items: center;

    button {
      background-color: #0d4a2d;
      margin-top: 20px;
      color: white;
      font-size: 19px;
      text-decoration: none;
      width: 100%;
      max-width:340px;
      padding: 15px;
      border-radius: 15px;
      border: none;
      cursor: pointer; 

      a{
        text-decoration:none;
        color:#fff;
      }
    }
  }

  .investDiv{
      margin:0 auto;
      padding-bottom:30px;

    img{
      width:100%;
      max-width:200px;
    }
  }

  @media screen and (min-width: 824px) {
    height: 100vh;
    overflow-y:hidden;
  .Titulo {
    display: flex;
    width: 100%;
    text-align: center;
    justify-content: center;
    margin:35px 20px;
    font-style: italic;
    font-weight:100;
    
  }
  h1 {
    font-weight: bold;
    text-align: center;
    align-items: center;
    margin-bottom:14px;
    width:95%;
    font-size:27px;
  }

  p {
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
    width: 85%;
    
  }

  .ContainerButton {
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    button {
      background-color: #0d4a2d;
      margin-top: 20px;
      color: white;
      font-size: 19px;
      text-decoration: none;
      width: 100%;
      max-width:340px;
      padding: 15px;
      border-radius: 15px;
      border: none;
      cursor: pointer;
    }
  }

  .investDiv{
      margin:0 auto;
      padding-bottom:30px;

    img{
      width:100%;
      max-width:200px;
    }
  }
  }
`;
