import React from 'react'
import '../ComponentesBento/Estilo.css'


export function TituloProyectos  ({AncorOrMensaje, Encabezado}) {
  return (
    <>
    <div className='ComponenteTituloProyectos'>
        <h5>{Encabezado}</h5>
        {AncorOrMensaje}
    </div>
    </>
  )
}
