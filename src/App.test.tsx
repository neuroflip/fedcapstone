import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import App from './App';
import Home from './pages/HomePage';
import BookingPage from './components/booking/BookingForm';

jest.mock('./pages/HomePage')
jest.mock('./components/booking/BookingForm')

beforeEach(() => {
  (Home as jest.Mock).mockImplementation(() => <h1>Hello From Home Page</h1>);
  (BookingPage as jest.Mock).mockImplementation(() => <h1>Hello From Booking Page</h1>);
})

test('renders Home page by default', () => {
  render(<BrowserRouter><App /></BrowserRouter>);

  const linkElement = screen.getByText(/Hello From Home Page/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Booking page', () => {
  window.history.pushState({}, '', '/reservations')
  render(<BrowserRouter><App /></BrowserRouter>);

  const pageElementText = screen.getByText(/Hello From Booking Page/i);
  expect(pageElementText).toBeInTheDocument();
});
