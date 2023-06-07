import { Link } from "react-router-dom";

const Enlaces = ({ setDesplegarOpciones }) => {
  return (
    <ul className="navegacion__links">
      {links.map(({ nombre, ruta }) => (
        <li key={nombre}>
          <Link className="hover-3" to={ruta} onClick={() => setDesplegarOpciones(false)}>
            <h2 className="link">{nombre}</h2>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Enlaces;

const links = [
  {
    nombre: "Principal",
    ruta: "/",
  },
  {
    nombre: "Nosotros",
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
