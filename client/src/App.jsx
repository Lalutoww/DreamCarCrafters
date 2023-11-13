import './App.css';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import BrowseCars from './components/pages/Car/BrowseCars.jsx';
import Home from './components/Home.jsx';
import Register from './components/pages/Register.jsx';
import Login from './components/pages/Login.jsx';
import Create from './components/pages/Tuning/Create.jsx'
import MyGarage from './components/pages/Car/MyGarage.jsx';

function App() {
   return (
      <>
         <Header />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/browse-cars" element={<BrowseCars />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/create-parts" element={<Create />} />
            <Route path="/my-garage" element={<MyGarage />} />
         </Routes>
         <Footer />
      </>
   );
}

export default App;
