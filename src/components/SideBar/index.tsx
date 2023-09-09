import { SideBarContainer, UlContainer, LiContainer, ImgContainer,SpanContainer, HrContainer } from "./styled";
import { Link } from "react-router-dom";
import { MdGridView, MdSupervisedUserCircle, MdPersonPin } from "react-icons/md";

export default function SideBar(props: any){
     return (
          <SideBarContainer>
               <UlContainer>
               <Link to="/home">
                    <LiContainer className={props.location === "Home" ? "active" : ""}>
                         <MdGridView size={25} style={props.location === "Home" ? {marginRight: '5px', color:'white'} : {marginRight: '5px', color:'black'}}/>
                         <SpanContainer className="sp">Inicio</SpanContainer>
                    </LiContainer>
               </Link>
               <Link to="/matriz"> 
                    <LiContainer className={props.location === "matriz" ? "active" : ""}>
                         <MdPersonPin size={25} style={props.location === "matriz" ? {marginRight: '5px', color:'white'} : {marginRight: '5px', color:'black'}}/>
                         <SpanContainer className="sp">Perfil</SpanContainer>
                    </LiContainer>
               </Link>
               <Link to="/users"> 
                    <LiContainer className={props.location === "users" ? "active" : ""}>
                         <MdSupervisedUserCircle size={25} style={props.location === "users" ? {marginRight: '5px', color:'white'} : {marginRight: '5px', color:'black'}}/>
                         <SpanContainer className="sp">Usuários</SpanContainer>
                    </LiContainer>
               </Link>
               </UlContainer>
          </SideBarContainer>
     );
}