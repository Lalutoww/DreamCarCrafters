const CarElement = ({ manufacturer, model, price, styles, imageUrl }) => {
   return (
      <a href="#" className={styles['added-cars-in-market']}>
         <img src={imageUrl} className={styles['picture-added-cars']} />
         <h3>
            {manufacturer} {model}
         </h3>
         <span>Price: ${price}</span>
      </a>
   );
};
export default CarElement;
