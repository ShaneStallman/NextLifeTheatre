
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
 
export const Nav = styled.nav`
    background-color: #120b1a;
    height: 5.5vh;
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 0;
    z-index: 1000;
    box-shadow: 0px 2px 10px black;
`;
 
export const NavLink = styled(Link)`
    color: white;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active {
        color: lightblue;
    }
`;
 
 
export const NavMenu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: -24px;
    /* Second Nav */
    /* margin-right: 24px; */
    /* Third Nav */
    width: 96.5vw;
    white-space: nowrap; */
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavSplit = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;
    /* Second Nav */
    /* margin-right: 24px; */
    /* Third Nav */
    /* width: 100vw;
    white-space: nowrap; */
    @media screen and (max-width: 768px) {
        display: none;
    }
`;
