import { useNavigate } from 'react-router-dom';
import Path from '../../../paths.js';

import styles from './Home.module.css'
const Home = () => {
   const navigate = useNavigate();
   return (
         <div className={styles['hero-text']}>
            <h1 className={styles['header']}>Dream Car Crafters</h1>
            <p className={styles['lower-text']}><span>Buy and Upgrade Your Dream Car</span></p>
            <button className={styles['button']} onClick={()=> navigate(Path.BrowseCars)} role="button">Browse Cars</button>
            <button className={styles['button']} onClick={()=> navigate(Path.MyGarage)} role="button">My Garage</button>
         </div>
   );
};

export default Home;
