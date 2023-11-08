import './App.css'
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
         <BrowseCars />
         <Footer />
      </>
   );
}

export default App;
