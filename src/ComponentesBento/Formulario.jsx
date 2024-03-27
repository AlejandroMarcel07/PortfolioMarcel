import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../ComponentesBento/Estilo.css";

import { BsFillSendFill } from "react-icons/bs";
const IcoSend = 
<BsFillSendFill style={{fontSize:"20px"}}/>
;

export function Formulario() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Verifica si los campos de nombre y mensaje están vacíos
    if (
      form.current.user_name.value.trim() === "" ||
      form.current.message.value.trim() === ""
    ) {
      console.log("Por favor, completa todos los campos.");
      return; // Evita enviar el correo si algún campo está vacío
    }

    emailjs
      .sendForm("service_oxuqa5a", "template_ke12e27", form.current, {
        publicKey: "S_lKrkyrMZPblJxkm",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset(); // Resetea los campos del formulario después de enviarlo
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <div className="ComponenteFormulario">
        <form ref={form} onSubmit={sendEmail}>
          <div className="ContenedorIzquierdo">

          <h5>¡Tu opinión es importante! </h5>
          <input
            className="ImputComentario"
            type="text"
            name="user_name"
            placeholder="Ingresa tu nombre"
          />
          <textarea
            className="ImputMensaje"
            name="message"
            placeholder="Ingresa un mensaje"
          />
          
          </div>
          <div className="ContenedorDerecho">
            <div className="ContenedorHora">
                <h5>
                  8:24 PM
                </h5>
                <p>
                 Hoy es martes 26 de Marzo
                </p>
            </div>
            
          <button className="BtnSend" type="submit" >
            Enviar mensaje
            {IcoSend}
          </button>
          </div>
        </form>
      </div>
    </>
  );
}
