import BookingForm from "./BookingForm"
import AvailableBooking from "./AvailableBooking"
import useBooking from "./hooks/useBooking"
import { getDateToISOString } from "../../Utils"

function Booking() {
    const [formState, availableTimes, submitForm, onDateChange, onTimeChange, onGuestsChange, onOcassionChange] = useBooking()

    return (<>
        <AvailableBooking date={ getDateToISOString(formState.date) } availableItems={ availableTimes } />
        <BookingForm
            formState={ formState }
            availableItems={ availableTimes }
            onDateChange={ onDateChange }
            onTimeChange={ onTimeChange }
            onGuestsChange={ onGuestsChange }
            onOcassionChange={ onOcassionChange }
            onSubmit={ submitForm } />
    </>)
}

export default Booking