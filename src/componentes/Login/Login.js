import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import CampoTexto from '../CampoTexto/CampoTexto';
import Botao from '../Botao/Botao';
import './Login.css';


const Login = ({ onLogin }) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const handleLogin = () => {
        // Simulação de login bem-sucedido
        setLoggedIn(true);
        onLogin();
      };
    
      if (loggedIn) {
        return <Navigate to="/home" />;
      }

    return(
        <div className="container">
            <div className="content">
                <img src="/imagens/enchente2.jpg" className="left-image"/>
                <div class="text-block">
                    <h1>
                        Login
                    </h1>
                    
                    <CampoTexto label="Número de usuário" 
                    placeholder="Digite o número de usuário"
                    />

                    <CampoTexto label="Senha" 
                    placeholder="Digite a senha"
                    />

                    <Botao onClick={handleLogin} text="Logar"/>
                    <br></br>

                    <p>É seu primeiro acesso?</p>

                    <Botao text="Criar conta"/>

                </div>
            </div>
        </div>
    );
}

export default Login