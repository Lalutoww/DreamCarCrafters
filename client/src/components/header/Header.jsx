import { Link } from 'react-router-dom';
import styles from './Header.module.css';

import Path from '../../paths.js';
const Header = () => {

   return (
      <header>
        {/* Maybe add logo */}
         <nav className={styles['style-4']}>
		<ul className={styles['menu-4']}>
            {/* Add current to every element that is selected and remove old one */}
            {/* Everyone can see: */}
		  <li><Link to={Path.Home} data-hover="Home">Home</Link></li>
		  <li><Link to={Path.BrowseCars} data-hover="Browse Cars">Browse Cars</Link></li>
            {/* Guest Only: */}
          <li className='guest'><Link to={Path.Login} data-hover="Login">Login</Link></li>
          <li className='guest'><Link to={Path.Register} data-hover="Register">Register</Link></li>
            {/* User Only: */}
		  <li className='user'><Link to={Path.CreateParts} data-hover="Create Parts">Create Parts</Link></li>
		  <li className='user'><Link to={Path.MyGarage} data-hover="My Garage">My Garage</Link></li>
		  <li className='user'><Link to={Path.SellCar} data-hover="Sell Car">Sell Car</Link></li>
      <li className='user'><Link to={Path.Logout} data-hover="Logout">Logout</Link></li>
		</ul>
	</nav>
      </header>
   );
};

export default Header;
