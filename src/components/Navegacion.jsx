import React from "react";
import { Link } from "react-router-dom";

const Navegacion = () => {
  return (
    <nav>
      <div>
        <img src="" alt="logo" />
      </div>
      <ul>
        {links.map(({ nombre, ruta }) => (
          <li key={nombre}>
            <Link to={ruta}>
              <h2>{nombre}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navegacion;

const links = [
  {
    nombre: "Principal",
    ruta: "/",
  },
  {
    nombre: "Sobre nosotros",
    ruta: "/sobre-nosotros",
  },
  {
    nombre: "Eventos",
    ruta: "/eventos",
  },
  {
    nombre: "Tienda",
    ruta: "/tienda",
  },
  {
    nombre: "Contacto",
    ruta: "/contacto",
  },
];
