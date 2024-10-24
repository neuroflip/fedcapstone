
interface TestimonialData {
  rating: number,
  name: string,
  text: string,
  image: string
}

function Testimonial({ rating, name, text, image}: TestimonialData): React.JSX.Element {
  return <div className="container basis-1/2">
    <img className="inline rounded-full w-12" src={image} alt="user avatar" />
    <p className="m-4 inline">
      { name }<br />
    </p>
    <p className="mt-4 mb-4 text-primary">{ text }</p>
    <p className="text-right">{ rating } stars</p>
  </div>
}

export default Testimonial
export type { TestimonialData }
