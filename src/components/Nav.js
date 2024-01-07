import { Link } from "react-router-dom"

export default function Nav() {
    const styles = {
        display: "flex",
        justifyContent: "center",
    }

    return (
        <nav style={styles}>
            <ul style={{
                listStyle: "none",
                display: "flex",
                gap: "20px",
            }}>
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