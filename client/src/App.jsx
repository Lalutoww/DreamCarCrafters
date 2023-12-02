import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/authContext.jsx';
import Path from './paths.js';

import Footer from './components/footer/Footer.jsx';
import Header from './components/header/Header.jsx';
import BrowseCars from './components/pages/car/browse-cars/BrowseCars.jsx';
import Home from './components/pages/home/Home.jsx';
import Register from './components/pages/register/Register.jsx';
import Login from './components/pages/login/Login.jsx';
import CreateParts from './components/pages/tuning/create/CreateParts.jsx';
import MyGarage from './components/pages/car/my-garage/MyGarage.jsx';
import SellCar from './components/pages/Car/sell-car/SellCar.jsx';
import Details from './components/pages/car/details/Details.jsx';
import Logout from './components/logout/Logout.jsx';
import CarEdit from './components/pages/car/car-edit/CarEdit.jsx'
import ErrorBoundary from './components/errorBoundary/ErrorBoundary.jsx';
import AuthGuard from './components/guards/AuthGuard.jsx';
import GuestGuard from './components/guards/GuestGuard.jsx';

function App() {
   return (
      <>
         <ErrorBoundary>
            <AuthProvider>
               <Header />
               <Routes>
                  <Route path={Path.Home} element={<Home />} />
                  <Route path={Path.BrowseCars} element={<BrowseCars />} />
                  <Route element={<GuestGuard />}>
                     <Route path={Path.Register} element={<Register />} />
                     <Route path={Path.Login} element={<Login />} />
                  </Route>
                  <Route element={<AuthGuard />}>
                     <Route path={Path.CreateParts} element={<CreateParts />} />
                     <Route path={Path.MyGarage} element={<MyGarage />} />
                     <Route path={Path.SellCar} element={<SellCar />} />
                     <Route path={Path.Details} element={<Details />} />
                     <Route path={Path.CarEdit} element={<CarEdit />} />
                     <Route path={Path.Logout} element={<Logout />} />
                  </Route>
               </Routes>
               <Footer />
            </AuthProvider>
         </ErrorBoundary>
      </>
   );
}

export default App;
