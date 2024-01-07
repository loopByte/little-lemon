import { useReducer } from "react"
import Header from "../components/Header"
import BookingForm from "../components/BookingForm"
import Footer from "../components/Footer"

import initializeTimes from "../reducers/initializeTimes"
import updateTimes from "../reducers/updateTimes"

import fetch from "../utils/fakeAPI"

export default function Booking() {
    const occasions = [
        "Birthday", "Engagement", "Anniversary"
    ]

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes())

    const handleDateChange = date => dispatch({ type: "update", data: date })

    return (
        <>
            <Header />
            <BookingForm
                availableTimes={availableTimes}
                occasions={occasions}
                dispatch={dispatch}
            />
            <Footer />
        </>
    )
}