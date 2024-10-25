import { render, screen, act } from "@testing-library/react";
import Booking from "../Booking";

const initialAvailableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]
let availItems, dateChange
jest.mock('../BookingForm', () => {
    return {
        __esModule: true,
        default: ({ formState, availableItems,onDateChange,onTimeChange,onGuestsChange,onOcassionChange }) => {
            availItems = availableItems
            dateChange = onDateChange

            return <div />
        }
    }
})

test('Renders the Booking: initializeTimes with the correct initial values', () => {
    render(<Booking />)
    expect(availItems).toEqual(initialAvailableTimes);
})

test('onDateChange set correctly his status', () => {
    render(<Booking />)
    act(() => {
        dateChange({ target: { value: "12" } })
    })

    expect(availItems).toEqual(initialAvailableTimes);
})
