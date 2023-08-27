import styled from 'styled-components';

export const SideBarContainer = styled.div`
     display: flex;
     flex: 0 0 200px; /* Define a largura da barra lateral */
     align-items: center;
     color: white;
     padding: 0px;
     font-family: sans;
     font-weight: bold;
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
`;
export const LiContainer = styled.li`
     background-color: ${(props) => props.className === "active" ? 'white' : ''};
     border-radius: ${(props) => props.className === "active" ? '0 30px 30px 0px' : ''};
     .sp {
          display: ${(props) => props.className === "active" ? 'none' : ''};;
     }
     cursor: pointer;
     display: flex;
     align-items: center;
     padding: 20px;
     margin: 10px;
     &:hover {
          .sp {
               opacity:1;
          }
          background-color: white;
          transition: all 0.5s ease;
          border-radius: 0 30px 30px 0px;
          padding: 20px;
          margin: 10px;
     }
`;
export const ImgContainer = styled.img`
     width: 80px;
     height: 80px;
`;
export const SpanContainer = styled.span`
     opacity: 0;
     color: #282c34;
     transition: opacity 0.3s ease;
     
`;



