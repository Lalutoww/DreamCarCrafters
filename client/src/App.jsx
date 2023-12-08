import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/authContext.jsx';
import Path from './paths.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthGuard from './components/guards/AuthGuard.jsx';
import GuestGuard from './components/guards/GuestGuard.jsx';

import Footer from './components/footer/Footer.jsx';
import Header from './components/header/Header.jsx';
import BrowseCars from './components/pages/car/browse-cars/BrowseCars.jsx';
import Home from './components/pages/home/Home.jsx';
import Register from './components/pages/register/Register.jsx';
import Login from './components/pages/login/Login.jsx';
import CreateParts from './components/pages/tuning/CreateParts.jsx';
import MyGarage from './components/pages/car/my-garage/MyGarage.jsx';
import ListCar from './components/pages/Car/list-car/ListCar.jsx';
import Details from './components/pages/car/details/Details.jsx';
import Logout from './components/logout/Logout.jsx';
import CarEdit from './components/pages/car/car-edit/CarEdit.jsx';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary.jsx';
import ClearDiv from './components/clearDiv/ClearDiv.jsx';
import About from './components/pages/about/About.jsx';

function App() {
   return (
      <>
         <ErrorBoundary>
            <AuthProvider>
               <Header />
               <Routes>
                  <Route path={Path.Home} element={<Home />} />
                  <Route path={Path.BrowseCars} element={<BrowseCars />} />
                  <Route path={Path.Details} element={<Details />} />
                  <Route path={Path.About} element={<About />} />
                  <Route element={<GuestGuard />}>
                     <Route path={Path.Register} element={<Register />} />
                     <Route path={Path.Login} element={<Login />} />
                  </Route>
                  <Route element={<AuthGuard />}>
                     <Route path={Path.CreateParts} element={<CreateParts />} />
                     <Route path={Path.MyGarage} element={<MyGarage />} />
                     <Route path={Path.ListCar} element={<ListCar />} />
                     <Route path={Path.CarEdit} element={<CarEdit />} />
                     <Route path={Path.Logout} element={<Logout />} />
                  </Route>
               </Routes>
               <ClearDiv />
               <Footer />
            </AuthProvider>
         </ErrorBoundary>
      </>
   );
}

export default App;
