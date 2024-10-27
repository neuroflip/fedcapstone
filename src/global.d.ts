export {};

declare global {
    interface Window {
        fetchAPI: (Date) => Array<string>
        submitAPI: (any) => boolean
    }
}
