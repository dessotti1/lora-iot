import './CampoTexto.css'
import React, { useState } from 'react';

const CampoTexto = (props) => {

    const [valor, setValor] = useState('')

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
        console.log(valor)
    }

    return(
        <div className='campo-texto'>
            <label>{props.label}</label>
            <input placeholder={props.placeholder} onChange={aoDigitado}></input>
        </div>
    )
}

export default CampoTexto;