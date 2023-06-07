import React from "react";
import data from "../../utils/tienda.json";
import { Link, useParams } from "react-router-dom";

const Categorias = () => {
  const { id } = useParams();
  const categoria = data.find((categoria) => categoria.nombre === id);
  const { img, productos } = categoria;
  return (
    <div>
      <div>
        <img src={img} alt="categoria" width={300} />
        <h2>Productos disponibles</h2>
      </div>
      <div >
        {productos.map(({ nombre, img, productosId }) => (
          <div key={nombre}>
            <Link to={`/tienda/${id}/${productosId}`}>
              <img src={img} alt="producto" width={300} />
            </Link>
            <p>{nombre}</p>
            <Link>Ver</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categorias;
