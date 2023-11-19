import { useState } from 'react';

export const useForm = (initialValues, onSubmitHandler) => {
   const [formValues, setFormValues] = useState(initialValues);

   const onChangeHandler = (e) => {
      setFormValues((state) => ({ ...state, [e.target.name]: e.target.value }));
   };

   const resetFormHandler = () => {
      setFormValues(initialValues);
   };
   
   const onSubmit = (e) => {
      e.preventDefault();

      if (onSubmitHandler) {
         onSubmitHandler(formValues);
         resetFormHandler();
      }
   };
   return { formValues, onChangeHandler, onSubmit, resetFormHandler };
};
