import React from "react"
import { render, screen } from "@testing-library/react"
import { userEvent } from "@testing-library/user-event"
import BookingForm from "../components/BookingForm"

describe("Test BookingForm", () => {
    const bookingRender = render(<BookingForm availableTimes={[]} occasions={[]} />)
    test("Renders the BookingForm heading", () => {
        const headingElement = screen.getByText("Table Reservation")
        expect(headingElement).toBeInTheDocument()
    })

    // test()
})