import styles from './Header.module.css';

import { Link } from 'react-router-dom';
import {useContext} from 'react'

import Path from '../../paths.js';
import AuthContext from '../../contexts/authContext.jsx'

const Header = () => {
   const {isAuthenticated} = useContext(AuthContext)

   return (
      <header>
         <nav className={styles['style-4']}>
		<ul className={styles['menu-4']}>
            {/* Everyone can see: */}
		  <li><Link to={Path.Home} data-hover="Home">Home</Link></li>
		  <li><Link to={Path.BrowseCars} data-hover="Car Catalogue">Car Catalogue</Link></li>
        <li><Link to={Path.About} data-hover="About">About</Link></li>
            {/* Guest Only: */}
            {!isAuthenticated && <><li className='guest'><Link to={Path.Login} data-hover="Login">Login</Link></li>
          <li className='guest'><Link to={Path.Register} data-hover="Register">Register</Link></li></>}
            {/* User Only: */}
            
            {isAuthenticated && (<><li className='user'><Link to={Path.ListCar} data-hover="List Car">List Car</Link></li>
		  <li className='user'><Link to={Path.MyGarage} data-hover="My Garage">My Garage</Link></li>
      <li className='user'><Link to={Path.Logout} data-hover="Logout">Logout</Link></li></>)}
		</ul>
	</nav>
      </header>
   );
};

export default Header;
