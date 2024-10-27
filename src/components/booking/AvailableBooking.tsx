
import BookingSlot from "./BookingSlot"

const allSlosts = (()=> {
    const timetable: Array<string> = []
    let hour = 16

    for(let i=0;i<8;i++) {
        timetable.push(`${hour+i}:00`)
        timetable.push(`${hour+i}:30`)
    }

    return timetable
})()

interface AvailableBookingProps {
    availableItems: Array<string>,
    date?: string
}

function AvailableBooking({ availableItems, date }: AvailableBookingProps): React.JSX.Element {
    return (<>
        <p className="text-center mt-10">Available time options for the selected date:<br /><b>{ date }</b></p>
        <ul className="sm:max-w-96 max-w-72 m-auto mt-3 flex sm:flex-row flex-wrap">{ allSlosts.map((item) => {
            const className = (availableItems.indexOf(item) >=0 ? 'bg-primary' : 'bg-primary opacity-50 line-through')

            return <BookingSlot key={ item } className={ className } item={ item }/>
    }) }</ul></>)
}

export default AvailableBooking