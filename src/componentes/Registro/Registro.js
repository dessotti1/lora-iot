import './Registro.css'
import CampoTexto from '../CampoTexto/CampoTexto';
import Botao from '../Botao/Botao';

const Login = (props) => {
    return(
        <div className="container">
            <div className="content">
                <img src="/imagens/enchente3.jpg" className="left-image"/>
                <div class="text-block">
                    <h1>
                        Login
                    </h1>
                    
                    <CampoTexto label="Número de usuário" 
                    placeholder="Digite o número de usuário"
                    />

                    <CampoTexto label="Código de autenticação" 
                    placeholder="Digite o código de autenticação"
                    />
                    
                    <CampoTexto label="Senha" 
                    placeholder="Digite a senha"
                    />
                    
                    <CampoTexto label="Confirmação da senha" 
                    placeholder="Confirme a senha"
                    />

                    <Botao text="Confirmar"/>
                    <br></br>

                </div>
            </div>
        </div>
    );
}

export default Login