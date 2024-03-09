import React from 'react'
import '../ComponentesBento/Estilo.css'
import { RiMoonClearFill } from "react-icons/ri";
import { Button } from './Button';
const IcoLuna =  <RiMoonClearFill style={{ marginRight:"10px", color: "white", fontSize: "20px" }} />;



export function Menu () {
  return (
    <>
    <div className='ComponenteMenu'>
       <Button LinkICo={IcoLuna} NombreButton={"Modo oscuro"}/>
       <p className='BienvenidoMenu'>Bienvenido</p>
    </div>
    </>
  )
}
