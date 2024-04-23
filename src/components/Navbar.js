import React, {useState, useEffect} from "react";
import { Nav, NavLink, NavMenu, NavSplit, NavSplitMobile } from "./NavbarElements.js";
import "./Navbar.css";
import MediaQuery from "react-responsive";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/Dropdown';
 
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
            <MediaQuery minWidth={1024}>
            
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
                            <i className="fa fa-users icon"></i>&nbsp; Auditions
                        </NavLink>
                        <NavLink to="/support" onClick={() => window.scrollTo(0, 0)} activeStyle>
                            <i className="fa fa-usd icon"></i>&nbsp; Support
                        </NavLink>
                    </NavSplit>
                </NavMenu>
            </Nav>
            </MediaQuery>

            <MediaQuery maxWidth={1023}>
            
            <Nav className={scrolled ? 'scrolledMobile' : ''}>
                <NavMenu>
                    <NavSplitMobile>
                        <NavLink to="/home" onClick={() => window.scrollTo(0, 0)} activeStyle>
                            <img src = "next life(logo_only).png" alt = "logo" style = {{width: 80, height: 40}}/> Next Life Theatre Co.
                        </NavLink>
                    </NavSplitMobile>
                    <NavSplitMobile>
      <Dropdown>
      <Dropdown.Toggle className="toggleButton" variant="success" id="dropdown-basic" >
        <i className="fa fa-navicon"></i>
      </Dropdown.Toggle>
      <Dropdown.Menu className="menu">
        <Dropdown.Item  href="/home">Home</Dropdown.Item>
        <Dropdown.Item  href="/work">Work</Dropdown.Item>
        <Dropdown.Item  href="/about">About</Dropdown.Item>
        <Dropdown.Item  href="/team">Team</Dropdown.Item>
        <Dropdown.Item  href="/join">Auditions</Dropdown.Item>
        <Dropdown.Item  href="/support">Support</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
                    </NavSplitMobile>
                </NavMenu>
            </Nav>
            </MediaQuery>
        </>
    );
};
 
export default Navbar;