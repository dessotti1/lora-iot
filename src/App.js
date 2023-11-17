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

function App() {
  return (
    <div className='login'>
      <Cabecalho img="./imagens/login.svg"/>
      <Login className='log'/>
    </div>
  );
}

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
  return <h2>!</h2>;
};


// function App() {
//   const [authenticated, setAuthenticated] = useState(false);

//   const handleLogin = () => {
//     setAuthenticated(true);
//   };

//   let latitude = -22.008789 
//   let longitude = -47.904553 
//   let location = "(" + latitude.toFixed(2) +", " + longitude.toFixed(2) + ")";

//   const dataAtual = new Date()
//   const dataEspecifica = new Date(2023, 10, 1)
//   const umDiaEmMilissegundos = 24 * 60 * 60 * 1000
//   const diferencaEmMilissegundos = dataAtual - dataEspecifica;
//   const diferencaEmDias = Math.floor(diferencaEmMilissegundos / umDiaEmMilissegundos);

//   return (
    
//     <div>
//       <Cabecalho img="./imagens/conta.svg"/>
//       <div className='total-content'>
//         <div className='grid-item'>
//           <Sensor text="W45N1B71" location={location} data={diferencaEmDias} ativo={true} />
//         </div>
//         <div className='grid-item'>
//           <h1></h1>
//           <Mapa latitude={latitude} longitude={longitude}/>
//         </div>
//         <div className='grid-item'>
//           <Dados dados="1420"/>
//         </div>
//         <div className='grid-item'>
//             <img src="/imagens/grafico.png"/>
//         </div>
//       </div>

//       {/* <Router>
//         <div>
//           <Routes>
//             <Route path="/login" element={<Login onLogin={handleLogin} />} />
//             <Route
//               path="/home"
//               element={
//                 authenticated ? <Home /> : <Navigate to="/login" replace />
//               }
//             />
//             <Route path="/welcome" element={<Welcome />} />
//             <Route path="*" element={<Navigate to="/login" replace />} />
//           </Routes>
//         </div>
//       </Router> */}

//     </div>
//   );
// }


export default App;
