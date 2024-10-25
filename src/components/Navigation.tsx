import Logo from './ui/Logo'

function Navigation(): React.JSX.Element {
  return <nav className="flex flex-auto">
    <a href="/" className='m-4'>
      <Logo />
    </a>
    <ul className='m-auto'>
      <li className='m-3 inline-block font-bold'><a href="/">Home</a></li>
      <li className='m-3 inline-block font-bold'><a href="/about">About</a></li>
      <li className='m-3 inline-block font-bold'><a href="/menu">Menu</a></li>
      <li className='m-3 inline-block font-bold'><a href="/reservations">Reservations</a></li>
      <li className='m-3 inline-block font-bold'><a href="/order">Order</a></li>
      <li className='m-3 inline-block font-bold'><a href="/login">Login</a></li>
    </ul>
  </nav>
}

export default Navigation