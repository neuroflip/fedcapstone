import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "../BookingForm";

const initialAvailableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]

const formState = {
        date: null,
        time: "17:00",
        guests: 1,
        ocassion: 0
    },
    availableItems =  initialAvailableTimes,
    onDateChange = jest.fn(),
    onTimeChange = jest.fn(),
    onOcassionChange = jest.fn(),
    onGuestsChange = jest.fn()

test('Renders the BookingForm', () => {
    render(<BookingForm formState={formState} onDateChange={ onDateChange }
        onTimeChange={ onTimeChange } onOcassionChange={ onOcassionChange }
        onGuestsChange={ onGuestsChange } availableItems={ initialAvailableTimes } />)

    expect(screen.getByText("Make Your reservation")).toBeInTheDocument();
    expect(screen.getByLabelText('Choose date*')).toBeInTheDocument();
    expect(screen.getByLabelText("Choose time")).toBeInTheDocument();
    expect(screen.getByLabelText('Number of guests*')).toBeInTheDocument();
    expect(screen.getByLabelText("Occasion")).toBeInTheDocument();
})

test('on date change', ()=> {
    const changeEvent =  { target: { value: "2024-12-12" } }

    render(<BookingForm formState={formState} onDateChange={ onDateChange }
        onTimeChange={ onTimeChange } onOcassionChange={ onOcassionChange }
        onGuestsChange={ onGuestsChange } availableItems={ initialAvailableTimes } />)

    const dateElement = screen.getByLabelText('Choose date*')
    fireEvent.change(dateElement, changeEvent)

    expect(onDateChange).toHaveBeenCalledWith(expect.objectContaining({
        target: expect.objectContaining({
          value: "2024-12-12"
        })
      }))
})

test('on time change', ()=> {
    const changeEvent =  { target: { value: "20:00" } }

    render(<BookingForm formState={formState} onDateChange={ onDateChange }
        onTimeChange={ onTimeChange } onOcassionChange={ onOcassionChange }
        onGuestsChange={ onGuestsChange } availableItems={ initialAvailableTimes } />)

    const timeElement = screen.getByLabelText('Choose time')
    fireEvent.change(timeElement, changeEvent)

    expect(onTimeChange).toHaveBeenCalledWith(expect.objectContaining({
        target: expect.objectContaining({
          value: "20:00"
        })
      }))
})

test('on guests change', ()=> {
    const changeEvent =  { target: { value: "3" } }

    render(<BookingForm formState={formState} onDateChange={ onDateChange }
        onTimeChange={ onTimeChange } onOcassionChange={ onOcassionChange }
        onGuestsChange={ onGuestsChange } availableItems={ initialAvailableTimes } />)

    const guestsElement = screen.getByLabelText('Number of guests*')
    fireEvent.change(guestsElement, changeEvent)

    expect(onGuestsChange).toHaveBeenCalledWith(expect.objectContaining({
        target: expect.objectContaining({
          value: "3"
        })
      }))
})

test('on occasion change', ()=> {
    const changeEvent =  { target: { value: "1" } }

    render(<BookingForm formState={formState} onDateChange={ onDateChange }
        onTimeChange={ onTimeChange } onOcassionChange={ onOcassionChange }
        onGuestsChange={ onGuestsChange } availableItems={ initialAvailableTimes } />)

    const occasionElement = screen.getByLabelText("Occasion")
    fireEvent.change(occasionElement, changeEvent)

    expect(onOcassionChange).toHaveBeenCalledWith(expect.objectContaining({
        target: expect.objectContaining({
          value: "1"
        })
      }))
})

test('on submit change', ()=> {
    //TODO
})