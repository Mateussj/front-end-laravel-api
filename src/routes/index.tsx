import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home";
import Usuarios from "../pages/Usuarios";
import Matriz from "../pages/Matriz";
import Fake from "../pages/Fake";

function RoutesApp(){
     return(
       <Routes>
         <Route path="/" element={ <HomePage/> } />
         <Route path="/users" element={ <Usuarios/>} />
         <Route path="/matriz" element={ <Matriz/> } />
         <Route path="/fake" element={ <Fake/> } />
       </Routes>
     )
   }
   
   export default RoutesApp;