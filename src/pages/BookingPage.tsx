import * as React from 'react'
import Navigation from '../components/ui/Navigation';
import Footer from '../components/ui/Footer';
import Main from '../components/ui/Main';
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