import styled from 'styled-components';

export const SideBarContainer = styled.div`
     display: flex;
     flex: 0 0 100px; /* Define a largura da barra lateral */
     align-items: center;
     color: black;
     margin-top: 30px;
     margin-left: -10px;
     font-family: Arial,sans-serif;
     font-weight: bold;
     position: fixed;
`;

export const HrContainer = styled.hr`
     whidth:100px;
     color: black;
`

export const UlContainer = styled.ul`
     display: flex;
     flex-direction: column;
     align-items: start;
     text-decoration: none;
     list-style: none;
     padding-top: 60px;
     whidth: 100%;
     height: 100%;
`;

export const LiContainer = styled.li`
     background-color: ${(props) => props.className === "active" ? '#202022' : ''};
     color: ${(props) => props.className === "active" ? 'white' : '#202022'};
     border-radius: ${(props) => props.className === "active" ? '0 5px 5px 0px' : ''};
     cursor: pointer;
     display: flex;
     align-items: center;
     padding: 15px;
     padding-right: 80px;
     whidth: 100%;
     margin: 5px;
     &:hover {
          .sp {
               opacity:1;
          }
          background-color: #CACACA;
          transition: all 0.5s ease;
          border-radius: 0 5px 5px 0px;
          padding-right: 80px;
          margin: 5px;
     }
`;
export const ImgContainer = styled.img`
     width: 80px;
     height: 80px;
`;
export const SpanContainer = styled.span`
     opacity: 1;
     transition: opacity 0.3s ease;
     
`;