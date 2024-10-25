import { ChangeEvent, useState, useReducer } from "react"
import BookingForm from "./BookingForm"

export enum Ocassion {
    NotSet,
    Birthday,
    Anniversary
}

export interface FormState {
    date: Date | null,
    time: string,
    guests: number,
    ocassion: Ocassion
}

declare const window: {
    fetchAPI: any;
} & Window;

const initialAvailableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]
const initializeTimes = () => {
    return window.fetchAPI()
}

const initialFormState = {
    date: null,
    time: initialAvailableTimes[0],
    guests: 1,
    ocassion: Ocassion.NotSet
}

function Booking() {
    const [formState, setFormState] = useState<FormState>(initialFormState)
    const updateTimes = (state: Array<string>, action: any): Array<string> => {
        //This function will change the availableTimes based on the selected date
        /*if (action.type === "data") {
            const value = action.value
        }*/

        return state
    }
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes())

    function onDateChange(e: ChangeEvent<HTMLInputElement>) {
        const value = (e.target as HTMLInputElement).value

        setFormState({ ...formState, date: new Date(value) })
        dispatch({ type: 'data', value: value })
    }

    function onTimeChange(e: ChangeEvent<HTMLSelectElement>) {
        const value = (e.target as HTMLSelectElement).value

        setFormState({ ...formState, time: value })
    }

    function onGuestsChange(e: ChangeEvent<HTMLInputElement>) {
        const value = (e.target as HTMLInputElement).value

        setFormState({ ...formState, guests: Number(value) })
    }

    function onOcassionChange(e: ChangeEvent<HTMLSelectElement>) {
        const value = (e.target as HTMLSelectElement).value

        setFormState({ ...formState, ocassion: Number(value) })
    }

    return <BookingForm
        formState={ formState }
        availableItems={ availableTimes }
        onDateChange={ onDateChange }
        onTimeChange={ onTimeChange }
        onGuestsChange={ onGuestsChange }
        onOcassionChange={ onOcassionChange } />
}

export default Booking