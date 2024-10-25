import Testimonial from "./ui/Testimonial"
import type { TestimonialData } from './ui/Testimonial'

const data: Array<TestimonialData> = [{
  rating: 4.9,
  name: 'Joseph Angel',
  text: 'Great Restaurant! Happy moments there!',
  image: 'https://gravatar.com/avatar/27205e5c51cb03f862138b22bcb5dc20f94a342e744ff6df1b8dc8af3c865109'
},
{
  rating: 5,
  name: 'Abed Moulth',
  text: 'This place is a great restaurant with a great service and menu',
  image: 'https://i.pravatar.cc/250?u=mail@ashallendesign.co.uk'
},
{
  rating: 4.3,
  name: 'Tony Aguiles',
  text: 'on my top 10!',
  image: 'https://loremflickr.com/250/250/dog'
},
{
  rating: 5,
  name: 'Marc Blanch',
  text: 'I always go every time I stay in Chicago. A must to!',
  image: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250'
}]

function Testimonials() {
  return <div className="m-auto w-full bg-tertiary mt-14 pt-14 pb-14">
    <h1 className="text-center mb-12">Testimonials</h1>
    <ul className='m-auto grid sm:grid-flow-col grid-flow-row gap-4 pl-12 pr-12'>
      { data.map((item) => {
        return <li key={item.name} className="bg-quaternary p-4 rounded-xl shadow">
          <Testimonial {...item} />
        </li>
      }) }
    </ul>
  </div>
}

export default Testimonials