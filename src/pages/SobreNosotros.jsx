import React from "react";

const SobreNosotros = () => {
  return (
    <div className="nosotros">
      <div className="nosotros__informacion">
        <h1>Sobre nosotros</h1>
        <p>
          Bienvenidos a nuestra tienda de videojuegos, donde la pasión por los
          juegos y la tecnología se unen para brindarte una experiencia única en
          el mundo de los videojuegos. Desde nuestros humildes comienzos, hemos
          crecido y evolucionado para convertirnos en un destino popular para
          los entusiastas de los videojuegos en todo el mundo.
        </p>
        <p>
          Nuestro objetivo es brindar productos de alta calidad, desde los
          últimos lanzamientos hasta los clásicos atemporales, para satisfacer
          las necesidades de cada tipo de jugador. Nos enorgullecemos de ofrecer
          una amplia selección de juegos, consolas y accesorios, así como de
          proporcionar un servicio excepcional al cliente.{" "}
        </p>
        <p>
          Además, estamos comprometidos en estar al tanto de las últimas
          tendencias y novedades en la industria de los videojuegos para
          brindarte la mejor experiencia posible. No importa si eres un jugador
          casual o un jugador dedicado, estamos aquí para satisfacer tus
          necesidades y ayudarte a descubrir nuevos mundos.
        </p>
        <p>
          Gracias por elegirnos como tu tienda de videojuegos de confianza.
          ¡Esperamos verte pronto!
        </p>
      </div>
      <div className="nosotros__servicios">
        <h2>Servicios</h2>
        <ul>
          <li>
            <p>Venta de juegos y consolas</p>{" "}
          </li>
          <li>
            <p>Reparación de consolas y accesorios</p>
          </li>
          <li>
            <p>Intercambio y compra de juegos usados</p>
          </li>
          <li>
            <p>Eventos y torneos de videojuegos</p>
          </li>
          <li>
            <p>Asesoramiento técnico</p>
          </li>
          <li>
            <p>Entrega a domicilio</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SobreNosotros;
