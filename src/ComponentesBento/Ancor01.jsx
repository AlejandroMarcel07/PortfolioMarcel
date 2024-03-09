import React from 'react'
import '../ComponentesBento/Estilo.css'

export function Ancor01 ({ulrlink, icoAncor}) {
  return (
    <>
    <a className='BtnAncor01' href={ulrlink}>
      {icoAncor}
    </a>
    </>
  )
}
