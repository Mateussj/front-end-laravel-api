import { MdGridView, MdPersonPin, MdSupervisedUserCircle, MdWhatshot } from "react-icons/md";
import { DivLogo, DivMenu, DivTopBar, LiContainer, UlContainer } from "./styled";
import { Link } from "react-router-dom";

export default function TopBar(props: any){
     return (
        <DivTopBar>
            <DivLogo>
                <MdWhatshot size={50}/> Laragram
            </DivLogo>
            <DivMenu>
                <UlContainer>
                <Link to="/">
                        <LiContainer className={props.location === "Home" ? "active" : ""}>
                            <MdGridView size={37} style={{marginRight: '5px', color:'black'}}/>
                        </LiContainer>
                </Link>
                <Link to="/matriz"> 
                        <LiContainer className={props.location === "matriz" ? "active" : ""}>
                            <MdPersonPin size={37} style={{marginRight: '5px', color:'black'}}/>
                        </LiContainer>
                </Link>
                <Link to="/users"> 
                        <LiContainer className={props.location === "users" ? "active" : ""}>
                            <MdSupervisedUserCircle size={37} style={{marginRight: '5px', color:'black'}}/>
                        </LiContainer>
                </Link>
                </UlContainer>
            </DivMenu>
            <DivMenu>
                
            </DivMenu>
        </DivTopBar>  
    );
}