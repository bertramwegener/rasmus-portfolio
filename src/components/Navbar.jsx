import { NavLink } from "react-router"; 

export default function Navbar () {
    return (
        <nav>
            <NavLink to="/">Forside</NavLink>
            <NavLink to="/clients">Clients</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </nav>
    );
}

