import riderImg from '../img/biker.svg'

interface CardProps {
  title: string,
  price: string,
  description: string,
  image: string
}

function Card({ image, title, price, description }: CardProps): React.JSX.Element {
  return <div className="basis-1/3 sm:m-6 bg-gray-200 rounded-md mb-4 m-auto w-full shadow ">
    <img className='m-auto rounded-t-md' src={image} alt="example dish" />
    
    <div className="flex flex-row m-5">
      <div className="markazi-main basis-1/2 text-left text-xl">{ title }</div>
      <div className="markazi-main basis-1/2 text-right text-tertiary text-xl">{ price }</div>
    </div>

    <p className="text-primary m-5">{ description }</p>
    <p className="m-5 font-bold">order a delivery 
      <img className="w-4 float-right mt-1" src={riderImg} alt="order a deliver"/>
    </p>
  </div>
}

export default Card