import React from "react";
import './Hero.css';
import AnchorLink from "react-anchor-link-smooth-scroll";
import profile_imge from '../../assets/profile_imge.jpg';
const Hero = () => {
    return (
        <div id="home" className="hero">
            <img src={profile_imge} alt="Profile" />
            <h1><span>I am Archit Jain,</span> Full Stack Developer</h1>
            <p> Passionate Full Stack Developer skilled in building
                scalable and responsive web applications using React,
                Next.js, Node.js, and PostgreSQL. Focused on creating
                clean user experiences, efficient backend systems, and
                solving real-world problems through technology.</p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect With Me</AnchorLink></div>
                {/* <div className="hero-resume"><AnchorLink className="anchor-link" offset={50} href="#projects">My resume</AnchorLink></div> */}
                <div className="hero-resume">
                    <a className="anchor-link" href="/Resume.pdf" download>
                        My Resume
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Hero;