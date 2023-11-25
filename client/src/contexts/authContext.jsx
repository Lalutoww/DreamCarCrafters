import { createContext, useState } from 'react';
import * as authService from '../services/authService.js';
import { useNavigate } from 'react-router-dom';

import Path from '../paths.js';

const AuthContext = createContext();
AuthContext.displayName = 'AuthContext';

export const AuthProvider = ({ children }) => {
   const navigate = useNavigate();
   const [auth, setAuth] = useState({});

   const loginSubmitHandler = (values) => {
      const result = authService.login(values.email, values.password);

      setAuth(result);

      navigate(Path.Home);
   };

   const registerSubmitHandler = async (values) => {
      const result = await authService.register(values.email, values.username, values.password);

      setAuth(result);

      navigate(Path.Home);
   };

   const contextValues = {
      loginSubmitHandler,
      registerSubmitHandler,
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
