import React, { useState } from "react";
import opciones from "../assets/svgs/opciones.svg";
import cerrar from "../assets/svgs/equis.svg";
import Enlaces from "./Enlaces";
import { Link } from "react-router-dom";

const Navegacion = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [desplegarOpciones, setDesplegarOpciones] = useState(false);

  //Obtener tamaño de pantalla
  window.addEventListener("resize", () => setWindowWidth(innerWidth));

  return (
    <nav className="navegacion centrar">
      <Link to="/" className="navegacion__logo centrar">
          <img src='https://drive.google.com/uc?export=view&id=1Ei3fLUHDefe_h2ZyIvf-BI2yWM7uLrEo' alt="logo" />
      </Link>

      {windowWidth <= 767 ? (
        <div className="navegacion__opciones">
          <img
            src={opciones}
            alt="opciones"
            onClick={() => setDesplegarOpciones(!desplegarOpciones)}
          />
        </div>
      ) : (
        <Enlaces setDesplegarOpciones={setDesplegarOpciones}/>
      )}

      {desplegarOpciones ? (
        <div className="navegacion__opciones--ocultas">
          <img
            className="opciones__cerrar"
            src={cerrar}
            alt="cerrar"
            onClick={() => setDesplegarOpciones(false)}
          />
          <Enlaces setDesplegarOpciones={setDesplegarOpciones}/>
          <img src="https://drive.google.com/uc?export=view&id=1Ei3fLUHDefe_h2ZyIvf-BI2yWM7uLrEo" alt="logo" width={300} />
        </div>
      ) : null}
    </nav>
  );
};

export default Navegacion;
