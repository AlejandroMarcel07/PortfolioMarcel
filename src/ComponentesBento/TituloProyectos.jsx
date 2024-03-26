import React from 'react'
import '../ComponentesBento/Estilo.css'
import { IoArrowDownCircleOutline } from "react-icons/io5";


export function TituloProyectos  ({AncorOrMensaje, Encabezado}) {
  return (
    <>
    <div className='ComponenteTituloProyectos'>
        <h5>{Encabezado}<span style={{marginLeft:"20px", color:"blueviolet"}}>↓</span></h5>
        {AncorOrMensaje}
    </div>
    </>
  )
}
