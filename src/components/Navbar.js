import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements.js";
 
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/home" activeStyle>
                        <img src = "next life(logo_only).png" style = {{width: 60, height: 30}}/> Next Life Theatre Co.
                    </NavLink>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/work" activeStyle>
                        <i className="fa fa-th icon"></i>&nbsp; Work
                    </NavLink>
                    <NavLink to="/team" activeStyle>
                        <i className="fa fa-user icon"></i>&nbsp; Team
                    </NavLink>
                    <NavLink to="/support" activeStyle>
                        <i className="fa fa-usd icon"></i>&nbsp; Support
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;