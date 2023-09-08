import styled from 'styled-components';

export const DivTopBar = styled.div`
    display: flex;
    flex-direction: row;
    position: absolute;
    height: 70px;
    padding: 10px;
    width: 100%;
    padding-botoom: 100px;
    font-family: Arial,sans-serif;
    font-weight: bold;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background: #fff;
    position: fixed;
    justify-content: space-between;
    `;

export const DivMenu = styled.div`
    display: flex;
    flex-direction: row;
    align-items: end;
`
export const DivLogo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`


export const UlContainer = styled.ul`
     display: flex;
     flex-direction: row;
     align-items: center;
     text-decoration: none;
     list-style: none;
     whidth: 100%;
     height: 100%;
`;

export const LiContainer = styled.li`

     box-shadow: ${(props) => props.className === "active" ? 'rgba(0, 0, 0, 1.45) 0px 8px 0px -1px' : ''};
     cursor: pointer;
     whidth: 100%;
     margin: 60px;
     &:hover {
          box-shadow: #005954 0px 8px 0px -1px;
     }
`;