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

function App() {
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
}


export default App;
