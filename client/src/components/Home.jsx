import styles from './Home.module.css'
const Home = () => {
   return (
         <div className={styles['hero-text']}>
            <h1>Dream Car Crafters</h1>
            <p><span>Buy and Upgrade Your Dream Car</span></p>
            <button className={styles['button']} role="button">Browse Cars</button>
            <button className={styles['button']} role="button">My Garage</button>
         </div>
   );
};

export default Home;
