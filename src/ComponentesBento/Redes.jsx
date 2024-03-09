import React from 'react'
import '../ComponentesBento/Estilo.css'

import { Ancor01 } from './Ancor01';

import { FaLinkedin, FaInstagram  } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
const IcoInstagram = <FaInstagram style={{color: "black", fontSize:"20px"}}/>
const IcoGmail = <SiGmail style={{color: "black", fontSize:"20px"}}/>
const IcoLinkedin = <FaLinkedin style={{color: "black", fontSize:"20px"}}/>

export function Redes  ()  {
  return (
    <>
    <div className='ComponenteRedes'>
        <h5>¡Hagamos un buen trabajo <span style={{color:"blueViolet"}}>juntos!</span></h5>
        <p>Contactame:</p>
        <div className='ContendorIcoRedes'>
        <Ancor01 icoAncor={IcoInstagram}/>
        <Ancor01 icoAncor={IcoGmail}/>
        <Ancor01 icoAncor={IcoLinkedin}/>     
        </div>
    </div>
    </>
  )
}
