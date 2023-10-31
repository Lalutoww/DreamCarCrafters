export default function NavBar(){
    return( <header>
        <nav className="navigation">
            <ul>
                <li><a href="/home" className="btn">Home</a></li>
                <li><a href="/catalog" className="btn">Catalog</a></li>
                <li><a href="/login" className="btn">Login</a></li>
                <li><a href="/register" className="btn">Register</a></li>
                <li><a href="/garage" className="btn">My Garage</a></li>
            </ul>
        </nav>
    </header>)
}