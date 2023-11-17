import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import './App.css';
import Initial from './telas/Initial/Initial';
import Monitoramento from './telas/Monitoramento/Monitoramento';
import PosLogin from './telas/PosLogin/PosLogin';
import InitialNotLogged from './telas/InitialNotLogged/InitialNotLogged';
import Conta from './telas/Conta/Conta';
import { userLogged } from './telas/Initial/Initial'

// Tela de registro

// function App() {
//   return (
//     <div>
//       <Cabecalho img="./imagens/login.svg"/>
//       <Registro />
//     </div>
//   );
// }


function App () {

  var usuarios = [
    { nome: 'dessotti', senha: 'gabriel123'},
    { nome: 'user', senha: 'user'},
    { nome: 'felipe', senha: 'felipe123'}
  ];

  var usuarioEncontrado = usuarios.filter(function(usuario) {
    return usuario.nome === userLogged;
  });

  return (
    <Router>
      <Routes>
        <Route path='/' element={<InitialNotLogged/>}></Route>
        <Route path='/login' element={<Initial/>}></Route>
        <Route path='/login/posLogin' element={<PosLogin/>}></Route>
        <Route path='/login/posLogin/monitoramento' element={<Monitoramento/>}></Route>
        <Route path='/login/posLogin/conta' element={<Conta/>}></Route>
        <Route path='/login/posLogin/monitoramento/conta' element={<Conta user={usuarioEncontrado}/>}></Route>
      </Routes>
    </Router>

  );

  // colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)

}

export default App;
