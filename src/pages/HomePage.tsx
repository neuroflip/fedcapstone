import * as React from 'react'
import Navigation from '../components/ui/Navigation';
import Header from '../components/ui/Header';
import Main from '../components/ui/Main';
import Footer from '../components/ui/Footer';
import Specials from '../components/ui/Specials';
import Testimonials from '../components/ui/Testimonials';
import Chicago from '../components/ui/Chicago';

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