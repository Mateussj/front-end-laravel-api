import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RoutesApp from './routes';
import { AuthProvider } from './contexts/auth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

function App() {
  return (
    <AuthProvider>
        <ToastContainer />
        <BrowserRouter>
            <RoutesApp />
        </BrowserRouter>
    </AuthProvider>
    
  );
}

export default App;
