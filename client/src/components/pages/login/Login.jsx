import { useForm } from '../../../hooks/useForm.js';
import styles from './Login.module.css';

const LoginFormKeys = {
   Email: 'email',
   Password: 'password',
};

const Login = () => {
   const { formValues, onChangeHandler, onSubmit } = useForm(
      (formData) => {
         console.log(formData);
      },
      {
         [LoginFormKeys.Email]: '',
         [LoginFormKeys.Password]: '',
      }
   );
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
                  name={LoginFormKeys.Email}
                  value={formValues[LoginFormKeys.Email]}
                  onChange={onChangeHandler}
                  placeholder="Email"
               />

               <label htmlFor="password">Password:</label>
               <input
                  type="password"
                  id="password"
                  name={LoginFormKeys.Password}
                  value={formValues[LoginFormKeys.Password]}
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
