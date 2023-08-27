import { 
     CardContainerTitulo, 
     CardContainer, 
     ConteudoCard, 
     ImgContainer, 
     ParagrafoContainer
} from './styled';
import discussion from "./../../assets/discussion.png";

export default function Card(props: any){
     return (
          <CardContainer id={props.id}>
               <ImgContainer src={discussion} className="" alt="discussion" />
               <ConteudoCard>
                    <CardContainerTitulo>{props.dados.title}<hr/></CardContainerTitulo>
                    <ParagrafoContainer>{props.dados.body}</ParagrafoContainer>                    
               </ConteudoCard>
          </CardContainer>
     );
}