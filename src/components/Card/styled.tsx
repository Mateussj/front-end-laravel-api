import styled from 'styled-components';

export const ConteudoCard = styled.div`
     width: 100%;
     display: flex;
     align-items: start;
     flex-direction: column;
     font-family: sans;
`;
export const CardContainerTitulo = styled.h1`
     color: black;
     align-items: center;
     font-weight: bold;
     margin: 10px;
`;
export const CardContainer = styled.div`
     width: 100%;
     display: flex;
     flex-direction: row;
     align-items: center;
     margin: 20px;
     padding: 10px;     
     justify-content: space-between;
     background-color: white;
     border-radius: 0px 25px 25px 25px;
     box-shadow: 10px 10px 10px 10px balck;
     width: 90%;
     height: 180px;
     overflow: hidden;
     &:hover{
          scale: 1.1;
          background-color: #EBEBEB;
     }
`;

export const ImgContainer = styled.img`
     height: 100px;
     margin-top: 0px;
`;

export const ParagrafoContainer = styled.p`
     overflow: hidden;
     text-overflow: ellipsis;
     display: -webkit-box;
     -webkit-line-clamp: 10; // Quantidade de linhas
     -webkit-box-orient: vertical; 
     margin-left: 15px;
     color: black;
`;

export const SpanContainer = styled.div`
     display: flex;
     flex-direction: row;
     align-items: end;
`;
