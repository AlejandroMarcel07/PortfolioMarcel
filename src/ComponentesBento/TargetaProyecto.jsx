import React from 'react'
import '../ComponentesBento/Estilo.css'
import { Ancor02 } from './Ancor02'

export function TargetaProyecto  ({ImgCard, TituloCard, IcoCard01, IcoCard02} )  {
  return (
    <>
    <div className='ContendorCardProyecto'>
        <img src={ImgCard} alt="" />
        <h5>{TituloCard}</h5>
          <div className='CapaSombra'>
    
        <div className='ContenedorIcoLink'>

            <Ancor02 IcoAncor={IcoCard01}/>
            <Ancor02 IcoAncor={IcoCard02}/>
        </div>
        </div>
    </div>
    </>
  )
}
