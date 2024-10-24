import Home from './pages/Home';
import Reservations from './pages/Reservations';

import './css/App.css';
import { Routes, Route } from 'react-router-dom'

function App() {
  return <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<Home />} />
    <Route path="/menu" element={<Home />} />
    <Route path="/reservations" element={<Reservations />} />
    <Route path="/order" element={<Home />} />
    <Route path="/login" element={<Home />} />
  </Routes>
}

export default App;
