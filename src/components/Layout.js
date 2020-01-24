
import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import './layout.css'

const Layout = ({children}) => {
    return (
        <>
        <Navbar />
            {children}
            <Footer />
        </>
    )
}

export default Layout;


/* import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import "./layout.css"

    const Layout = (props) => {
        return (
        <div>
            <Navbar />
                {props.children}
            <Footer />
        </div>
        )
    }
export default Layout;

*/