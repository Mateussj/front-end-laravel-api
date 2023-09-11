import styled from 'styled-components';

export const ConteudoCard = styled.div`
     width: 100%;
     display: flex;
     align-items: start;
     flex-direction: column;
     font-family: Arial,sans-serif;
`;
export const CardContainerTitulo = styled.p`
     color: #F29494;
     font-size: 20px;
     align-items: center;
     font-weight: bold;
     margin: 10px;
`;
export const CardContainer = styled.div`
     display: flex;
     flex-direction: row;
     align-items: start;
     margin: 10px;
     padding: 10px;     
     justify-content: space-between;
     background-color: white;
     border-radius: 5px 5px 5px 5px;
     box-shadow: 10px 10px 10px 10px balck;
     width: 1100px;
     height: 100px;
     overflow: hidden;
     &:hover{
          background-color: #F29494;
          p {
               color: white !important;
          }
          .icon {
               color: white !important;
          }
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
     color: #0D0D0D;
`;

export const SpanContainer = styled.div`
     display: flex;
     flex-direction: row;
     align-items: end;
`;
