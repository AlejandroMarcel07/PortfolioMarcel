import React from 'react'
import '../ComponentesBento/Estilo.css'

export function Button  ({LinkICo, NombreButton}) {
  return (
    <button className='btnMenu'>
        {LinkICo}
        {NombreButton}
    </button>
  )
}

