import { 
     CardContainerTitulo, 
     CardContainer, 
     ConteudoCard, 
     ImgContainer, 
     ParagrafoContainer
} from './styled';
import discussion from "./../../assets/discussion.png";
import { MdAddReaction } from "react-icons/md";

export default function Card(props: any){
     return (
          <>
          <CardContainer id={props.id}>
               <MdAddReaction className='icon' size={50} color='#F22E2E' />
               <ConteudoCard>
                    <CardContainerTitulo>{props.dados.user.nome}</CardContainerTitulo>
                    <ParagrafoContainer>{props.dados.conteudo}</ParagrafoContainer>                    
               </ConteudoCard>
          </CardContainer>
          </>
          );
}