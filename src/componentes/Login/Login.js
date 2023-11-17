import React, { useState } from 'react';
import CampoTexto from '../CampoTexto/CampoTexto';
import Botao from '../Botao/Botao';
import './Login.css';

const Login = (props) => {

    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')

    const aoSalvar = (evento) => {
        console.log('clicou')
        evento.preventDefault()
        props.aoUserCadastrado({
            nome: nome,
            senha: senha,
        })
    }

    return(
        <div className="container">
            <div className="content">
                <img src="/imagens/enchente2.jpg" className="left-image" alt='somevalue'/>
                <div className="text-block">
                    <form onSubmit={aoSalvar}>
                        <h1>
                            Login
                        </h1>
                        
                        <CampoTexto label="Número de usuário" 
                        placeholder="Digite o número de usuário"
                        valor={nome}
                        aoAlterado={valor => setNome(valor)}
                        />

                        <CampoTexto label="Senha" 
                        placeholder="Digite a senha"
                        valor={senha}
                        aoAlterado={valor => setSenha(valor)}
                        />
                        <Botao text="Logar"/>
                        <br></br>
                    </form>

                    <p>É seu primeiro acesso?</p>

                    <Botao text="Criar conta"/>

                </div>
            </div>
        </div>
    );
}

export default Login