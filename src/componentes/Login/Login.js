import React, { useState } from 'react';
import CampoTexto from '../CampoTexto/CampoTexto';
import Botao from '../Botao/Botao';
import './Login.css';
import Cabecalho from '../Cabecalho/Cabecalho'
import { useNavigate  } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
const Login = ({ onLogin }) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();
    const handleLogin = () => {
        // Simulação de login bem-sucedido
        setLoggedIn(true);
        console.log("Login realizado com sucesso");
        navigate('/welcome');
      };
    
      
    return(
        <div> <Cabecalho img="./imagens/conta.svg"/>
        <div className="container">
        <Button variant="primary">Primary</Button>{' '}
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
                    <div className="login">
                        <button onClick={handleLogin} className="botao-login">Login</button>
                    </div>

                    <br></br>

                    <p>É seu primeiro acesso?</p>

                    <Botao text="Criar conta"/>

                </div>
            </div>
        </div>
        </div>
        
    );
}

export default Login