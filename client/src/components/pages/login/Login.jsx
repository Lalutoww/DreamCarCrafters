import { useForm } from '../../../hooks/useForm.js';
import styles from './Login.module.css';

const Login = () => {
   const { formValues, onChangeHandler, onSubmit } = useForm({
      email: '',
      password: '',
   }, (formData) => {
      console.log(formData);
   });
   return (
      <>
         <div className={styles['header']}>
            <h1>Login</h1>
         </div>
         <section className={styles['login-page']} id="loginPage">
            <form
               onSubmit={onSubmit}
               className={styles['login-form']}
               id="loginForm"
               method="POST"
            >
               <label htmlFor="email">Email:</label>
               <input
                  type="text"
                  id="email"
                  name="email"
                  value={formValues.email}
                  onChange={onChangeHandler}
                  placeholder="Email"
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

               <input type="submit" />
            </form>
         </section>
      </>
   );
};

export default Login;
