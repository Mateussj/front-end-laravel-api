import styled from 'styled-components';

export const HomeContainer = styled.div`
     display: flex;
     flex-direction: row;
     align-items: start;
`
export const ConteudoContainer = styled.div`
     display: flex;
     flex-direction: column;
     color: white;
     padding: 10px;
     margin-left: 170px;
     margin-top: 70px;
     width: 100%;
`;

export const Body = styled.div`
     width: 100%;
     display: flex;
     flex-direction: column;
     align-items: center;
`;

export const HeaderContainer = styled.div`
     width: 84%;
     display: flex;
     flex-direction: row;
     align-items: center;
     justify-content: space-between;
`;

export const BodyContainer = styled.div`
     width: 100%;
     display: flex;
     flex-direction: row;
     align-items: start;
     flex-wrap: wrap;
     margin: 0px;
     padding: 0px;
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

export const InputSearch = styled.input`
     padding: 10px;
     width: 140px;
     height: 40px;
     background: none;
     border: 2px solid white;
     border-radius: 50px;
     box-sizing: border-box;
     font-family: Arial,sans-serif;
     font-size: 26px;
     color: white;
     outline: none;
     transition: .5s;
     &:hover{
          width: 350px;
          background: gray;
          border-radius: 7px;  
     }
     
`;

export const DivSearch = styled.div`
     
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