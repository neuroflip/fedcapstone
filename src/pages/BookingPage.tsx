import * as React from 'react'
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Main from '../components/Main';
import Booking from '../components/booking/Booking';

function BookingPage(): React.JSX.Element {
  return (<>
    <Navigation />
    <Main>
      <Booking />
    </Main>
    <Footer /></>);
}

export default BookingPage