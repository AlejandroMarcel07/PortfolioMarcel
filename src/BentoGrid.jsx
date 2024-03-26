import React from "react";
import "../src/BentoGrid.css";
import { Menu } from "./ComponentesBento/Menu";
import { SobreMi } from "./ComponentesBento/SobreMi";
import { EmojiAvatar } from "./ComponentesBento/EmojiAvatar";
import { Redes } from "./ComponentesBento/Redes";
import { Tecnologias } from "./ComponentesBento/Tecnologias";
import { TituloProyectos } from "./ComponentesBento/TituloProyectos";
import { TargetaProyecto } from "./ComponentesBento/TargetaProyecto";
import { Formulario } from "./ComponentesBento/Formulario";
import { FaGithub } from "react-icons/fa";
import { MdOutlineWeb } from "react-icons/md";
import { EmojiAvatar2 } from "./ComponentesBento/EmojiAvatar2";
import { FaCakeCandles } from "react-icons/fa6";
import { MdPlace } from "react-icons/md";
import { Informacion } from "./ComponentesBento/Informacion";
import { Edad } from "./ComponentesBento/Edad";
import { Universidad } from "./ComponentesBento/Universidad";
const IcoGithub = <FaGithub style={{ color: "white", fontSize: "15px" }} />;
const IcoWeb = <MdOutlineWeb style={{ color: "white", fontSize: "15px" }} />;
const FiguraPastel = <FaCakeCandles style={{color:"#9553f1", fontSize:"45px", marginTop:"5px"}} />
const FiguraPlace = <MdPlace style={{color:"#9553f1", fontSize:"45px", marginTop:"5px"}} />


import { Ancor02 } from "./ComponentesBento/Ancor02";
const IcoGithub02 = (
  <FaGithub style={{ marginRight: "7px", color: "white", fontSize: "20px" }} />
);
const AncorGithub = (
  <Ancor02 IcoAncor={IcoGithub02} Nombre={"Visita mi Github"} />
);
const TituloMensaje = (
  <p
    className="BienvenidoMenu"
    style={{ backgroundColor: "#6B10EA", borderRadius: "" }}
  >
    Lo que no sabias de mi 🤔
  </p>
);

const ContenidoTitulo01 = (
  <h5>
    Pasatiempo <span style={{ color: "black" }}>favorito </span>✨
  </h5>
);

const ContenidoTitulo02 = (
  <h5>
   Objetivo 🎯
  </h5>
);

    // background-image:"linear-gradient(to right, green, #242020)",
    // --webkit-background-clip: "text", 
    // background-clip:"text",
    // color: "transparent" 

const ContenidoTitulo03 = (
  <h5 style={{
      backgroundImage:"linear-gradient(to right, green, #242020)",
      WebkitBackgroundClip:"text",
      backgroundClip:"text",
      color:"transparent"
  }}>
    Universidad Unan Managua
  </h5>
);

import IMGCARD1 from "./assets/IMGCARD01.png";
import IMGCARD2 from "./assets/IMGCARD02.png";
import IMGCARD3 from "./assets/IMGCARD03.png";
import IMGCARD4 from "./assets/IMGCARD04.png";
import IMG001 from "./assets/AVATAR-03.png";
import IMG002 from "./assets/AVATAR-05-ALTA.png";
import IMG003 from "./assets/AVATAR-04-MEDIA.png";

export function BentoGrid() {
  return (
    <>
      <div className="ComponenteBentoGrid">
        <div className="COMP01 Justifica-centro border-radius">
          <Menu />
        </div>
        <div className="COMP02 Justifica-centro border-radius">
          <SobreMi />
        </div>
        <div className="COMP03 Justifica-centro border-radius">
          <Redes />
        </div>
        <div className="COMP04 Justifica-centro border-radius">
          <EmojiAvatar ImgEmoji={IMG001} shadowColor="0, 0, 0, 0.349" />
        </div>
        <div className="COMP05 Justifica-centro border-radius">
          <Tecnologias />
        </div>
        <div className="COMP06 Justifica-centro border-radius">
          <TituloProyectos Encabezado={"Apartado de proyectos"} />
        </div>
        <div className="COMP07 Justifica-centro border-radius">
          <TargetaProyecto
            ImgCard={IMGCARD3}
            TituloCard={"Nizami"}
            IcoCard01={IcoGithub}
            IcoCard02={IcoWeb}
          />
        </div>
        <div className="COMP08 Justifica-centro border-radius">
          <TargetaProyecto
            ImgCard={IMGCARD2}
            TituloCard={"Clima"}
            IcoCard01={IcoGithub}
            IcoCard02={IcoWeb}
          />
        </div>
        <div className="COMP09 Justifica-centro border-radius">
          <TargetaProyecto
            ImgCard={IMGCARD3}
            TituloCard={"Nizami"}
            IcoCard01={IcoGithub}
            IcoCard02={IcoWeb}
          />
        </div>
        <div className="COMP10 Justifica-centro border-radius">
          <TargetaProyecto
            ImgCard={IMGCARD2}
            TituloCard={"Clima"}
            IcoCard01={IcoGithub}
            IcoCard02={IcoWeb}
          />
        </div>
        <div className="COMP11 Justifica-centro border-radius">
          <TituloProyectos
            AncorOrMensaje={TituloMensaje}
            Encabezado={"Conoce al desarrollador"}
          />
        </div>




        <div className="COMP12 Justifica-centro border-radius">
          <EmojiAvatar2 />
        </div>
        <div className="COMP19 Justifica-centro border-radius">
          <Universidad/>
        </div>
        <div className="COMP20 Justifica-centro border-radius">
        
        </div>
        <div className="COMP13 Justifica-centro border-radius">
          <Formulario/>
        </div>
        <div className="COMP14 Justifica-centro border-radius">
          <Informacion
            ContenidoTitulo={ContenidoTitulo01}
            ContenidoParrafo={
              " La creacion de nuevos diseños y codificacion de ellos es algo que me encanta elaborar"
            }
          />
        </div>
        <div className="COMP15 Justifica-centro border-radius">
          <Informacion ContenidoTitulo={ContenidoTitulo02}
          ContenidoParrafo={
            "Dando vida a ideas que impactan positivamente en la web y en las personas de todo el mundo."
          }/> 
        </div>
        <div className="COMP16 Justifica-centro border-radius">
        <Edad Año={"2005"} diaYMes={"7 de enero"} figura={FiguraPastel}/>
        </div>
        <div className="COMP17 Justifica-centro border-radius">
           <Edad Año={"Masaya"} diaYMes={"Nicaragua"} figura={FiguraPlace}/> 
        </div>
      </div>
    </>
  );
}
