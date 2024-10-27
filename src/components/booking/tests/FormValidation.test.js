import { validateDate, validateTime, validateGuests, validateOcassion } from '../FormValidation';

test("invalid date", () => {
    expect(validateDate(new Date('1111111-11-11'))).toBeFalsy()
    expect(validateDate(new Date('1111-111-11'))).toBeFalsy()
    expect(validateDate(new Date('1111-11-111'))).toBeFalsy()
})

test("year in the correct range", () => {
    const currentYear = new Date().getFullYear()

    expect(validateDate(new Date('3000-11-11'))).toBeFalsy()
    expect(validateDate(new Date(`${currentYear + 3}-11-11`))).toBeFalsy()
    expect(validateDate(new Date(`${currentYear - 2}-11-11`))).toBeFalsy()
    expect(validateDate(new Date('1111-111-11'))).toBeFalsy()
    expect(validateDate(new Date('1111-11-111'))).toBeFalsy()
})

test("valid date", () => {
    const currentYear = new Date().getFullYear()
    expect(validateDate(new Date(`${currentYear}-12-31`))).toBeTruthy()
})


test("invalid time", () => {
    expect(validateTime("")).toBeFalsy()
})

test("valid time", () => {
    expect(validateTime("14:00")).toBeTruthy()
})

test("invalid guests", () => {
    expect(validateGuests(0)).toBeFalsy()
    expect(validateGuests(11)).toBeFalsy()
})

test("valid guests", () => {
    expect(validateGuests(3)).toBeTruthy()
})

test("invalid ocassion", () => {
    expect(validateOcassion(-1)).toBeFalsy()
    expect(validateOcassion(3)).toBeFalsy()
})

test("valid ocassion", () => {
    expect(validateOcassion(1)).toBeTruthy()
})