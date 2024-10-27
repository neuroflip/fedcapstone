import image1 from './img/Mario and Adrian A.jpg'
import image2 from './img/Mario and Adrian b.jpg'

import './css/Chicago.css'

function Chicago() {
  return (<div className="bg-primary flex sm:flex-row flex-col sm:max-h-96 max-h-128 pl-12 pr-12">
    <div className='sm:w-1/3 mt-10 mb-10'>
      <h1 className='text-secondary'>Little Lemon</h1>
      <h2 className='text-white'>Chicago</h2>
      <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    <div className='sm:w-2/3 sm:mt-10'>
      <img className='rounded-md w-80 ml-auto mr-auto shadow' src={image1} alt="restaurant food example" />
      <img className='secondImage rounded-md w-80 ml-auto mr-auto shadow' src={image2} alt="restaurant food example" />
    </div>
  </div>)
}

export default Chicago