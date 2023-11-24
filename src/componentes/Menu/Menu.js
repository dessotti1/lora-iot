import { useState } from 'react'
import './Menu.css'

const Menu = (props) => {

    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')

    const aoClicado = (evento) => {
        console.log('clicou')
        evento.preventDefault()
        props.aoUserCadastrado({
            nome: nome,
            senha: senha,
        })
    }

    return(
        <div>
            <div className="menu">
                <img src="/imagens/menu.png"/>
            </div>
            <div className="login">
                <button className="botao-login" onClick={aoClicado}>{props.text}</button>
            </div>
        </div>
    );
}

export default Menu