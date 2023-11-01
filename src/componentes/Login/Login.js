import './Login.css'
import CampoTexto from '../CampoTexto/CampoTexto';
import Botao from '../Botao/Botao';

const Login = (props) => {
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

                    <Botao text="Logar"/>
                    <br></br>

                    <p>É seu primeiro acesso?</p>

                    <Botao text="Criar conta"/>

                </div>
            </div>
        </div>
    );
}

export default Login