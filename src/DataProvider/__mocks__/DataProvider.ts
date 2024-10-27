import { FormState } from "../../components/booking/Booking"

const mockGetData = jest.fn(() => ["16:00", "16:30","17:00","17:30"])

class DataProvider {
    getData(date = new Date()): Array<string> {
        return ["16:00", "16:30","17:00","17:30"]
    }

    setData(date: Date, storageData: Array<string>) {

    }

    setAndSubmitData(data: FormState, storageData: Array<string>) {
        return true
    }
}

export default DataProvider