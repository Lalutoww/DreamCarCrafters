import { useState } from 'react';

export const useForm = (onSubmitHandler, initialValues) => {
   const [formValues, setFormValues] = useState(initialValues);
   const [isButtonDisabled, setIsButtonDisabled] = useState(true);

   const onChangeHandler = (e) => {
      setFormValues((state) => ({ ...state, [e.target.name]: e.target.value }));
      
      // Configured to work with current project, remove if necessary
      if(e.target.name === 'partName' && e.target.value === 'partName') {
         setIsButtonDisabled(true);
      }else{
         setIsButtonDisabled(false);
      }
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
   return { formValues, onChangeHandler, onSubmit, isButtonDisabled, resetFormHandler };
};
