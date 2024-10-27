
export const getDateToISOString = (date: Date): string => {
    let result = ''
    try {
        result = date.toISOString().split('T')[0]
    } catch(e) {

    }
    return result
}