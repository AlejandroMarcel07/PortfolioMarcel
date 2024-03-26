import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../ComponentesBento/Estilo.css";
import { SiGmail } from "react-icons/si";

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
          <div className="ContenedorFormulario">
            <div className="FormularioIzquierdo">
              <div className="TituloFormulario">
                <h5>Envia un comentario</h5>
              </div>

              <div className="NombreFormulario">
                <input
                  className="ImputComentario"
                  type="text"
                  name="user_name"
                  placeholder="Ingresa tu nombre"
                />
              </div>
              <div className="MensajeFormulario">
                <textarea
                  className="ImputMensaje"
                  name="message"
                  placeholder="Ingresa un mensaje"
                />
              </div>
            </div>
            <div className="FormularioDerecho">

            
              <div className="ContenedorBtnSend">
                <input className="BtnSend" type="submit" value="Enviar" />
              </div>
              
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
