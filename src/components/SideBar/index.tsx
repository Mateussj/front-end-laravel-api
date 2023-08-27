import { SideBarContainer, UlContainer, LiContainer, ImgContainer,SpanContainer, HrContainer } from "./styled";
import matriz from "../../assets/puzzle.png"
import usuarios from "../../assets/usuarios.png"
import info from "../../assets/usuarios.png"
import posts from "../../assets/posts.png"
import { Link } from "react-router-dom";

export default function SideBar(props: any){
     return (
          <SideBarContainer>
               <UlContainer>
               <Link to="/">
                    <LiContainer className={props.location === "Home" ? "active" : ""}>
                         <ImgContainer src={posts} className="" alt="foguete" />
                         <SpanContainer className="sp">Posts</SpanContainer>
                    </LiContainer>
               </Link>
               <Link to="/users"> 
                    <LiContainer className={props.location === "users" ? "active" : ""}>
                         <ImgContainer src={usuarios} className="active" alt="foguete" />
                         <SpanContainer className="sp">Usuários</SpanContainer>
                    </LiContainer>
               </Link>
               <Link to="/matriz"> 
                    <LiContainer className={props.location === "matriz" ? "active" : ""}>
                         <ImgContainer src={matriz} className="" alt="foguete" />
                         <SpanContainer className="sp">Matriz</SpanContainer>
                    </LiContainer>
               </Link>
               <Link to="/fake"> 
                    <LiContainer className={props.location === "fake" ? "active" : ""}>
                         <ImgContainer src={info} className="foguete-logo" alt="foguete" />
                         <SpanContainer className="sp">Fake</SpanContainer>
                    </LiContainer>
               </Link>
               </UlContainer>
          </SideBarContainer>
     );
}