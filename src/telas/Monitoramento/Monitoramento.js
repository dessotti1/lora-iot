import React from 'react';
import Cabecalho from '../../componentes/Cabecalho/Cabecalho'
import Sensor from '../../componentes/Monitoramento/Sensor/Sensor';
import Dados from '../../componentes/Monitoramento/Dados/Dados';
import Mapa from '../../componentes/Monitoramento/Mapa/Mapa';
import './Monitoramento.css';

function Monitoramento () {

    let latitude = -22.008789 
    let longitude = -47.904553 
    let location = "(" + latitude.toFixed(2) +", " + longitude.toFixed(2) + ")";
  
    const dataAtual = new Date()
    const dataEspecifica = new Date(2023, 10, 1)
    const umDiaEmMilissegundos = 24 * 60 * 60 * 1000
    const diferencaEmMilissegundos = dataAtual - dataEspecifica;
    const diferencaEmDias = Math.floor(diferencaEmMilissegundos / umDiaEmMilissegundos);
  
    return (
      
      <div>
        <Cabecalho img="/imagens/conta.svg"/>
        <div className='total-content'>
          <div className='grid-item'>
            <Sensor text="W45N1B71" location={location} data={diferencaEmDias} ativo={true} />
          </div>
          <div className='grid-item'>
            <Mapa latitude={latitude} longitude={longitude}/>
          </div>
          <div className='grid-item'>
            <Dados dados="1420"/>
          </div>
          <div className='grid-item'>
              <img src="/imagens/grafico.png" alt='Grafico'/>
          </div>
        </div>
  
      </div>
    );
}


export default Monitoramento;