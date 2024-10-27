import { getDateToISOString } from "../../Utils"

function compareDates(d1: Date, d2: Date) {
    const date1 = new Date(getDateToISOString(d1))
    const date2 = new Date(getDateToISOString(d2))

    return date1 >= date2
}

export const validateDate = (date: Date): boolean => {
    const year = date.getFullYear()
    const currentYear = new Date().getFullYear()

    if (compareDates(date, new Date()) && year <=currentYear + 2) {
        return true
    } else {
        return false
    }
}

export const validateTime = (time: string): boolean => {
    return time.length > 0
}

export const validateGuests = (number: number): boolean => {
    return number > 0 && number < 11
}

export const validateOcassion = (number: number): boolean => {
    return number >= 0 && number <= 2
}