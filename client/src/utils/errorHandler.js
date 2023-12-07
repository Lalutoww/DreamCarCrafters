export const listEditCarErrorHandler = (values) => {
   for (const key in values) {
      const inputField = values[key];
      if (inputField.trim().length <= 0) {
         throw { message: `${key} field is empty` };
      }
   }
   if (values.year < 1885 || values.year > 2024) {
      throw { message: `Year field is incorrect` };
   }
   if (
      !values.imageUrl.startsWith('http://') &&
      !values.imageUrl.startsWith('https://')
   ) {
      throw { message: `Please provide valid image link` };
   }
   if (values.price < 0) {
      throw { message: `Price must not be a negative number` };
   }
   if (values.horsepower <= 0) {
      throw { message: `Is your car really that slow ?` };
   }
};
