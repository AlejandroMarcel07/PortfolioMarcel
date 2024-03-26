import React from 'react'
import '../ComponentesBento/Estilo.css'
import Ico01 from '../assets/Ico01.png'
import Ico02 from '../assets/Ico02.png'
import Ico03 from '../assets/Ico03.png'
import Ico04 from '../assets/Ico04.png'
import Ico05 from '../assets/Ico05.png'
import Ico06 from '../assets/Ico06.png'
import Ico07 from '../assets/Ico07.png'

export function Tecnologias  ()  {
  return (
    <>
    <div className='ComponenteTecnologia'>
        <h5>Tecnologias que he <span style={{color:"#6B10EA"}}>aprendido</span></h5>
        <div className='ContenedorTecnologia'>
            <img src={Ico01} alt="" />
            <img src={Ico02} alt="" />
            <img src={Ico03} alt="" />
            <img src={Ico04} alt="" />
            <img src={Ico05} alt="" />
            <img src={Ico06} alt="" />
            <img src={Ico07} alt="" />
        </div>
    </div>  
    </>
  )
}
