import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  
} from 'react-router-dom';

import './App.css';
import Sensor from './componentes/Monitoramento/Sensor/Sensor';
import Dados from './componentes/Monitoramento/Dados/Dados';
import Mapa from './componentes/Monitoramento/Mapa/Mapa';
import Initial from './telas/Initial/Initial';
import Monitoramento from './telas/Monitoramento/Monitoramento';
import PosLogin from './telas/PosLogin/PosLogin';
import InitialNotLogged from './telas/InitialNotLogged/InitialNotLogged';
import Conta from './telas/Conta/Conta';
import { userLogged } from './telas/Initial/Initial'
import  Cadastro from './telas/Cadastro/Cadastro';



function App () {

  var usuarios = [
    { nome: 'dessotti', senha: 'gabriel123'},
    { nome: 'user', senha: 'user'},
    { nome: 'felipe', senha: 'felipe123'}
  ];

  // const [authenticated, setAuthenticated] = useState(false);

  // const handleLogin = () => {
  //   setAuthenticated(true);
  // };

  // return (
  //   <Router> 
  //     <div>
  //       <Routes>
  //         <Route path="/login" element={<Login onLogin={handleLogin} />} />
  //         <Route
  //           path="/home"
  //           element={
  //             authenticated ? <Home /> : <Navigate to="/login" replace />
  //           }
  //         />
  //         <Route path="/sensores" element={<Sensores />} />

  //         <Route path="/welcome" element={<Welcome />} />
  //         <Route path="*" element={<Navigate to="/login" replace />} />
  //       </Routes>
  //     </div>
  //   </Router>
  var usuarioEncontrado = usuarios.filter(function(usuario) {
    return usuario.nome === userLogged;
  });

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Cadastro/>}></Route>
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
