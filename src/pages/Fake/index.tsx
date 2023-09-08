import SideBar from "../../components/SideBar"
import { HrSearch, Container, ConteudoContainer, BodyContainer,Body,H1Container, HeaderContainer, ImgContainer, TableUsers, TableTr, TableTh, TableTd, ButtonPage } from './styled';
import users from "../../assets/usuarios.png"
import { useEffect, useState } from "react";
import TableData from "../../components/TableData";
import api from "../../services";
import { count } from "console";
import { BsFillPencilFill, BsFillTrash3Fill } from "react-icons/bs";
import TopBar from "../../components/TopBar";

export default function Fake(){
     
     const [fake, setFake] = useState(0);
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
          try {
               api.get('/api/users').then(async response => {
                    setFake(response.data.total);
               });
          } catch (error) {
               
          }
          
     }

     function solicitarInsercao() {
          let resultado = window.confirm("Está ação fara com que 100 mil usuarios sejam cadastrados no banco de dados e pode demorar um pouco, deseja prosseguir?");
          if(resultado){
               api.get('/api/fake').then(async response => {
                    if(response.status === 200){
                         window.alert(response.data.message);
                    } else {
                         window.alert("Algo deu errado!");
                    }
                        
               });
          }
     }
     return (

          <Container>
               <TopBar location={"fake"}/>
               <SideBar location={"fake"}/>
               <ConteudoContainer>
                    <Body>
                    <HeaderContainer>
                         <H1Container><ImgContainer src={users} className="" alt="foguete" /> Fake </H1Container>
                    
                    </HeaderContainer>
                     <HrSearch/>
                         <BodyContainer>
                         
                         <H1Container>Quantidade de usuarios cadastrados: {fake} </H1Container>
                         </BodyContainer>
                         
                         <ButtonPage onClick={()=> {solicitarInsercao()}} type="button">Solicitar Inserção de usuarios</ButtonPage>
                    </Body>
               </ConteudoContainer>
          </Container>
     );
   }

