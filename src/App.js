import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Link,
} from 'react-router-dom';
import './App.css';
import Cabecalho from './componentes/Cabecalho/Cabecalho'
import Imagem from './componentes/Imagem/Imagem'
import Menu from './componentes/Menu/Menu'
import Login from './componentes/Login/Login'
import Registro from './componentes/Registro/Registro'
import Sensor from './componentes/Monitoramento/Sensor/Sensor';
import Dados from './componentes/Monitoramento/Dados/Dados';
import Mapa from './componentes/Monitoramento/Mapa/Mapa';

//Página Inicial não logado

// function App() {
//   return (
//     <div>
//       <Cabecalho img="./imagens/login.svg"/>
//       <Imagem />
//       <Menu text="Realizar login"/>
//     </div>
//   );
// }

//Tela de login

// function App() {
//   return (
//     <div>
//       <Cabecalho img="./imagens/login.svg"/>
//       <Login />
//     </div>
//   );
// }

// Tela de registro

// function App() {
//   return (
//     <div>
//       <Cabecalho img="./imagens/login.svg"/>
//       <Registro />
//     </div>
//   );
// }

//Página Inicial

// function App() {
//   return (
//     <div>
//       <Cabecalho img="./imagens/conta.svg"/>
//       <Imagem />
//       <Menu text="Selecionar sensor"/>
//     </div>
//   );
// }

// Componente de Página Inicial
const Home = () => {
  return <h2>Home Page - Bem-vindo!</h2>;
};

// Componente de Boas-Vindas
const Welcome = () => {
  return (
    <div>
      <Cabecalho img="./imagens/conta.svg"/>
      <div className='total-content'>
        <div className='grid-item'>
          <Sensor text="W45N1B71" location="(-45.78, 75.67)" data="5" ativo={true} />
        </div>
        <div className='grid-item'>
          <Mapa />
        </div>
        <div className='grid-item'>
          <Dados dados="5"/>
        </div>
      </div>
    </div>
  );
};


function App() {
  const [authenticated, setAuthenticated] = useState(false);

  const handleLogin = () => {
    setAuthenticated(true);
  };
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route
            path="/home"
            element={
              authenticated ? <Home /> : <Navigate to="/login" replace />
            }
          />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
