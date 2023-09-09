import styled from 'styled-components';

export const DivPrincipal = styled.div`
     display: flex;
     width: 100%;
     height: 100%;
     align-items: center;
     justify-content: center;
     flex-direction: column;
     background-color: #111111;
`
export const H1Titulo = styled.h1`
     text-align: center;
     color: #FFF;
`

export const DivForm = styled.div`
     display:flex;
     padding-bottom: 150px;
`;

export const FormLogin = styled.form`
     display:flex;
     flex-direction: column;
     margin: 10px;
     align-items: center;
`

export const InputLogin = styled.input`
     text-align: center;
     font-size: 17px;
     margin: 5px;
     display: flex;
     border: none;
     border-radius: 10px;
     height: 50px;
     width: 300px;
     box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.2);
     &:hover{
          scale: 1.1;
     }
     `;

export const ButtonLogin = styled.button`
     border: none;
     height: 50px;
     width: 300px;
     background-color: #000000;
     color: white;
     box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.2);
     border-radius: 10px;
     font-weight: bold;
     font-size: 17px;
     margin: 10px;
     cursor: pointer;
     &:hover{
          scale: 1.1;
     }
`;