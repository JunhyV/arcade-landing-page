import React from "react";

const Contacto = () => {
  return (
    <div className="contacto">
      <div className="contacto__inicio">
        <h1>Buscanos en nuestra sucursal</h1>
        <h2>Horarios</h2>
        <div className="contacto__horarios">
          <div>
            <h3>Lunes - Sabado</h3>
            <p>10:15 - 21:00</p>
          </div>
          <div>
            <h3>Domingo</h3>
            <p>10:15 - 15:00</p>
          </div>
        </div>
      </div>

      <div className="contacto__mapa">
        <img src='https://drive.google.com/uc?export=view&id=12D8Iy6gq5K2KmhFQYhS09bijSv1NmI7L' alt="local" />
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.7377605425595!2d-103.7238359249191!3d19.25025738199049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84255ab1c7964af7%3A0xfaf3bc64334b6a24!2sC.%20Gabino%20Barreda%20469%2C%20Centro%2C%2028000%20Colima%2C%20Col.!5e0!3m2!1ses-419!2smx!4v1682355354552!5m2!1ses-419!2smx"></iframe>
      </div>
    </div>
  );
};

export default Contacto;
