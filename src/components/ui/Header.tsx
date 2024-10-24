import * as React from 'react'

import image from '../img/restauranfood.jpg'

function Header() {
  return (<header className='bg-primary flex sm:flex-row flex-col'>
    <div className='sm:w-1/2 m-10'>
      <h1 className='text-secondary'>Little Lemon</h1>
      <h2 className='text-white'>Chicago</h2>
      <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <button className='shadow bg-secondary'>Reserve a table</button>
    </div>
    <div className='sm:w-1/2'>
      <img className='rounded-md h-80 ml-auto mr-auto mt-5 mb-5' src={image} alt="restaurant food example" />
    </div>
  </header>)
}

export default Header