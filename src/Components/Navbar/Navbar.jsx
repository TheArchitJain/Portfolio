import React from "react"
import "./Navbar.css"
import ajlogo from "../../assets/ajlogo.png"
import { useState } from "react"
import underline from "../../assets/nav_underline.svg"
import AnchorLink from "react-anchor-link-smooth-scroll"
const Navbar = () => {

    const [menu, SetMenu] = useState("home");

    return (
        <div className="navbar">
            <img src={ajlogo} alt="Logo" className="nav-logo" />
            <ul className="nav-menu">
                <li><AnchorLink className="anchor-link" href="#home"><p onClick={() => SetMenu("home")}>Home </p></AnchorLink>{menu == "home" && <img src={underline} alt="underline" />}</li>
                <li><AnchorLink className="anchor-link" offset={50} href="#about"><p onClick={() => SetMenu("about")}>About</p></AnchorLink>{menu == "about" && <img src={underline} alt="underline" />}</li>
                {/* <li><AnchorLink className="anchor-link" offset={50} href="#education"><p onClick={() => SetMenu("education")}>Education</p></AnchorLink>{menu == "education" && <img src={underline} alt="underline" />}</li> */}
                <li><AnchorLink className="anchor-link" offset={50} href="#projects"><p onClick={() => SetMenu("projects")}>Projects</p></AnchorLink>{menu == "projects" && <img src={underline} alt="underline" />}</li>
                <li><AnchorLink className="anchor-link" offset={50} href="#contact"><p onClick={() => SetMenu("contact")}>Contact</p></AnchorLink>{menu == "contact" && <img src={underline} alt="underline" />}</li>
            </ul>
            <div className="nav-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect With Me</AnchorLink></div>
        </div>
    )
}
export default Navbar