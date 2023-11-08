import styles from './Header.module.css';
const Header = () => {
   return (
      <header>
        {/* Maybe add logo */}
         <nav className={styles['style-4']}>
		<ul className={styles['menu-4']}>
            {/* Add current to every element that is selected and remove old one */}
            {/* Everyone can see: */}
		  <li className={styles['current']}><a href="#" data-hover="Home">Home</a></li>
		  <li><a href="#" data-hover="Browse Cars">Browse Cars</a></li>
            {/* Guest Only: */}
          <li className='guest'><a href="#" data-hover="Login">Login</a></li>
          <li className='guest'><a href="#" data-hover="Register">Register</a></li>
            {/* User Only: */}
		  <li className='user'><a href="#" data-hover="Add Upgrades">Add Upgrades</a></li>
		  <li className='user'><a href="#" data-hover="My Garage">My Garage</a></li>
		  <li className='user'><a href="#" data-hover="Sell Car">Sell Car</a></li>
		</ul>
	</nav>
      </header>
   );
};

export default Header;
