import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home";
import Usuarios from "../pages/Usuarios";
import Matriz from "../pages/Matriz";
import Fake from "../pages/Fake";
import SignIn from "../pages/Login";
import PrivateRoute from "./PrivateRoute";

function RoutesApp(){
     return(
       <Routes>
          <Route path="/" element={ <HomePage/> } />
          <Route path="/login" element={ <SignIn/>  } />
          <Route path="/home" element={<PrivateRoute><HomePage/></PrivateRoute> } />
          <Route path="/users" element={<PrivateRoute><Usuarios/></PrivateRoute> } />
          <Route path="/matriz" element={<PrivateRoute><Matriz/></PrivateRoute> } />
          <Route path="/fake" element={<PrivateRoute><Fake/></PrivateRoute> } />
       </Routes>
     )
   }
   
   export default RoutesApp;