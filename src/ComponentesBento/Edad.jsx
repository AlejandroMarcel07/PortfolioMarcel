import React from 'react'
import '../ComponentesBento/Estilo.css'

export function Edad ({Año, diaYMes, figura}) {
  return (
    <>
    <div className='ComponenteEdad'>
      <div className='ContenedorInformacionEdad'>
          <h5>{Año}</h5>
          <p>{diaYMes}</p>
      </div>
      {figura}
    </div>
    </>
  )
}
