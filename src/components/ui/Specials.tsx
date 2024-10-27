import Card from './Card'
import card1Image from '../img/greek salad.jpg'
import card2Image from '../img/other salad.jpg'
import card3Image from '../img/lemon dessert.jpg'

const dishes = [{
    image: card1Image,
    title: 'Greek Salad',
    price: '$12.00',
    description: "Greek salad is a salad made in Greece with the characteristic ingredients of this country. The original salad is made with tomato, cucumber, pepper and red onion, all with salt, black pepper and oregano and dressed with olive oil."
  }, {
    image: card2Image,
    title: 'Bruchetta',
    price: '$5.99',
    description: "Bruschetta is the name given to a dish originating in Italian cuisine, specifically from central and southern Italy. It is considered one of the most popular and traditional antipasti in Italy."
  }, {
    image: card3Image,
    title: 'Lemon Desserts',
    price: '$7.0',
    description: "We’re positive: This is the world’s best lemon meringue pie recipe. With pillowy meringue, smooth lemon filling and perfectly flaky pie crust, this dessert is a showshopper."
  }]

function Specials() {
  return (<><div className="m-auto w-full flex pl-12 pr-12">
    <div className='text-center m-auto w-1/2 p-4'><h1>This week specials!</h1></div>
    <div className='text-center m-auto w-1/2 p-4'><button className='bg-secondary shadow'>Online Menu</button></div>
  </div>

  <div className='flex flex-col sm:flex-row gap-4 pr-12 pl-12'>
    { dishes.map((dish) => {
      return <Card key={dish.title} {...dish} />
    }) }
  </div></>)
}

export default Specials