import * as React from 'react'
import Logo from './Logo'

function Footer() {
  return <footer className='flex flex-1 w-full bg-tertiary pt-6 ml-auto mr-auto'>
    <div className='m-4'><Logo /></div>
    <ul className='m-auto'>
      <li className='m-7 inline-block font-bold align-top'>
        <div className='font-bold'>Navigation</div>
        <a href="/home" className='block' target="_blank">Home</a>
        <a href="/about" className='block' target="_blank">About</a>
        <a href="/menu" className='block' target="_blank">Menu</a>
        <a href="/reservations" className='block' target="_blank">Reservations</a>
        <a href="/order" className='block' target="_blank">Order</a>
        <a href="/login" className='block' target="_blank">Login</a>
      </li>
      <li className='m-7 inline-block font-bold align-top'>
        <div className='font-bold'>Contact</div>
        <div>202 Gwenn Viaduct, <br />West Dominiquehaven, <br />SC 25564</div>
        <div>tel. 555-25564</div>
        <a href="mailto://help@littlelemon.com">help@littlelemon.com</a>
      </li>
      <li className='m-7 inline-block font-bold align-top'>
        <div className='font-bold'>Social Media</div>
        <div>Facebook</div>
        <div>Instagram</div>
      </li>
    </ul>
  </footer>
}

export default Footer