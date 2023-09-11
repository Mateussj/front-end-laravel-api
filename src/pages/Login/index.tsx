import { useState, useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/auth';
import { ButtonLogin, DivForm, DivPrincipal, FormLogin, H1Titulo, InputLogin } from './styled';
import { MdWhatshot } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function SignIn(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { user, signIn, signOut } = useAuth();

  const navigate = useNavigate();
  
  async function handleSubmit(e : any){
    e.preventDefault();

    if(email !== '' && password !== ''){
      const login = await signIn(email, password);
      if(login){
        navigate("/home");       
      }
    } else {
      toast.error("Forneça todos campos de login necessários.");
    }
  }

  return(
    <DivPrincipal className="container-center">
      <DivForm className="login"> 

        <FormLogin onSubmit={handleSubmit}>
          <H1Titulo><MdWhatshot size={150} color='#F2F2F2'/></H1Titulo> 
          <InputLogin
            type="text"
            placeholder="email@email.com"
            value={email}
            onChange={ (e) => setEmail(e.target.value)}
          />

          <InputLogin
            type="password"
            placeholder="*******"
            value={password}
            onChange={ (e) => setPassword(e.target.value)}
          />
          <ButtonLogin type="submit" >Acessar</ButtonLogin>
          <Link to="/register" style={{color: '#F2F2F2', boxShadow: ''}}> Criar uma conta</Link>
        </FormLogin>
      </DivForm>
    </DivPrincipal>
  )
}