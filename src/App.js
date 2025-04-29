import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import PoliticasPage from './pages/PoliticasPage';
import ContactPage from './pages/ContactFormPage';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/politicas-terminos" element={<PoliticasPage />} />
        <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}
export default App;