import { ChangeEventHandler, FormEvent } from 'react';
import { validateDate, validateTime, validateGuests, validateOcassion } from './FormValidation';
import { Ocassion, FormState } from './hooks/useBooking';
import { getDateToISOString } from '../../Utils';

import './css/BookingForm.css'

interface BookingFormProps {
    formState: FormState,
    availableItems: Array<string>,
    onDateChange: ChangeEventHandler<HTMLInputElement>,
    onTimeChange: ChangeEventHandler<HTMLSelectElement>,
    onOcassionChange: ChangeEventHandler<HTMLSelectElement>,
    onGuestsChange: ChangeEventHandler<HTMLInputElement>,
    onSubmit: Function
}

function BookingForm({ formState, availableItems, onDateChange, onTimeChange,
    onOcassionChange, onGuestsChange, onSubmit }: BookingFormProps): React.JSX.Element {

    function isFormValid() {
        return validateDate(formState.date) &&
            validateTime(formState.time) &&
            validateGuests(formState.guests) &&
            validateOcassion(formState.ocassion);
    }

    function getTimeOptions() {
        return availableItems.map((time) => {
            return <option key={time} value={ time }>{ time }</option>
        })
    }

    function submitForm(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()

        onSubmit(formState)
    }

    return <form className="bookingForm grid max-w-52 gap-5 w-full mt-10 mb-20 ml-auto mr-auto " onSubmit={ submitForm }>

            <label htmlFor="res-date" className="font-bold">Choose date<sup className="text-red-700">*</sup></label>
            { !validateDate(formState.date) ? <div className='text-red-700 text-xs'>The date has to be greater than now and cannot be greater than 2 years</div> : <></> }
            <input value={getDateToISOString(formState.date)} type="date" id="res-date" required onChange={ onDateChange } />

            <label htmlFor="res-time" className="font-bold">Choose time</label>
            <select id="res-time" required onChange={ onTimeChange }>
                { getTimeOptions() }
            </select>

            <label htmlFor="guests" className="font-bold">Number of guests<sup className="text-red-700">*</sup></label>
            { !validateGuests(formState.guests) ? <div className='text-red-700 text-xs'>Please, select one or more guests</div> : <></> }
            <input type="number" required placeholder="0" min="1" max="10" id="guests" onChange={onGuestsChange} />

            <label htmlFor="occasion" className="font-bold">Occasion</label>
            <select id="occasion" required onChange={onOcassionChange}>
                <option value={ Ocassion.NotSet }>not an special occasion</option>
                <option value={ Ocassion.Birthday }>Birthday</option>
                <option value={ Ocassion.Anniversary }>Anniversary</option>
            </select>

            <button aria-label="click to make a reservation" type="submit" disabled={!isFormValid()} className='bg-secondary shadow rounded-lg font-bold p-4 text-black'>
                Make Your reservation
            </button>
        </form>
}

export default BookingForm