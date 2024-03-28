import React from "react";
import { Nav, NavLink, NavMenu, NavSplit } from "./NavbarElements.js";
 
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavSplit>
                        <NavLink to="/home" activeStyle>
                            <img src = "next life(logo_only).png" style = {{width: 60, height: 30}}/> Next Life Theatre Co.
                        </NavLink>
                    </NavSplit>
                    <NavSplit>
                        <NavLink to="/home" activeStyle>
                         Home
                        </NavLink>
                        <NavLink to="/about" activeStyle>
                         About
                        </NavLink>
                        <NavLink to="/work" activeStyle>
                            <i className="fa fa-th icon"></i>&nbsp; Work
                        </NavLink>
                        <NavLink to="/team" activeStyle>
                            <i className="fa fa-user icon"></i>&nbsp;Meet the Team
                        </NavLink>
                        <NavLink to="/support" activeStyle>
                            <i className="fa fa-usd icon"></i>&nbsp; Support
                        </NavLink>
                        <NavLink to="/join" activeStyle>
                            <i className="fa fa-users icon"></i>&nbsp; Join Us
                        </NavLink>
                    </NavSplit>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;