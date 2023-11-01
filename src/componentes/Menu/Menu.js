import './Menu.css'

const Menu = (props) => {
    return(
        <div>
            <div className="menu">
                <img src="/imagens/menu.png"/>
            </div>
            <div className="login">
                <button className="botao-login">{props.text}</button>
            </div>
        </div>
    );
}

export default Menu