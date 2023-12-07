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
   if (values.horsepower <= 0) {
      throw { message: `Is your car really that slow ?` };
   }
};

export const createPartsErrorHandler = (values) => {
   for (const key in values) {
      const inputField = values[key];
      if (inputField.trim().length <= 0) {
         throw { message: `${key} field is empty` };
      }
   }
   if (
      !values.imageUrl.startsWith('http://') &&
      !values.imageUrl.startsWith('https://')
   ) {
      throw { message: `Please provide valid image link` };
   }
};

export const registerErrorHandler = (values) => {
   if (values.password !== values.rePassword) {
      throw { message: `Passwords don't match` };
   }
   if (values.username.trim().length <= 0) {
      throw { message: `Please enter your username` };
   }
};
