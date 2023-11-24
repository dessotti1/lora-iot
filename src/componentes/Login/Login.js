import React, { useState, useEffect } from "react";
import Alerts from "../Alert/Alerts";
import Botao from "../Botao/Botao";
import "./Login.css";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const Login = ({ onLogin }) => {
  const [previousPath, setPreviousPath] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  useEffect(() => {
    setPreviousPath(location.state?.from || "/welcome");
  }, [location]);


  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      console.log(username);
      console.log(password);
      if (!username || !password) {
        window.alert('Por favor, preencha todos os campos.');
        return;
      }
      const response = await axios.post(
        "http://localhost:5001/api/login",
        {
          username: username,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          },
        }
      );
      console.log(response.status);
      if (response.status === 200) {
        console.log("Login realizado com sucesso");
        navigate(previousPath);
      } 
      else {
        console.log("Login falhou");
        window.alert('An error occurred while logging in.');
      }
    } catch (error) {
       if (error.response.status === 401){
            window.alert('Usuário ou senha incorretos.');
          }
      console.error("Erro ao fazer login", error);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="content">
          <img src="/imagens/enchente2.jpg" className="left-image" />
          <div class="text-block">
            <h1>Login</h1>

            <div className="campo-texto">
              <label>Número de usuário</label>
              <input
                placeholder="Digite o número de usuário"
                type="text"
                value={username}
                onChange={handleUsernameChange}
                required
              ></input>
            </div>
            <div className="campo-texto">
              <label>Senha</label>
              <input
                placeholder="Digite a senha"
                type="password"
                value={password}
                required
                onChange={handlePasswordChange}
              ></input>
            </div>

            <div className="login">
              <button className="botao-login" type="submit" onClick={handleLogin}>
                Login
              </button>
            </div>

            <br></br>

            <p>É seu primeiro acesso?</p>

            <Botao text="Criar conta" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
