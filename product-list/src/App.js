import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
//import Hero from './components/Hero';

//import pages
import About from './pages/About';
import Home from './pages/Home';
import Kontak from './pages/Kontak';
import Product from './pages/Product';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/kontak" element={<Kontak />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
