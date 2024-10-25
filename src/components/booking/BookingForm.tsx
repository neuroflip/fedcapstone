import { ChangeEventHandler, FormEvent } from 'react';
import { Ocassion, FormState } from './Booking';
import './css/BookingForm.css'

interface BookingFormProps {
    formState: FormState,
    availableItems: Array<string>,
    onDateChange: ChangeEventHandler<HTMLInputElement>,
    onTimeChange: ChangeEventHandler<HTMLSelectElement>,
    onOcassionChange: ChangeEventHandler<HTMLSelectElement>,
    onGuestsChange: ChangeEventHandler<HTMLInputElement>
}

function BookingForm({ formState, availableItems, onDateChange, onTimeChange, onOcassionChange, onGuestsChange }: BookingFormProps): React.JSX.Element {
    function isFormValid() {
        return formState.date !== null && formState.guests > 0;
    }

    function getTimeOptions() {
        return availableItems.map((time) => {
            return <option key={time} value={ time }>{ time }</option>
        })
    }

    function onSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()

        console.log("SUBMIT!!!")
        console.log(e)
    }

    return <form className="bookingForm grid max-w-52 gap-5 w-full mt-20 mb-20 ml-auto mr-auto " onSubmit={ onSubmit }>
            <label htmlFor="res-date" className="font-bold">Choose date<sup className="text-red-700">*</sup></label>
            <input type="date" id="res-date" required onChange={ onDateChange } />
            <label htmlFor="res-time" className="font-bold">Choose time</label>
            <select id="res-time" required onChange={ onTimeChange }>
                { getTimeOptions() }
            </select>

            <label htmlFor="guests" className="font-bold">Number of guests<sup className="text-red-700">*</sup></label>
            <input type="number" required placeholder="1" min="1" max="10" id="guests" onChange={onGuestsChange} />
            <label htmlFor="occasion" className="font-bold">Occasion</label>
            <select id="occasion" required onChange={onOcassionChange}>
                <option value={ Ocassion.NotSet }>not an special occasion</option>
                <option value={ Ocassion.Birthday }>Birthday</option>
                <option value={ Ocassion.Anniversary }>Anniversary</option>
            </select>
            <button type="submit" disabled={!isFormValid()} className='bg-secondary shadow rounded-lg font-bold p-4 text-black'>
                Make Your reservation
            </button>
        </form>
}

export default BookingForm