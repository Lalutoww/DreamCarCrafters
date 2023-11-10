import './App.css';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import BrowseCars from './components/pages/BrowseCars.jsx';
import Home from './components/Home.jsx';
import Register from './components/pages/Register.jsx';
import Login from './components/pages/Login.jsx';

function App() {
   return (
      <>
         <Header />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/browse-cars" element={<BrowseCars />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
         </Routes>
         <Footer />
      </>
   );
}

export default App;
