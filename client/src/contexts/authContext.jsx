import { createContext, useState } from 'react';
import * as authService from '../services/authService.js';
import { useNavigate } from 'react-router-dom';

import Path from '../paths.js';

const AuthContext = createContext();
AuthContext.displayName = 'AuthContext';

export const AuthProvider = ({ children }) => {
   const navigate = useNavigate();
   const [auth, setAuth] = useState(() => {
      localStorage.removeItem('accessToken');

      return {};
   });

   const loginSubmitHandler = async (values) => {
      const result = await authService.login(values.email, values.password);
      console.log(result);

      setAuth(result);
      localStorage.setItem('accessToken', result.accessToken);

      navigate(Path.Home);
   };

   const registerSubmitHandler = async (values) => {
      const result = await authService.register(
         values.email,
         values.username,
         values.password
      );

      setAuth(result);
      localStorage.setItem('accessToken', result.accessToken);

      navigate(Path.Home);
   };

   const logoutHandler = () => {
      setAuth({});

      localStorage.removeItem('accessToken');
   };

   const contextValues = {
      loginSubmitHandler,
      registerSubmitHandler,
      logoutHandler,
      username: auth.username || auth.email,
      email: auth.email,
      isAuthenticated: !!auth.accessToken,
   };

   return (
      <AuthContext.Provider value={contextValues}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthContext;
