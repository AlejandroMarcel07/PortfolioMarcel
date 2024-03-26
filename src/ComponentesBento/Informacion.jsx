import React from "react";
import "../ComponentesBento/Estilo.css";

export function Informacion({ContenidoTitulo, ContenidoParrafo}) {
  return (
    <>
      <div className="ComponenteInformacion">
        {ContenidoTitulo}
        <p>
        {ContenidoParrafo}
        </p>
      </div>
    </>
  );
}
