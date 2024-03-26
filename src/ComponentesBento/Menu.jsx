import React from 'react'
import '../ComponentesBento/Estilo.css'
import { RiMoonClearFill } from "react-icons/ri";
import { Button } from './Button';
const IcoLuna =  <RiMoonClearFill style={{ marginRight:"10px", color: "white", fontSize: "20px" }} />;
import { FaGithub } from "react-icons/fa";
const IcoGithub02 = (
  <FaGithub style={{ marginRight: "7px", color: "white", fontSize: "20px" }} />
);
import { Ancor02 } from "../ComponentesBento/Ancor02";



export function Menu () {
  return (
    <>
    <div className='ComponenteMenu'>
      <Ancor02 IcoAncor={IcoGithub02} Nombre={"Visita mi Github"} />
       <p className='BienvenidoMenu'>Hoy es 8 de marzo</p>
    </div>
    </>
  )
}
