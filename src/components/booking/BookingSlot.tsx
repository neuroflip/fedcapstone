
interface BookingSlotProps {
    item: string,
    className: string
}

function BookingSlot({ item, className }: BookingSlotProps): React.JSX.Element {
    return <li className={ `${className} w-16 rounded-lg text-white text-center text-xs m-1 p-1` }>{ item }</li>
}

export default BookingSlot