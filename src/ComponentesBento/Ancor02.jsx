import React from 'react'
import '../ComponentesBento/Estilo.css'
export function Ancor02  ({ulrLink, IcoAncor, Nombre})  {
  return (
   <a className='BtnAncor02' href={ulrLink}>
    {IcoAncor}
    {Nombre}
   </a>
  )
}
