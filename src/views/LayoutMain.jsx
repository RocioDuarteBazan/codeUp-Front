import { Outlet, Link } from "react-router-dom"

function LayoutMain() {
    return (
        <div className="home-container">
            {/* Barra de Navegación */}
            <nav className="navbar">
                <ul className="navbar-menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/events">Events</Link></li>
                    <li><Link to="/places">Place</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                </ul>
            </nav>

            {/* Contenido principal */}
            <main className="home-main">
                <Outlet/>
            </main>

            {/* Footer */}
            <footer className="footer">
                <p>&copy; 2024 Events App. All rights reserved.</p>
                <ul className="footer-links">
                    <li><a href="/privacy">Privacy Policy</a></li>
                    <li><a href="/terms">Terms of Service</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                </ul>
            </footer>
        </div>
    )
}

export default LayoutMain