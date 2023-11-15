import { Link } from 'react-router-dom';
import styles from './Header.module.css';
const Header = () => {

   return (
      <header>
        {/* Maybe add logo */}
         <nav className={styles['style-4']}>
		<ul className={styles['menu-4']}>
            {/* Add current to every element that is selected and remove old one */}
            {/* Everyone can see: */}
		  <li><Link to="/" data-hover="Home">Home</Link></li>
		  <li><Link to="/cars/browse" data-hover="Browse Cars">Browse Cars</Link></li>
            {/* Guest Only: */}
          <li className='guest'><Link to="/login" data-hover="Login">Login</Link></li>
          <li className='guest'><Link to="/register" data-hover="Register">Register</Link></li>
            {/* User Only: */}
		  <li className='user'><Link to="/parts/create" data-hover="Create Parts">Create Parts</Link></li>
		  <li className='user'><Link to="/cars/garage" data-hover="My Garage">My Garage</Link></li>
		  <li className='user'><Link to="/cars/sell" data-hover="Sell Car">Sell Car</Link></li>
		</ul>
	</nav>
      </header>
   );
};

export default Header;
