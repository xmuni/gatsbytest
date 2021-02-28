import React from 'react'
import Navbar from '../components/Navbar'
import "./layout.css"

const Layout = ({children}) => {
    return (
        <div id="layout">
            <Navbar/>
            <main>{children}</main>
            <footer>Footer</footer>
        </div>
    )
}

export default Layout
