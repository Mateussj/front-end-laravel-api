import { styled } from "styled-components";

export const ConteudoContainer = styled.div`
     display: flex;
     color: white;
     padding: 10px;
     width: 100%;
`;
export const Container = styled.div`
     display: flex;
     flex-direction: row;
     align-items: start;
`

export const HeaderContainer = styled.div`
     width: 100%;
     display: flex;
     flex-direction: row;
     align-items: center;
     justify-content: space-between;
`;

export const Body = styled.div`
     width: 100%;
     display: flex;
     flex-direction: column;
`;


export const H1Container = styled.h1`
     display:flex;
     font-size: 20px;
     align-text: center;
     margin-left: 20px;
     margin-left: 20px;
     
`

export const BodyContainer = styled.div`
     width: 100%;
     display: flex;
     flex-direction: row;
     flex-wrap: wrap;
     margin: 0px;

     padding: px;
`;

export const IconSearch = styled.i`
    position: absolute;
    top: 10%;
    right: 1px;
    transform: translate(-50%,-50%);
    font-size: 26px;
    color: white;
    transition: .2s;
     &:hover{
          opacity: 0;
          z-index: -1;
     }
`;


export const HrSearch = styled.hr`
     margin: 20px;
     width: 25%;
`;

export const ImgContainer = styled.img`
     width: 40px;
     height: 40px;
     margin-right: 10px;
`;

export const TableUsers = styled.table`

     border: 1px solid #CCC;
     margin: 0;
     padding: 0;
     width: 100%;
     table-layout: fixed;
     border-collapse: collapse;
     padding: 0.60em;
     text-align: center;
`

export const TableTr = styled.tr`
     background-color: white;
     &:hover{
          background-color: #3d9db3;
          color: black;
     }
`;
export const TableTh = styled.th`
     font-size: 0.85em;
     letter-spacing: 0.1em;
     text-transform: uppercase;
     padding-bottom: 12px;
     background-color: gray;
     color: white;
     border: 1px solid #ddd;
     padding: 8px;
    `;

export const TableTd = styled.td`
    font-size: 0.85em;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding-bottom: 12px;
    overflow: hidden;
    color: black;
    border: 1px solid #ddd;
    padding: 8px;
   `;

export const H1Modal = styled.h1`
     font-size: 48px;
     color: #066a75 !important;
     padding: 5px 0;
     font-family: Arial,sans-serif;
     font-weight: bold;
     text-align: center;
     &:after {
          content: ' ';
          display: block;
          width: 100%;
          height: 2px;
          margin-top: 10px;
          background: -webkit-linear-gradient(left, rgba(147,184,189,0) 0%,rgba(147,184,189,0.8) 20%,rgba(147,184,189,1) 53%,rgba(147,184,189,0.8) 79%,rgba(147,184,189,0) 100%); 
          background: linear-gradient(left, rgba(147,184,189,0) 0%,rgba(147,184,189,0.8) 20%,rgba(147,184,189,1) 53%,rgba(147,184,189,0.8) 79%,rgba(147,184,189,0) 100%); 
     }
`;

export const DivModal = styled.div`
     display:flex;
     flex-direction: column;
     margin: 30px;
`;

export const FormModal = styled.form`
     display:flex;
     flex-direction: column;
 
`;

export const LabelForm = styled.label`
  color: #405c60;
  position: relative;
`
export const ButtonModal = styled.button`
width: 100%!important;
  cursor: pointer;  
  background: #3d9db3;
  padding: 8px 5px;
  color: #fff;
  font-size: 20px;  
  border: 1px solid #fff; 
  margin-bottom: 10px;  
  text-shadow: 0 1px 1px #333;
  
  -webkit-border-radius: 5px;
  border-radius: 5px;
  
  transition: all 0.2s linear;
  &:hover{
     background: #4ab3c6;
  }
`

export const InputModal = styled.input`
     width: 95%;
    margin-top: 4px;
    padding: 10px;
    border: 1px solid #b2b2b2;
    -webkit-border-radius: 3px;
    border-radius: 3px;
    -webkit-box-shadow: 0px 1px 4px 0px rgba(168, 168, 168, 0.6) inset;
    box-shadow: 0px 1px 4px 0px rgba(168, 168, 168, 0.6) inset;
    -webkit-transition: all 0.2s linear;
    transition: all 0.2s linear;
`

export const DivButton = styled.div`
  magin: 100px;
  display: flex;
  flex-direction: row;
`

export const ButtonNew = styled.button`
  width: 10%!important;
  cursor: pointer;  
  background: #3d9db3;
  padding: 8px 5px;
  color: #fff;
  font-size: 20px;  
  border: 1px solid #fff; 
  margin-bottom: 10px;  
  text-shadow: 0 1px 1px #333;
  
  -webkit-border-radius: 5px;
  border-radius: 5px;
  
  transition: all 0.2s linear;
  &:hover{
     background: #4ab3c6;
     scale: 1.2;
  }
`

export const ImgContainerPage = styled.img`
width: 30px;
height: 30px;
margin-right: 10px;
border-radius:50px;
`;

export const ButtonPageAvancar = styled.button`
     color: #ecf0f1;
     font-size: 17px;
     background-color: #3d9db3;
     border: 1px solid white;
     border-radius: 5px;
     padding: 10px;
     margin: 10px;
     transition: all .1s;
`
export const ButtonPageVoltar = styled.button`
     color: #ecf0f1;
     font-size: 17px;
     background-color: #3d9db3;
     border: 1px solid white;
     border-radius: 5px;
     padding: 10px;
     margin: 10px;
     transition: all .1s;
`