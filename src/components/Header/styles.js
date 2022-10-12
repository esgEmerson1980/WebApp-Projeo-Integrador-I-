import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 70px;
  background: #C4C4C4;
  border-bottom: 5px solid #6DB2EE;

  display: flex;
`

export const LeftSide = styled.div`
  width: 80%;
  height: 70px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  

  img {
    width: 130px;
    height: 50px;
  }
 
`

export const RightSide = styled.div `
  width: 50%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  button {
    background: none;
    border: none;
    cursor: pointer;
    }

  a, button {
    color: #000000;
    font-weight: bold;
    font-size: 14px;
    text-decoration: none;
    margin: 0 10px;
            
    &:hover{
      color: #6DB2EE;
    }
  } 
  
  #notification {

    img {
      width: 25px;
      height: 30px;
    }

    span {
      background: #FFF;
      color: #6DB2EE;
      padding:3px 7px;
      border-radius: 50%;
      position: relative;
      top: -20px;
      right: 10px;
    }

    &:hover {
      opacity: 0.5; 
    }
  }
  
  .dividir::after {
    content: "|";
    margin: 0 10px;
    color: #707070;
    }
  
  button {
    font-size: 16px;
  } 

`

