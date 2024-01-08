import { Link } from "react-router-dom"

export default function Nav() {
    return (
        <nav className="navbar">
            <ul>
                <li className="card-title">
                    <Link to={`/`}>HOME</Link>
                </li>
                <li className="card-title">
                    <Link to={`/about`}>ABOUT</Link>

                </li>
                <li className="card-title">
                    <Link to={`/menu`}>MENU</Link>
                </li>
                <li className="card-title">
                    <Link to={`/reservations`}>RESERVATIONS</Link>
                </li>
                <li className="card-title">
                    <Link to={`/order`}>ORDER ONLINE</Link>
                </li>
                <li className="card-title">
                    <Link to={`/login`}>LOGIN</Link>
                </li>
            </ul>
        </nav>
    );
}