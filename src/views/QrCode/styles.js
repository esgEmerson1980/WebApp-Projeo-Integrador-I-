import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;  
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 

  width: 50%;

  h1 {
    color: #000000;
  }
  p {
    color: #C4C4C4;
  }

`

export const QrCodeArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

`

export const ValidationCode = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;

  span{
    text-transform: uppercase;
    font-weight: bold;
  }

  input {
    font-size: 18px;
    padding: 10px;
    text-align: center;
  }

  button{
    font-weight: bold;
    background: #C4C4C4;
    color: #000000;
    font-size: 16px;
    padding: 10px;
    border-radius: 30px;
    border: none;
    cursor: pointer;
    margin-top: 10px;

    &:hover{
      background: #C4C4C4;
    }
  }
`