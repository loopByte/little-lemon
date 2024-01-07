import fetch from "../utils/fakeAPI"

export default function initializeTimes() {
    return fetch.fetchAPI(new Date())
}