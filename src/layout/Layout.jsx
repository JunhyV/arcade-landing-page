import React from 'react'
import { Outlet } from 'react-router-dom'
import Navegacion from '../components/Navegacion'

const Layout = () => {
  return (
    <div>
        <h1>Titulo de prueba</h1>
        <p>Parrafo de prueba</p>
        <Navegacion/>
        <Outlet/>
        footer
    </div>
  )
}

export default Layout