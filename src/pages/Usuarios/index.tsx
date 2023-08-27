import SideBar from "../../components/SideBar"
import { HrSearch, Container, ConteudoContainer, BodyContainer,Body,H1Container, HeaderContainer, ImgContainer, TableUsers, TableTr, TableTh, TableTd, H1Modal, DivModal, FormModal, LabelForm, ButtonModal, InputModal, DivButton, ButtonNew, ImgContainerPage, ButtonPageVoltar, ButtonPageAvancar } from './styled';
import users from "../../assets/usuarios.png"
import proximo from "../../assets/mover-para-a-proxima.png"
import anterior from "../../assets/anterior.png"
import { useEffect, useState } from "react";
import TableData from "../../components/TableData";
import api from "../../services";
import { count } from "console";
import { BsFillPencilFill, BsFillTrash3Fill } from "react-icons/bs";
import Modal from 'react-modal';
import { format } from 'date-fns';

const customStyles = {
     content: {
       top: '50%',
       left: '50%',
       right: 'auto',
       bottom: 'auto',
       marginRight: '-50%',
       transform: 'translate(-50%, -50%)',
     },
   };
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

     const [nome, setNome] = useState('');
     const [sobrenome, setSorebnome] = useState('');
     const [telefone, setTelefone] = useState('');
     const [email, setEmail] = useState('');
     const [id, setId] = useState(null);
     const [password, setPassword] = useState('');
     
     let subtitle: any;
     const [modalIsOpen, setIsOpen] = useState(false);
   
     function openModal(item: any) {
          
          if(item){
               setId(item.id);
               setIsOpen(false);
               setEmail(item.email);
               setNome(item.nome);
               setSorebnome(item.sobrenome);
               setTelefone(item.telefone);
          } else {
               setId(item);
          }
          
          setIsOpen(true);
     }
   
     function afterOpenModal() {
       // references are now sync'd and can be accessed.
       subtitle.style.color = '#f00';
     }
   
     function closeModal() {
       setIsOpen(false);
       setEmail('');
       setNome('');
       setSorebnome('');
       setTelefone('');
       setId(null);
       setPassword('')
     }

     function validaUsuario(){
          if(nome === ''){
               window.alert('O campo nome é obrgatorio');
               return false;
          }
          if(sobrenome === ''){
               window.alert('O campo sobrenome é obrgatorio');
               return false;
          }
          if(email === ''){
               window.alert('O campo e-mail é obrgatorio');
               return false;
          }
          return true;
     }

     function validaUsuarioNovo(){
          if(nome === ''){
               window.alert('O campo nome é obrgatorio');
               return false;
          }
          if(sobrenome === ''){
               window.alert('O campo sobrenome é obrgatorio');
               return false;
          }
          if(email === ''){
               window.alert('O campo e-mail é obrgatorio');
               return false;
          }
          if(password === ''){
               window.alert('O campo senha é obrgatorio');
               return false;
          }
          return true;
     }
     function sendUpdate(){
          if(validaUsuario()) {
               api.put('/api/users/' + id, {
                         "nome": nome,
                         "sobrenome": sobrenome,
                         "telefone": telefone,
                         "email": email                         
               }).then(async response => {
                    if(response.status === 200){
                         window.alert('Usuario atualizado com sucesso !');
                         closeModal();
                         getUsers();
                    } else {
                         window.alert('Algo deu errado !' + id);
                    }
                         
               });
          }
               
     }

     function sendGravacao(){
          if(validaUsuarioNovo()) {
               api.post('/api/users', {
                    "nome": nome,
                    "sobrenome": sobrenome,
                    "telefone": telefone,
                    "email": email,
                    "password": password ? password : null
          }).then(async response => {
               if(response.status === 200){
                    window.alert('Usuario cadastrado com sucesso !');
                    closeModal();
                    getUsers();
               } else {
                    window.alert('Algo deu errado !');
               }
                    
          });
          }
     }
     useEffect(() => {
          getUsers();
     }, []);

     function getUsers(){

          try {
               api.get('/api/users').then(async response => {
                    setUsuarios(response.data);
               });
          } catch (error) {
               window.alert(error);
          }
          
     }

     function getUsersPages(param:any){
          
          try {
               if(param)
                    api.get(param).then(async response => {
                         setUsuarios(response.data);
                    });
          } catch (error) {
               window.alert(error);
          }
          
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
                         <ButtonNew onClick={()=>openModal(null)}>Novo usuário</ButtonNew>
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
                                                  <button onClick={() => openModal(item)} type="button">
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

                                {
                                   (usuarios && usuarios.data.length <= 0)  ? <TableTr> 
                                                  <TableTd colSpan={6}>Nenhum usuario cadastrado </TableTd>
                                             </TableTr> : <></>
                                }
                                
                            </tbody>
                         </TableUsers>
                         {usuarios &&  <><ButtonPageVoltar onClick={()=> getUsersPages(usuarios.prev_page_url)} type="button"> Pagina anterior </ButtonPageVoltar>
                                <ButtonPageVoltar type="button"> {usuarios.current_page} </ButtonPageVoltar>
                              <ButtonPageAvancar onClick={()=> getUsersPages(usuarios.next_page_url)} type="button">Pagina seguinte</ButtonPageAvancar></>
                         }
                         
                         </BodyContainer>
                    </Body>
               </ConteudoContainer>

               
          <div>
               <Modal
               isOpen={modalIsOpen}
               onAfterOpen={afterOpenModal}
               onRequestClose={closeModal}
               style={customStyles}
               contentLabel="Example Modal"
               >
               <H1Modal ref={(_subtitle) => (subtitle = _subtitle)}>Usuário</H1Modal>
               <DivModal>
                    <FormModal>
                         <LabelForm>Nome: </LabelForm>
                         <InputModal 
                              type="text"
                              placeholder="Nome"
                              value={nome}
                              onChange={ (e) => setNome(e.target.value) }
                          />
                         <LabelForm>Sobrenome: </LabelForm>
                         <InputModal
                              type="text"
                              placeholder="Sobrenome"
                              value={sobrenome}
                              onChange={ (e) => setSorebnome(e.target.value) }
                         />
                         <LabelForm>Email: </LabelForm>
                         <InputModal 
                              type="text"
                              placeholder="E-mail"
                              value={email}
                              onChange={ (e) => setEmail(e.target.value) }
                         />
                         <LabelForm>Telefone: </LabelForm>
                         <InputModal 
                              type="text"
                              placeholder="Telefone"
                              value={telefone}
                              onChange={ (e) => setTelefone(e.target.value) }
                         />
                         <LabelForm>Senha: </LabelForm>
                         <InputModal 
                              type="text"
                              placeholder="Senha"
                              value={password}
                              onChange={ (e) => setPassword(e.target.value) }
                         />
                    </FormModal>
               </DivModal>  
               <DivButton>
                    <ButtonModal onClick={closeModal}>Sair</ButtonModal>
                    { id === null ? <ButtonModal onClick={sendGravacao}>Gravar</ButtonModal> : <ButtonModal onClick={sendUpdate}>Atualizar</ButtonModal> } 
               </DivButton>
               </Modal>
          </div>
          </Container>
     );
   }

