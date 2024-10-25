import * as React from 'react'
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import Specials from '../components/Specials';
import Testimonials from '../components/Testimonials';
import Chicago from '../components/Chicago';

function Home(): React.JSX.Element {
  return (<>
    <Navigation />
    <Header />
    <Main>
      <>
        <Specials />
        <Testimonials />
        <Chicago />
      </>
    </Main>
    <Footer /></>);
}

export default Home