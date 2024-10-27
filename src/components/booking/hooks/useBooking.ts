import { useState, useReducer, ChangeEvent } from "react"
import { useNavigate } from "react-router-dom"

import DataProvider from "../../../DataProvider/DataProvider"

export interface FormState {
    date: Date,
    time: string,
    guests: number,
    ocassion: Ocassion
}

export enum Ocassion {
    NotSet,
    Birthday,
    Anniversary
}

const initialFormState = {
    date: new Date(),
    time: "17:00",
    guests: 0,
    ocassion: 0
}

function useBooking(): Array<any> {
    const dataProvider = new DataProvider()
    const navigate = useNavigate()
    const [formState, setFormState] = useState<FormState>(initialFormState)

    const initializeTimes = () => dataProvider.getData(new Date())
    const updateTimes = (state: Array<string>, action: any): Array<string> => {
        if (action.type === "data.change.date") {
            return dataProvider.getData(new Date(action.value))
        }
        return state
    }

    function submitForm(data: FormState) {
        const newStorageData = availableTimes.filter((item: string) => item !== data.time)

        if (dataProvider.setAndSubmitData(data, newStorageData)) {
            navigate(`/confirmation?date=${data.date.toDateString()}&time=${data.time}&guests=${data.guests}`)
        }
    }

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes())

    function onDateChange(e: ChangeEvent<HTMLInputElement>) {
        const value = (e.target as HTMLInputElement).value
        const valueDate = new Date(value)

        if (valueDate.getFullYear() <= 9999) {
            setFormState({ ...formState, date: valueDate })
            dispatch({ type: 'data.change.date', value: value })
        }
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
    return [formState, availableTimes, submitForm, onDateChange, onTimeChange, onGuestsChange, onOcassionChange]
}

export default useBooking