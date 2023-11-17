import { useNavigate } from 'react-router-dom';
import Cabecalho from '../../componentes/Cabecalho/Cabecalho';
import Imagem from '../../componentes/Imagem/Imagem';
import Menu from '../../componentes/Menu/Menu';
import './PosLogin.css'
import { useState } from 'react';

function PosLogin() {

    const navigate = useNavigate()
    const [users, setUsers] = useState([])
    
    const aoNovoUserAdicionado = (user) => {
      console.log(user)
      setUsers([...users, user])
    }

    if (users.length){
        navigate('monitoramento')
    }

    return (
        <div>
        <Cabecalho img="/imagens/conta.svg"/>
        <Imagem />
        <Menu text="Selecionar sensor" aoUserCadastrado={user => aoNovoUserAdicionado(user)}/>
        </div>
    );
}

export default PosLogin