import { useReducer } from "react"
import { useNavigate } from "react-router-dom"

import Header from "../components/Header"
import BookingForm from "../components/BookingForm"
import Footer from "../components/Footer"

import initializeTimes from "../reducers/initializeTimes"
import updateTimes from "../reducers/updateTimes"

import fetch from "../utils/fakeAPI"

export default function Booking() {
    const navigate = useNavigate()

    const occasions = [
        "Birthday", "Engagement", "Anniversary"
    ]

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes())

    const handleSubmit = (formData) => {
        const result = fetch.submitAPI(formData)

        if (result) {
            navigate("/booking-confirmation", { state: formData })
        }
    }

    return (
        <>
            <Header />
            <BookingForm
                availableTimes={availableTimes}
                occasions={occasions}
                dispatch={dispatch}
                onSubmit={handleSubmit}
            />
            <Footer />
        </>
    )
}