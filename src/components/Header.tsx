import { useNavigate } from 'react-router-dom'

import image from './img/restauranfood.jpg'

function Header() {
  const navigate = useNavigate()
  const goBooking = ()=> navigate("/reservations")

  return (<header className='bg-primary flex sm:flex-row flex-col'>
    <div className='sm:w-1/2 m-10'>
      <h1 className='text-secondary'>Little Lemon</h1>
      <h2 className='text-white'>Chicago</h2>
      <p className='text-white'>At once an emblem of Chicago and a relative newcomer, Gage & Tollner was revived well over a century after first opening at this location in 1892. A trio of Brooklyn hospitality pros, including chef Sohui Kim, reopened the august institution to quick acclaim in 2021.</p>
      <button aria-label='booking a table' onClick={ goBooking } className='shadow bg-secondary'>Reserve a table</button>
    </div>
    <div className='sm:w-1/2'>
      <img className='rounded-md h-80 ml-auto mr-auto mt-5 mb-5 shadow' src={image} alt="restaurant food example" />
    </div>
  </header>)
}

export default Header