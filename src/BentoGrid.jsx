import React from "react";
import "../src/BentoGrid.css";
import { Menu } from "./ComponentesBento/Menu";
import { SobreMi } from "./ComponentesBento/SobreMi";
import { EmojiAvatar } from "./ComponentesBento/EmojiAvatar";
import { Redes } from "./ComponentesBento/Redes";
import { Tecnologias } from "./ComponentesBento/Tecnologias";
import { TituloProyectos } from "./ComponentesBento/TituloProyectos";
import { TargetaProyecto } from "./ComponentesBento/TargetaProyecto";
import { FaGithub } from "react-icons/fa";
import { MdOutlineWeb } from "react-icons/md";
const IcoGithub = <FaGithub style={{ color: "white", fontSize: "15px" }} />;
const IcoWeb = <MdOutlineWeb style={{ color: "white", fontSize: "15px" }} />;

import { Ancor02 } from "./ComponentesBento/Ancor02";
const IcoGithub02 = (
  <FaGithub style={{ marginRight: "7px", color: "white", fontSize: "20px" }} />
);
const AncorGithub = (
  <Ancor02 IcoAncor={IcoGithub02} Nombre={"Visita mi Github"} />
);
const TituloMensaje = (
  <p className="BienvenidoMenu">Lo que no sabias de mi 🤔</p>
);

import IMGCARD1 from "./assets/IMGCARD01.png";
import IMGCARD2 from "./assets/IMGCARD02.png";
import IMGCARD3 from "./assets/IMGCARD03.png";
import IMGCARD4 from "./assets/IMGCARD04.png";
import IMG001 from './assets/AVATAR-03.png'
import IMG002 from './assets/AVATAR-04-ALTA.png'
import IMG003 from './assets/AVATAR-04-MEDIA.png'

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
          <EmojiAvatar ImgEmoji={IMG001}  shadowColor='0, 0, 0, 0.349' />
        </div>
        <div className="COMP05 Justifica-centro border-radius">
          <Tecnologias />
        </div>
        <div className="COMP06 Justifica-centro border-radius">
          <TituloProyectos
            AncorOrMensaje={AncorGithub}
            Encabezado={"| Apartado de proyectos"}
          />
        </div>
        <div className="COMP07 Justifica-centro border-radius">
          <TargetaProyecto
            ImgCard={IMGCARD1}
            TituloCard={"Calculadora"}
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
            ImgCard={IMGCARD4}
            TituloCard={"Portfolio"}
            IcoCard01={IcoGithub}
            IcoCard02={IcoWeb}
          />
        </div>
        <div className="COMP11 Justifica-centro border-radius">
          <TituloProyectos
            AncorOrMensaje={TituloMensaje}
            Encabezado={"| Conoce al desarrollador"}
          />
        </div>
        <div className="COMP12 Justifica-centro border-radius">
        <EmojiAvatar ImgEmoji={IMG003} shadowColor='255, 255, 255, 0.9'/>
        </div>
        <div className="COMP13 Justifica-centro border-radius">13</div>
        <div className="COMP14 Justifica-centro border-radius">14</div>
        <div className="COMP15 Justifica-centro border-radius">15</div>
         <div className="COMP16 Justifica-centro border-radius">16</div>
        <div className="COMP17 Justifica-centro border-radius">17</div>
        <div className="COMP18 Justifica-centro border-radius">18</div>
        <div className="COMP19 Justifica-centro border-radius">19</div> 
      </div>
    </>
  );
}
