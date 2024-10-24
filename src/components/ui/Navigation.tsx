import Logo from './Logo'

function Navigation(): React.JSX.Element {
  return <nav className="flex flex-auto">
    <a href="/" className='m-4'>
      <Logo />
    </a>
    <ul className='m-auto'>
      <li className='m-3 inline-block font-bold'><a href="/home" target="_blank">Home</a></li>
      <li className='m-3 inline-block font-bold'><a href="/about" target="_blank">About</a></li>
      <li className='m-3 inline-block font-bold'><a href="/menu" target="_blank">Menu</a></li>
      <li className='m-3 inline-block font-bold'><a href="/reservations" target="_blank">Reservations</a></li>
      <li className='m-3 inline-block font-bold'><a href="/order" target="_blank">Order</a></li>
      <li className='m-3 inline-block font-bold'><a href="/login" target="_blank">Login</a></li>
    </ul>
  </nav>
}

export default Navigation