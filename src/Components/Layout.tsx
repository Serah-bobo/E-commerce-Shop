import { Outlet } from "react-router";
import Header from "./Header";
import React from 'react'

const Layout = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        </div>
  )
}

export default Layout