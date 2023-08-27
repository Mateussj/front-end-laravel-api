import SideBar from "../../components/SideBar"
import { HrSearch, Container, ConteudoContainer, BodyContainer,Body,H1Container, HeaderContainer, ImgContainer, TableUsers, TableTr, TableTh, TableTd } from './styled';
import users from "../../assets/usuarios.png"
import { useEffect, useState } from "react";
import TableData from "../../components/TableData";
import api from "../../services";
import { count } from "console";
import { BsFillPencilFill, BsFillTrash3Fill } from "react-icons/bs";

export default function Matriz(){
     
     const [matriz, setMatriz] = useState();
     useEffect(() => {
          api.get('/api/matriz').then(async response => {
              setMatriz(response.data);
          });
     }, []);

     return (
          <Container>
               <SideBar location={"matriz"}/>
               <ConteudoContainer>
                    <Body>
                    <HeaderContainer>
                         <H1Container><ImgContainer src={users} className="" alt="foguete" /> Matriz</H1Container>
                    
                    </HeaderContainer>
                     <HrSearch/>
                         <BodyContainer>
                         
                         <H1Container>{matriz}</H1Container>
                         </BodyContainer>
                    </Body>
               </ConteudoContainer>
          </Container>
     );
   }

