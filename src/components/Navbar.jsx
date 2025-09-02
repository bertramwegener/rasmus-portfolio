import { Link } from "react-router"; 

export default function () {
    return (
        <nav>
            <Link to="/">Forside</Link>
            <Link to="/clients">Clients</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    );
}

