import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from 'components/Navbar';
import Home from 'pages/Home';
import Catalog from 'pages/Catalog';
import './App.css';
import './assets/styles/custom.scss';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Catalog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
