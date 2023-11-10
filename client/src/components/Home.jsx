import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import styles from './Home.module.css'
const Home = () => {
   const navigate = useNavigate();
   return (
         <div className={styles['hero-text']}>
            <h1>Dream Car Crafters</h1>
            <p><span>Buy and Upgrade Your Dream Car</span></p>
            <button className={styles['button']} onClick={()=> navigate('/browse-cars')} role="button">Browse Cars</button>
            <button className={styles['button']} onClick={()=> navigate('/my-garage')} role="button">My Garage</button>
         </div>
   );
};

export default Home;
