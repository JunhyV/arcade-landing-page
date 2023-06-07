import React from "react";
import { Link, useParams } from "react-router-dom";
import data from "../../utils/tienda.json";

export const Producto = () => {
  const { id } = useParams();
  const { productoId } = useParams();
  const categoria = data.find((categoria) => categoria.nombre === id);
  const producto = categoria.productos.find(
    ({ productosId }) => productosId === parseInt(productoId)
  );
  const { contenido, descripcion, img, nombre } = producto;
  return (
    <div>
      <Link to={`/tienda/${id}`}>Back</Link>
      <div>
        <img src={img} alt="producto" width={300} />
        <div>
          <h1>{nombre}</h1>
          <p>{descripcion}</p>
          <ul>
            {contenido.map((contenido) => (
              <li key={contenido.obj}>{contenido.obj}</li>
            ))}
          </ul>
          <button>Más información</button>
        </div>
      </div>
    </div>
  );
};
