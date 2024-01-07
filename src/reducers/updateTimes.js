import fetch from "../utils/fakeAPI"

export default function availableTimesReducer(times, { type, data }) {
    switch (type) {
        case 'update': {
            return fetch.fetchAPI(new Date(data))
        }
        default: {
            throw new Error("Invalid action")
        }
    }
}