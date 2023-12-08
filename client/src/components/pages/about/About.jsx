import styles from './About.module.css';

export default function About() {
   return (
      <>
         <div className="header">
            <h1>About</h1>
         </div>
         <div className={styles['about']}>
            TunedTreasures is your digital garage for automotive enthusiasts!
            Share the pride of your vehicle by joining our community where
            members can showcase their rides, share customization details, and
            connect with fellow car enthusiasts. Whether you've added some
            high-performance tuning, personalized aesthetics, or unique
            modifications, TunedTreasures is the platform to flaunt your
            automotive masterpiece. Dive into a world of passion where you can
            explore and appreciate the creativity of others, give likes to the
            most impressive rides, and gather inspiration for your next tuning
            project. Join TunedTreasures today and celebrate the artistry of
            automotive customization with like-minded individuals!
         </div>
      </>
   );
}
