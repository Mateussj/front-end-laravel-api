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
          background-color: #04AA6D;
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

    color: black;
    border: 1px solid #ddd;
    padding: 8px;
   `;

   export const ButtonPage = styled.button`
   color: #ecf0f1;
   font-size: 17px;
   background-color: #3d9db3;
   border: 1px solid white;
   border-radius: 5px;
   padding: 10px;
   margin: 10px;
   transition: all .1s;
   width: 30%;
`