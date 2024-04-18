import React, {useState, useEffect} from "react";
import { Nav, NavLink, NavMenu, NavSplit } from "./NavbarElements.js";
import "./Navbar.css";
 
const Navbar = () => {
const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 5;
      setScrolled(isScrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    }, []); 
    return (
        <>
            <Nav className={scrolled ? 'scrolled' : ''}>
                <NavMenu>
                    <NavSplit>
                        <NavLink to="/home" onClick={() => window.scrollTo(0, 0)} activeStyle>
                            <img src = "next life(logo_only).png" alt = "logo" style = {{width: 80, height: 40}}/>&nbsp; Next Life Theatre Co.
                        </NavLink>
                    </NavSplit>
                    <NavSplit>
                        <NavLink to="/home" onClick={() => window.scrollTo(0, 0)} activeStyle>
                         Home
                        </NavLink>
                        <NavLink to="/about" onClick={() => window.scrollTo(0, 0)} activeStyle>
                         About
                        </NavLink>
                        <NavLink to="/work" onClick={() => window.scrollTo(0, 0)} activeStyle>
                            <i className="fa fa-th icon"></i>&nbsp; Work
                        </NavLink>
                        <NavLink to="/team" onClick={() => window.scrollTo(0, 0)} activeStyle>
                            <i className="fa fa-user icon"></i>&nbsp;Meet the Team
                        </NavLink>
                        
                        <NavLink to="/join" onClick={() => window.scrollTo(0, 0)} activeStyle>
                            <i className="fa fa-users icon"></i>&nbsp; Join Us
                        </NavLink>
                        <NavLink to="/support" onClick={() => window.scrollTo(0, 0)} activeStyle>
                            <i className="fa fa-usd icon"></i>&nbsp; Support
                        </NavLink>
                    </NavSplit>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;