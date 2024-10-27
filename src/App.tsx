import Home from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import ConfirmedBookingPage from './pages/ConfirmedBookingPage';

import './css/App.css';
import { Routes, Route } from 'react-router-dom'

function App() {
  return <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<Home />} />
    <Route path="/menu" element={<Home />} />
    <Route path="/reservations" element={<BookingPage />} />
    <Route path="/confirmation" element={<ConfirmedBookingPage />} />
    <Route path="/order" element={<Home />} />
    <Route path="/login" element={<Home />} />
  </Routes>
}

export default App;
