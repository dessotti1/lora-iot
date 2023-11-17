import React from 'react';
import { useState } from 'react';
import Cabecalho from '../../componentes/Cabecalho/Cabecalho'
import Login from '../../componentes/Login/Login'
import { useNavigate  } from 'react-router-dom';
import './Initial.css'

export const userLogged = ''

function Initial() {

    function check(entradaUsuario, entradaSenha) {

      var usuarios = [
        { usuario: 'dessotti', senha: 'gabriel123'},
        { usuario: 'user', senha: 'user'},
        { usuario: 'felipe', senha: 'felipe123'}
      ];
    
      for (var i = 0; i < usuarios.length; i++) {
        if (
          entradaUsuario === usuarios[i].usuario &&
          entradaSenha === usuarios[i].senha
        ) {
          return true;
        }
      }
    
      return false;
    }

    const navigate = useNavigate()
  
    const [users, setUsers] = useState([])
    
    const aoNovoUserAdicionado = (user) => {
      console.log(user)
      setUsers([...users, user])
    }
  
    if (users.length){

      const last_user = users[users.length - 1]

      if (check(last_user.nome, last_user.senha)){
        navigate('posLogin')
      }

      else {
        navigate('/')
      }

    }
  
    return (
      <div className='login'>
        <Cabecalho img="./imagens/login.svg"/>
        <Login className='log' aoUserCadastrado={user => aoNovoUserAdicionado(user)}/>
      </div>
    );
}

export default Initial;
