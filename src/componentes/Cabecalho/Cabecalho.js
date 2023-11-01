import './Cabecalho.css'

const Cabecalho = (props) => {
    return(
        <header className="cabecalho">
            <img src="/imagens/graph2.svg" alt="Lupa"/>
            <img src="/imagens/settings.svg" alt="Lupa"/>
            <img src="/imagens/home.svg" alt="Lupa"/>
            <img src="/imagens/lupa.svg" alt="Lupa"/>
            <button className="item-login">
                <img src={props.img} alt="Conta"/>
            </button>
        </header>
    );
}

export default Cabecalho