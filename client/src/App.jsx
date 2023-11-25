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

function App() {
   return (
      <>
         <AuthProvider>
            <Header />
            <Routes>
               <Route path={Path.Home} element={<Home />} />
               <Route path={Path.BrowseCars} element={<BrowseCars />} />
               <Route path={Path.Register} element={<Register />} />
               <Route path={Path.Login} element={<Login />} />
               <Route path={Path.CreateParts} element={<CreateParts />} />
               <Route path={Path.MyGarage} element={<MyGarage />} />
               <Route path={Path.SellCar} element={<SellCar />} />
               <Route path={Path.Details} element={<Details />} />
            </Routes>
            <Footer />
         </AuthProvider>
      </>
   );
}

export default App;
