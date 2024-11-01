import { Ocassion } from "../../components/booking/hooks/useBooking";
import DataProvider from "../DataProvider";

const timeData = ["17:30","18:30","20:00","20:30","21:00","22:00","23:30"]
const timeDataFormLocalStorage = "[\"17:30\",\"18:30\",\"20:00\",\"20:30\",\"21:00\",\"22:00\",\"23:30\"]"

beforeEach(() => {
    window.fetchAPI = () => { }
    window.submitAPI = () => { }
})

afterEach(() => {
    delete window.fetchAPI
    delete window.submitAPI
    jest.clearAllMocks();
})

test('getData when fetchAPI returns correctly', () => {
    const mockGetItem = jest.spyOn(Storage.prototype, 'getItem').mockImplementation(() => timeDataFormLocalStorage)
    const mockSetItem = jest.spyOn(Storage.prototype, 'setItem')
    const mockFetchAPI = jest.spyOn(window, 'fetchAPI').mockImplementation(() => timeData)
    jest.spyOn(window, 'submitAPI').mockImplementation(() => true)

    const dataProvider = new DataProvider()
    const date = new Date()

    expect(dataProvider.getData(date)).toEqual(timeData)
    expect(mockFetchAPI).toHaveBeenCalledWith(date)
    expect(mockGetItem).not.toHaveBeenCalled()
    expect(mockSetItem).toHaveBeenCalledWith(`LL_${date.toISOString().split('T')[0]}`, JSON.stringify(timeData))
})

test('getData when fetchAPI does not returns a value', () => {
    const mockGetItem = jest.spyOn(Storage.prototype, 'getItem').mockImplementation(() => timeDataFormLocalStorage)
    const mockSetItem = jest.spyOn(Storage.prototype, 'setItem')
    const mockFetchAPI = jest.spyOn(window, 'fetchAPI').mockImplementation(() => undefined)
    jest.spyOn(window, 'submitAPI').mockImplementation(() => true)

    const dataProvider = new DataProvider()
    const date = new Date()

    expect(dataProvider.getData(date)).toEqual(timeData)
    expect(mockFetchAPI).toHaveBeenCalledWith(date)
    expect(mockGetItem).toHaveBeenCalled()
    expect(mockSetItem).not.toHaveBeenCalled()
})

test('setData', () => {
    const mockSetItem = jest.spyOn(Storage.prototype, 'setItem')
    const dataProvider = new DataProvider()
    const date = new Date()

    dataProvider.setData(date, timeData)

    expect(mockSetItem).toHaveBeenCalledWith(`LL_${date.toISOString().split('T')[0]}`, JSON.stringify(timeData))
})

test('setAndSubmitData', () => {
    const mockSubmitAPI = jest.spyOn(window, 'submitAPI')
    const dataProvider = new DataProvider()
    const date = new Date()
    const formState = {
        date: new Date(),
        time: "16:00",
        guests: 2,
        ocassion: 0
    }
    const timeData = ["15:00", "15:30", "16:30"]

    jest.spyOn(dataProvider, 'setData')
    dataProvider.setAndSubmitData(formState, timeData)

    expect(dataProvider.setData).toHaveBeenCalledWith(formState.date, timeData)
    expect(mockSubmitAPI).toHaveBeenCalledWith(formState)
})
