import SideBar from "../../components/SideBar"
import { HrSearch, Container, ConteudoContainer, BodyContainer,Body,H1Container, HeaderContainer, ImgContainer, TableUsers, TableTr, TableTh, TableTd } from './styled';
import users from "../../assets/usuarios.png"
import { useEffect, useState } from "react";
import TableData from "../../components/TableData";
import api from "../../services";
import { count } from "console";
import { BsFillPencilFill, BsFillTrash3Fill } from "react-icons/bs";

interface page {
     current_page: any;
     data: Array<any>;
	next_page_url: any;
	path: any;
	per_page: any;
	prev_page_url: any;
	to: any;
	total: any;
}

export default function Usuarios(){

     const [usuarios, setUsuarios] = useState<page>();
     const [status, setStatus] = useState(false);

     useEffect(() => {
          getUsers();
     }, []);

     function getUsers(){
          api.get('/api/users').then(async response => {
               setUsuarios(response.data);
          });
     }
     
     function excluir(item:any){
          let resultado = window.confirm("Deseja mesmo deletar o usuario " + item.nome + ' ' + item.sobrenome + ' ? Lembre-se que esta ação é irreversível !');
          if(resultado){
               api.delete('/api/users/'+item.id).then(async response => {
                    console.log(response.data.message);
                    getUsers();
               });
          }
      }

     return (
          <Container>
               <SideBar location={"users"}/>
               <ConteudoContainer>
                    <Body>
                    <HeaderContainer>
                         <H1Container><ImgContainer src={users} className="" alt="foguete" /> Posts</H1Container>
                    </HeaderContainer>
                     <HrSearch/>
                         <BodyContainer>
                         <TableUsers>
                            <thead>
                                <tr>
                                    <TableTh scope="col">Cliente</TableTh>
                                    <TableTh scope="col">Assunto</TableTh>
                                    <TableTh scope="col">Status</TableTh>
                                    <TableTh scope="col">Cadastrado em</TableTh>
                                    <TableTh scope="col">Editar</TableTh>
                                    <TableTh scope="col">Excluir</TableTh>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                   usuarios && usuarios.data.map((item:any, index:any) => {
                                        return (
                                        <TableTr key={item.id}>
                                            <TableTd data-label="Cliente">{item.nome}{item.sobrenome}</TableTd>
                                            <TableTd data-label="Assunto">{item.email}</TableTd>
                                            <TableTd data-label="Status">
                                               
                                                    {item.telefone}

                                            </TableTd>
                                            <TableTd data-label="Cadastrado em">{item.created_at}</TableTd>
                                            <TableTd data-label="">
                                                  <button  type="button">
                                                       <BsFillPencilFill></BsFillPencilFill>
                                                  </button>
                                             
                                            </TableTd>
                                            <TableTd data-label="">
                                                  <button  onClick={ () => excluir(item)} type="button">
                                                       <BsFillTrash3Fill></BsFillTrash3Fill>
                                                  </button>
                                            </TableTd>
                                        </TableTr>);
                                    })
                                }
                                
                            </tbody>
                            </TableUsers>
                         </BodyContainer>
                    </Body>
               </ConteudoContainer>
          </Container>
     );
   }

