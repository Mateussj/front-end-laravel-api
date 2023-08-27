import SideBar from "../../components/SideBar"
import { HrSearch, Container, ConteudoContainer, BodyContainer,Body,H1Container, HeaderContainer, ImgContainer, TableUsers, TableTr, TableTh, TableTd } from './styled';
import users from "../../assets/usuarios.png"
import { useEffect, useState } from "react";
import TableData from "../../components/TableData";
import api from "../../services";
import { count } from "console";
import { BsFillPencilFill, BsFillTrash3Fill } from "react-icons/bs";

export default function Fake(){
     
     const [fake, setFake] = useState();
     const [count, setCount] = useState(0);

     useEffect(() => {
       const intervalId = setInterval(() => {
          getUsers();
       }, 3000); // Atualiza a cada 1000ms (1 segundo)
   
       return () => {
         clearInterval(intervalId); // Limpa o intervalo quando o componente é desmontado
       };
     }, []);

     useEffect(() => {
          getUsers();
     }, []);

     function getUsers(){
          api.get('/api/users').then(async response => {
               setFake(response.data.total);
          });
     }
     return (

          <Container>
               <SideBar location={"fake"}/>
               <ConteudoContainer>
                    <Body>
                    <HeaderContainer>
                         <H1Container><ImgContainer src={users} className="" alt="foguete" /> Fake </H1Container>
                    
                    </HeaderContainer>
                     <HrSearch/>
                         <BodyContainer>
                         
                         <H1Container>Quantidade de usuarios cadastrados: {fake} {count}</H1Container>
                         </BodyContainer>
                    </Body>
               </ConteudoContainer>
          </Container>
     );
   }

