export const listCarErrorHandler = (values) => {
   for (const key in values) {
      const inputField = values[key];
      if (inputField.trim().length <= 0) {
         throw { message: `${key} field is empty` };
      }
   }
   if (values.year < 1885 || values.year > 2024) {
      throw { message: `Year field is incorrect` };
   }
   if (values.price < 0) {
      throw { message: `Price must not be a negative number` };
   }
};
