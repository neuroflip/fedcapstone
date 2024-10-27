import Navigation from "../components/ui/Navigation"
import Main from "../components/ui/Main"
import Footer from "../components/ui/Footer"
import { useSearchParams } from "react-router-dom"

import image from '../components/img/restaurant.jpg'

function ConfirmedBookingPage() {
    const [searchParams] = useSearchParams();
    const date = searchParams.get('date')
    const time = searchParams.get('time')
    const guests = searchParams.get('guests')

    return (<>
        <Navigation />
        <Main>
            <><img className="sm:w-1/2 w-full rounded-lg m-auto mt-12 mb-12" src={ image } alt="restaurant view as confirmation" />
            <p className="text-center font-bold">{ `${guests} people reservation for day ${date} at ${time}` }.</p>
            <h1 className="text-center m-32">Congrats! your booking is confirmed correctly.</h1></>
        </Main>
        <Footer />
    </>);
}

export default ConfirmedBookingPage