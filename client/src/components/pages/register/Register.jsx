import { useForm } from '../../../hooks/useForm.js';
import styles from './Register.module.css';


const Register = () => {
   const {formValues, onChangeHandler, onSubmit} = useForm({
      username: '',
      password: '',
      rePassword: '',
   }, (formData)=>{
      console.log(formData);
   })

   return (
      <>
         <div className={styles['header']}>
            <h1>Register</h1>
         </div>
         <section className={styles['register-page']} id="registerPage">
            <form
               onSubmit={onSubmit}
               className={styles['register-form']}
               id="registerForm"
               action="#"
               method=""
            >
               <label htmlFor="email">Email:</label>
               <input type="text" id="email" name="" placeholder="Email" />

               <label htmlFor="username">Username:</label>
               <input
                  type="text"
                  id="username"
                  name="username"
                  value={formValues.username}
                  onChange={onChangeHandler}
                  placeholder="Enter your Username"
               />

               <label htmlFor="password">Password:</label>
               <input
                  type="password"
                  id="password"
                  name="password"
                  value={formValues.password}
                  onChange={onChangeHandler}
                  placeholder="Password"
               />

               <label htmlFor="rePassword">Repeat Password:</label>
               <input
                  type="password"
                  id="rePassword"
                  name="rePassword"
                  value={formValues.rePassword}
                  onChange={onChangeHandler}
                  placeholder="Repeat Password"
               />

               <input type="submit" className={styles.registerForm} />
            </form>
         </section>
      </>
   );
};

export default Register;
