import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Error from "../layout/Error";
import Principal from "../pages/Principal";
import SobreNosotros from "../pages/SobreNosotros";
import Eventos from "../pages/Eventos";
import Tienda from "../pages/Tienda";
import Contacto from "../pages/Contacto";
import TiendaPrincipal from "../pages/tienda/TiendaPrincipal";
import Categorias from "../pages/tienda/Categorias";
import { Producto } from "../pages/tienda/Producto";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        errorElement: <Error/>,
        children: [
            {
                index: true,
                element: <Principal/>
            },
            {
                path: '/sobre-nosotros',
                element: <SobreNosotros/>
            },
            {
                path: '/eventos',
                element: <Eventos/>
            },
            {
                path: '/tienda',
                element: <Tienda/>,
                children: [
                    {
                        index: true,
                        element: <TiendaPrincipal/>,
                    },
                    {
                        path: "/tienda/:id",
                        element: <Categorias/>
                    },
                    {
                        path: "/tienda/:id/:productoId",
                        element: <Producto/>
                    }
                ]
            },
            {
                path: '/contacto',
                element: <Contacto/>
            },
        ]
    }
])