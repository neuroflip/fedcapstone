import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "../BookingForm";
import * as FormValidation from "../FormValidation";

const initialAvailableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]

const formState = {
        date: new Date(),
        time: "17:00",
        guests: 1,
        ocassion: 0
    },
    availableItems =  initialAvailableTimes,
    onDateChange = jest.fn(),
    onTimeChange = jest.fn(),
    onOcassionChange = jest.fn(),
    onGuestsChange = jest.fn(),
    onSubmit = jest.fn()

test('Renders the BookingForm and all the html input attributes at the form', () => {
  jest.spyOn(FormValidation, 'validateGuests').mockImplementation(() => {
    return false
  })
    render(<BookingForm formState={formState} onDateChange={ onDateChange }
        onTimeChange={ onTimeChange } onOcassionChange={ onOcassionChange } onSubmit={onSubmit}
        onGuestsChange={ onGuestsChange } availableItems={ initialAvailableTimes } />)

    const dateElement = screen.getByLabelText('Choose date*')
    const timeElement = screen.getByLabelText("Choose time")
    const guestsElement = screen.getByLabelText('Number of guests*')
    const ocassionElement = screen.getByLabelText("Occasion")

    //renders all the elements in the form
    expect(screen.getByText("Make Your reservation")).toBeInTheDocument();
    expect(dateElement).toBeInTheDocument();
    expect(timeElement).toBeInTheDocument();
    expect(guestsElement).toBeInTheDocument();
    expect(ocassionElement).toBeInTheDocument();

    //renders needed initial input attributes
    expect(dateElement.getAttribute('required')).not.toBeNull()
    expect(timeElement.getAttribute('required')).not.toBeNull()
    expect(guestsElement.getAttribute('required')).not.toBeNull()
    expect(guestsElement.getAttribute('placeholder')).toEqual("1")
    expect(guestsElement.getAttribute('min')).toEqual("1")
    expect(guestsElement.getAttribute('max')).toEqual("10")
    expect(ocassionElement.getAttribute('required')).not.toBeNull()
})

test('on date change', ()=> {
    const changeEvent =  { target: { value: "2024-12-12" } }

    render(<BookingForm formState={formState} onDateChange={ onDateChange }
        onTimeChange={ onTimeChange } onOcassionChange={ onOcassionChange } onSubmit={onSubmit}
        onGuestsChange={ onGuestsChange } availableItems={ initialAvailableTimes } />)

    const dateElement = screen.getByLabelText('Choose date*')
    fireEvent.change(dateElement, changeEvent)

    expect(onDateChange).toHaveBeenCalledWith(expect.objectContaining({
      target: expect.objectContaining({
        value: new Date().toISOString().split('T')[0]
      })
    }))
})

test('on time change', ()=> {
  const changeEvent =  { target: { value: "20:00" } }

  render(<BookingForm formState={formState} onDateChange={ onDateChange }
      onTimeChange={ onTimeChange } onOcassionChange={ onOcassionChange } onSubmit={onSubmit}
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
      onTimeChange={ onTimeChange } onOcassionChange={ onOcassionChange } onSubmit={onSubmit}
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
        onTimeChange={ onTimeChange } onOcassionChange={ onOcassionChange } onSubmit={onSubmit}
        onGuestsChange={ onGuestsChange } availableItems={ initialAvailableTimes } />)

    const occasionElement = screen.getByLabelText("Occasion")
    fireEvent.change(occasionElement, changeEvent)

    expect(onOcassionChange).toHaveBeenCalledWith(expect.objectContaining({
        target: expect.objectContaining({
          value: "1"
        })
      }))
})

test('submit button disabled if there are errors on form (date)', ()=> {
  jest.spyOn(FormValidation, 'validateDate').mockImplementation(() => {
    return false
  })
  render(<BookingForm formState={formState} onDateChange={ onDateChange }
    onTimeChange={ onTimeChange } onOcassionChange={ onOcassionChange } onSubmit={ onSubmit }
    onGuestsChange={ onGuestsChange } availableItems={ initialAvailableTimes } />)

  const submitButton = screen.getByRole('button')
  const isDisabled = submitButton.getAttribute('disabled')

  expect(FormValidation.validateDate).toHaveBeenCalled()
  expect(submitButton.disabled).toBeTruthy()
})

test('submit button disabled if there are errors on form (guests)', ()=> {
  jest.spyOn(FormValidation, 'validateGuests').mockImplementation(() => {
    return false
  })
  render(<BookingForm formState={formState} onDateChange={ onDateChange }
    onTimeChange={ onTimeChange } onOcassionChange={ onOcassionChange } onSubmit={ onSubmit }
    onGuestsChange={ onGuestsChange } availableItems={ initialAvailableTimes } />)

  const submitButton = screen.getByRole('button')
  const isDisabled = submitButton.getAttribute('disabled')

  expect(FormValidation.validateDate).toHaveBeenCalled()
  expect(submitButton.disabled).toBeTruthy()
})

test('on submit button click if no errors', ()=> {
  jest.spyOn(FormValidation, 'validateDate').mockImplementation(() => {
    return true
  })
  jest.spyOn(FormValidation, 'validateTime').mockImplementation(() => {
    return true
  })
  jest.spyOn(FormValidation, 'validateGuests').mockImplementation(() => {
    return true
  })
  jest.spyOn(FormValidation, 'validateOcassion').mockImplementation(() => {
    return true
  })
  render(<BookingForm formState={formState} onDateChange={ onDateChange }
    onTimeChange={ onTimeChange } onOcassionChange={ onOcassionChange } onSubmit={ onSubmit }
    onGuestsChange={ onGuestsChange } availableItems={ initialAvailableTimes } />)

  const occasionElement = screen.getByLabelText("Occasion")
  fireEvent.change(occasionElement, { target: { value: "1" } })
  const submitButton = screen.getByRole('button')
  const clickEvent = { target: { clientX: 0, clientY: 0 }, preventDefault: jest.fn() }
  fireEvent.click(submitButton, clickEvent)

  expect(clickEvent.preventDefault).toHaveBeenCalled()
  expect(onSubmit).toHaveBeenCalled()
})