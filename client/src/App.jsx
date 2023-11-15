import './App.css';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer.jsx';
import Header from './components/header/Header.jsx';
import BrowseCars from './components/pages/car/browse-cars/BrowseCars.jsx';
import Home from './components/pages/home/Home.jsx';
import Register from './components/pages/register/Register.jsx';
import Login from './components/pages/login/Login.jsx';
import Create from './components/pages/tuning/create/Create.jsx';
import MyGarage from './components/pages/car/my-garage/MyGarage.jsx';
import SellCar from './components/pages/Car/sell-car/SellCar.jsx';

function App() {
   return (
      <>
         <Header />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cars/browse" element={<BrowseCars />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/parts/create" element={<Create />} />
            <Route path="/cars/garage" element={<MyGarage />} />
            <Route path="/cars/sell" element={<SellCar />} />
         </Routes>
         <Footer />
      </>
   );
}

export default App;
