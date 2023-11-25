import { useContext, useEffect } from 'react';

import * as authService from '../../services/authService';
import { useNavigate } from 'react-router-dom';
import Path from '../../paths';
import AuthContext from '../../contexts/authContext';

export default function Logout() {
   const navigate = useNavigate();
   const { logoutHandler } = useContext(AuthContext);

   useEffect(() => {
      const result = async() =>{try {
        await authService.logout();
        logoutHandler();
        navigate(Path.Home);
     } catch (e) {
        navigate(Path.Home);
     }}
     result();
   }, []);

   return null;
}
