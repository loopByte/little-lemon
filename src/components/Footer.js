import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <footer>
            <img src="/Logo.svg" alt="Little Lemon Logo" />

            <nav className="navigation">
                <h3 className="section-title">NAVIGATION</h3>
                <ul>
                    <li>
                        <Link to={`/`}>Home</Link></li>
                    <li>
                        <Link to={`/about`}>About</Link></li>
                    <li>
                        <Link to={`/menu`}>Menu</Link></li>
                    <li>
                        <Link to={`/reservations`}>Reservations</Link></li>
                    <li>
                        <Link to={`/order`}>Order online</Link></li>
                    <li>
                        <Link to={`/login`}>Login</Link></li>
                </ul>
            </nav>

            <nav className="contact">
                <h3 className="section-title">CONTACT</h3>
                <ul>
                    <li>
                        <Link to={`https://maps.app.goo.gl/UtDGd5UJVGdRYCM67`} target="_blank">3200 Wolf Rd, Franklin Park, IL 60131</Link>
                    </li>
                    <li>
                        <Link to={`tel:+12345678910`}>+12345678910</Link>
                    </li>
                    <li>
                        <Link to={`mail:contact@littlelemon.com`}>contact@littlelemon.com</Link>
                    </li>
                </ul>
            </nav>

            <nav className="social">
                <h3 className="section-title">SOCIAL MEDIA</h3>
                <ul>
                    <li><Link to={`https://facebook.com`} target="_blank">Facebook</Link></li>
                    <li><Link to={`https://instagram.com`} target="_blank">Instagram</Link></li>
                </ul>
            </nav>
        </footer>
    )
}