import React from "react";
import "../ComponentesBento/Estilo.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export function SobreMi() {
  const [typeEffect] = useTypewriter({
    words: ["Freelancer Developer"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });
  return (
    <>
      <div className="ComponenteSobreMi">
        <div className="SobreMiInformacion">
          <div className="FechaCirculo">
            <h5>2024</h5>
            <div className="CirculoBlanco"></div>
          </div>
          <h1>
            <span style={{ color: "yellow" }}>Marcel</span> Zúniga
          </h1>
          <h2>
            {" "}
            <span>{typeEffect}</span>
            <span>
              <Cursor cursorColor="white" />
            </span>
          </h2>
          <p>
           <span style={{color:"yellow"}}> En búsqueda de oportunidades </span>para mejorar y crecer profesionalmente.
            Siempre estoy dispuesto a enfrentar nuevos desafíos.⚔️
          </p>
        </div>
      </div>
    </>
  );
}
