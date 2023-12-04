import React, {useState} from "react";
import "./Navbar.css"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return(
        <div className="navbar">
            <div className="nav_logo"> MARCKETPLACE </div>
            <div className={`nav_items ${isOpen && "open"}`}>
                <a href="#"> INICIO</a>
                <a href="#"> BIO</a>
                <a href="#"> PORTAFOLIO</a>
                <a href="#"> CONTACTO</a>
            </div>
            <div className={`nav_toggle ${isOpen && "open"}`} onClick={ () => setIsOpen(!isOpen)} >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}
export default Navbar