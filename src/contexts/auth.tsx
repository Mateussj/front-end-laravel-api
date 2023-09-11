import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import api from '../services';
import { toast } from 'react-toastify';

// Interface para representar o usuário autenticado
interface User {
  id: number;
  nome: string;
  email: string;
  // Outros campos do usuário, se necessário
}

// Interface para o contexto de autenticação
interface AuthContextData {
  user: User | null;
  bearer: string | null;
  signIn: (email: string, password: string) => Promise<Boolean>;
  signOut: () => any;
  singned: () => any;
}

const AuthContext = createContext<AuthContextData | undefined>(undefined);

// Componente provedor de contexto
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<any>(null);
  const [bearer, setBearer] = useState<any>(null);  

  useEffect(() => {
    async function loadUser(){
      
      const usuario = localStorage.getItem('@laragramUser');
      const token = localStorage.getItem('@laragramToken');

      if(usuario != null && token != null){
        setUser(usuario);
        setBearer(token);
      } else {
        setUser(null);
        setBearer(null);
      }
    }

    loadUser();
  }, [])
  const signIn = async (email: string, password: string) => {
    // Implemente sua lógica de autenticação aqui
    // Exemplo: chamar uma API para autenticar o usuário
    return await api.post('/api/login',{email, password}).then(async (response) => {
        await setUser(response.data.user);
        await setBearer(response.data.token);
        await localStorage.setItem('@laragramToken', response.data.token);
        await localStorage.setItem('@laragramUser', JSON.stringify(response.data.user));
        toast.success(`Seja Bem-vindo(a) ` + response.data.user.nome + ' !');
        return true;
    }).catch((error) => {
      toast.error(`Houve um erro ao tentar realizar o login, cheque suas credenciais !`); 
      return false;
    });

  };

  const signOut = () => {
    localStorage.removeItem('@laragramToken');
    localStorage.removeItem('@laragramUser');
    setUser(null);
  };

  const singned = async () => {
    setUser(localStorage.getItem('@laragramUser'));
    const ususario = await localStorage.getItem('@laragramUser');
    const token = await localStorage.getItem('@laragramToken');
    if(ususario && token)
      return true;
    return false;
  }

  return (
    <AuthContext.Provider value={{ user, signIn, signOut, singned, bearer }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook para acessar o contexto de autenticação
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};