import { FormState } from "../components/booking/hooks/useBooking"
import { getDateToISOString } from "../Utils"

const LITTLE_LEMON_KEY = 'LL_'

class DataProvider {
    getData(date = new Date()): Array<string> {
        let data = window.fetchAPI(date)

        if (!data || data.length === 0) {
            const ls = window.localStorage.getItem(storageKey(date))

            data = JSON.parse(ls || [].toString())
        } else {
            this.setData(date, data)
        }

        return data
    }

    setData(date: Date, storageData: Array<string>) {
        window.localStorage.setItem(storageKey(date), JSON.stringify(storageData))
    }

    setAndSubmitData(data: FormState, storageData: Array<string>) {
        this.setData(data.date, storageData)

        return window.submitAPI(data)
    }

}

function storageKey(date: Date) {
    return `${LITTLE_LEMON_KEY}${getDateToISOString(date)}`
}

export default DataProvider