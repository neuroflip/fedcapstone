import { render, screen, act } from "@testing-library/react";
import Booking from "../Booking";

const initialAvailableTimes = ["16:00", "16:30","17:00","17:30"]
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

jest.mock('../AvailableBooking')
jest.mock('../../../DataProvider/DataProvider')

const fetchAPI = jest.fn()
const submitAPI = jest.fn()
Object.defineProperty(window, 'fetchAPI', {
  value: fetchAPI
});
Object.defineProperty(window, 'submitAPI', {
    value: submitAPI
});

const mockNavigate = jest.fn
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
   useNavigate: () => mockNavigate,
 }));

test('Initialize times test: after render Booking, check the initial values obtained from initializeTimes', () => {
    //we mock the BookingForm to be able to intercept the availableItems result from the initializeTimes call
    render(<Booking />)
    expect(availItems).toEqual(initialAvailableTimes);
})

test('updateTimes test: onDateChange does a dispatch executing the updateTimes', () => {
    //we mock the BookingForm to be able to intercept the availableItems result from the updateTimes call
    render(<Booking />)
    act(() => {
        dateChange({ target: { value: "12" } })
    })

    expect(availItems).toEqual(initialAvailableTimes);
})
