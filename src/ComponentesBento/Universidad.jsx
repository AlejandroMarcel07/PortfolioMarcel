import React from 'react'
import '../ComponentesBento/Estilo.css'
import IMGBANNER from '../assets/IMG-BANER.jpg'
import { GiSpellBook } from "react-icons/gi";
export function Universidad  () {
      
  return (
    <>
    <div className='ComponenteUniversidad'>
    <GiSpellBook className='FiguraLibro' style={{color:"6B10EA"}}/>
    <h5>Unan Managua</h5>
    <p>Ing en Sistemas | 2do</p>
    </div>
    </>
  )
}
