import React from "react";

const Principal = () => {
  return (
    <div className="principal ">
      <div className="principal__slider-container">
        <h1>Bienvenidos a Arcade Colima</h1>
        <p>Slider</p>
      </div>

      <div className="principal__contenido">
        <h2> NOVEDADES</h2>
        <div className="principal__novedades">ultimos 3 productos</div>
        <div className="principal__productos">
          <h3>Otros productos</h3>
          <div className="principal__mas-productos">
            <div className="principal__juegos">
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
              <div>ver mas</div>
            </div>
            <div className="principal__ropa">
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
              <div>ver mas</div>
            </div>
            <div className="principal__accesorios">
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
              <div>ver mas</div>
            </div>
            <div className="principal__arcades">
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
              <div>ver mas</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Principal;

const sliderArray = [
  {
    img: "arcade",
    nombre: "publicidad",
    ruta: "/",
  },
  {
    img: "evento",
    nombre: "evento",
    ruta: "/eventos",
  },
  {
    img: "consola",
    nombre: "venta-consola",
    ruta: "/",
  },
  {
    img: "juegos",
    nombre: "venta-juegos",
    ruta: "/",
  },
  {
    img: "accesorios",
    nombre: "venta-accesorios",
    ruta: "/",
  },
];
