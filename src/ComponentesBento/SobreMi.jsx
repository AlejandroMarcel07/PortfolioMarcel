import React from "react";
import "../ComponentesBento/Estilo.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export function SobreMi() {
  const [typeEffect] = useTypewriter({
    words: [ "front-end"],
    loop: {},
    typeSpeed: 200,
    deleteSpeed: 60,
  });

  const spanStyle = {
    textShadow: '2px 2px 2px black', // offsetX offsetY blurRadius color
    color: "white",
  };
  
  return (
    <>
      <div className="ComponenteSobreMi">
        <div className="SobreMiInformacion">
          <div className="FechaCirculo">
            <h5>2024</h5>
            <div className="CirculoBlanco"></div>
          </div>
          <h1>
           
            <span style={spanStyle} >¡Hola!</span>

            <span style={{ color: "white" }}>  Yo soy Marcel</span>
          </h1>

          <h2>
          Desarrollador{" "}
            <span style={{ color: "rgb(236, 234, 234)" }}>{typeEffect}</span>
            <span>
              <Cursor cursorColor="white" />
            </span>
          </h2>
          <p>
            Apasionando por el mundo de la tecnologia y en busca de oportunidades.
        
          </p>
        </div>
      </div>
    </>
  );
}
