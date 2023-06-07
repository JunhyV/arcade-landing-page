import React from "react";
import data from "../../utils/tienda.json";

const TiendaPrincipal = () => {
  const tienda = data;
  return (
    <div>
      <div className="contenido">
        {tienda.map(({ img, nombre }) => (
            <img src={img} alt="imagen" key={nombre} width={300}/>
        ))}
      </div>
    </div>
  );
};

export default TiendaPrincipal;
