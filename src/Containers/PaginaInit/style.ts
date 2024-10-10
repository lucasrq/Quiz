import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  margin-top:30px;
  overflow-y:hidden;
  h1,h2 {
    font-weight: bold;
    text-align: center;
    align-items: center;
    margin-bottom:20px;
    width:65%;
    min-width:300px;
    font-size:25px;
  }

  h2{
    font-size:23px;
    color:#eed289;
  }

  .ContainerButton {
    text-align: center;
    justify-content: center;
    align-items: center;

    button {
      background-color: #21387a;
      margin-top: 20px;
      color: white;
      font-size: 20px;
      text-decoration: none;
      width: 100%;
      padding: 20px;
      border-radius: 8px;
      border: none;
      cursor: pointer;
    }
  }
  .SuitManDiv{
    margin:0 auto;
    display:flex;
  }
  `