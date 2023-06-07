import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navegacion from "../components/Navegacion";
import facebook from "../assets/svgs/facebook.svg";
import tiktok from "../assets/svgs/tiktok.svg";
import instagram from "../assets/svgs/instagram.svg";
import pin from "../assets/svgs/pin.svg";
import phone from "../assets/svgs/phone.svg";

const Layout = () => {
  return (
    <div>
      <Navegacion />
      <main>
        <Outlet />
      </main>

      <footer className="footer">
        <div className="footer__links">
          <h2>NUESTRAS REDES</h2>
          <div>
            {redes.map(({ img, nombre, ruta }) => (
              <Link to={ruta} className="footer__link">
                <img src={img} alt="fb" />
                <p>{nombre}</p>
              </Link>
            ))}
          </div>
        </div>
        <div className="footer__datos">
          <h2>CONTACTANOS</h2>
          {datos.map(({ img, nombre, dato }) => (
            <div className="footer__dato">
              <img src={img} alt={nombre} />
              <p>{dato}</p>
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default Layout;

const redes = [
  {
    img: facebook,
    nombre: "facebook",
    ruta: "https://www.facebook.com/ArcadeColima",
  },
  {
    img: tiktok,
    nombre: "tiktok",
    ruta: "https://www.tiktok.com/@arcadecolima",
  },
  {
    img: instagram,
    nombre: "instagram",
    ruta: "https://www.instagram.com/arcadecolima/?hl=es-la",
  },
];

const datos = [
  {
    img: pin,
    nombre: "address",
    dato: "Gabino barreda #469, Colima, Mexico",
  },
  {
    img: phone,
    nombre: "phone",
    dato: "312-04-7558",
  },
];
