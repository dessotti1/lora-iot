import React, { useState, useEffect } from 'react';
import CampoTexto from '../CampoTexto/CampoTexto';
import Botao from '../Botao/Botao';
import './Login.css';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const Login = ({ onLogin }) => {
    const [previousPath, setPreviousPath] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        setPreviousPath(location.state?.from || '/welcome');
    }, [location]);

    // const handleLogin = () => {
    //     // Simulação de login bem-sucedido
    //     console.log("Login realizado com sucesso");
    //     navigate(previousPath);
    // };
    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:5001/api/login', {
                username: 'username_value',
                password: 'password_value'
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"

                }
            });
            console.log(response.status);
            if (response.status === 200) {
                console.log("Login realizado com sucesso");
                navigate(previousPath);
            } else {
                console.log("Login falhou");
            }
        } catch (error) {
            console.error("Erro ao fazer login", error);
        }
    };
    
      
    return(
        <div> 
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
                    <div className="login">
                         <button onClick={handleLogin}>Login</button>
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