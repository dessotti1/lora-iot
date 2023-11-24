import { useNavigate } from 'react-router-dom'
import './Cabecalho.css'

const Cabecalho = (props) => {

    const navigate = useNavigate()

    const homeClicado = () => {
        navigate('/')
    }

    const twoOptionButtonClicado = () => {
        if (props.img === './imagens/login.svg'){
            navigate('login')
        }

        if (props.img === '/imagens/conta.svg' || props.img === './imagens/conta.svg'){
            navigate('conta')
        }
    }

    return(
        <header className="cabecalho">
            <img src="/imagens/graph2.svg" alt="Lupa"/>
            <img src="/imagens/settings.svg" alt="Lupa"/>
            <button onClick={homeClicado} className='botao'>
                <img src="/imagens/home.svg" alt="Lupa"/>
            </button>
            <img src="/imagens/lupa.svg" alt="Lupa"/>
            <button className="botao" onClick={twoOptionButtonClicado}>
                <img src={props.img} alt="Conta"/>
            </button>
        </header>
    );
}

export default Cabecalho