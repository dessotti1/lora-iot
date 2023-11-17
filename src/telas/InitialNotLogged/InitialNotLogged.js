import { useNavigate } from "react-router-dom";
import Cabecalho from "../../componentes/Cabecalho/Cabecalho";
import Imagem from "../../componentes/Imagem/Imagem";
import Menu from "../../componentes/Menu/Menu";
import { useState } from "react";

function InitialNotLogged() {

    const navigate = useNavigate()
    const [users, setUsers] = useState([])
    
    const aoNovoUserAdicionado = (user) => {
      console.log(user)
      setUsers([...users, user])
    }

    if (users.length){
        navigate('login')
    }

    return (
        <div>
        <Cabecalho img="./imagens/login.svg"/>
        <Imagem />
        <Menu text="Realizar login" aoUserCadastrado={user => aoNovoUserAdicionado(user)}/>
        </div>
    );
}

export default InitialNotLogged