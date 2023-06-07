import React from "react";
import { Link, Outlet } from "react-router-dom";

const Tienda = () => {
  return (
    <div className="tienda">
      <aside className="tienda__categorias">
        <h2>CATEGORIAS</h2>
        <div className="search">
          <input type="text" />
          <img src="../assets/svgs/search.svg" alt="search" />
        </div>
        <ul>
          <li>
            <Link to="/tienda/nintendo">
              <p>nintendo</p>
            </Link>
          </li>
          <li>
            <Link to="/tienda/xbox">
              <p>xbox</p>
            </Link>
          </li>
          <li>
            <Link to="/tienda/playstation">
              <p>playstation</p>
            </Link>
          </li>
          <li>
            <Link to="/tienda/arcades">
              <p>arcades</p>
            </Link>
          </li>
          <li>
            <Link to="/tienda/ropa">
              <p>ropa</p>
            </Link>
          </li>
          <li>
            <Link to="/tienda">
              <p>todos</p>
            </Link>
          </li>
        </ul>
      </aside>
      <div>
        <Outlet/>
      </div>
    </div>
  );
};

export default Tienda;
