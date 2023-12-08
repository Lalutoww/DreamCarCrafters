import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import Path from '../../paths.js';
const Footer = () => {
   return (
      <footer className={styles.footer}>&copy; 2023 Lalutoww / <Link className={styles['about-link']}to={Path.About}>TunedTreasures</Link></footer>
   );
};

export default Footer;
