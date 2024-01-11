import React from "react"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import BookingForm from "../components/BookingForm"
import fetch from "../utils/fakeAPI"

describe("Test BookingForm component", () => {
    let availableTimes = fetch.fetchAPI(new Date())
    const occasions = [
        "Birthday", "Engagement", "Anniversary"
    ]

    test("form validation", async () => {
        const handleSubmit = jest.fn()
        const dispatch = (date) => {
            availableTimes = fetch.fetchAPI(new Date(date))
        }

        render(<BookingForm availableTimes={availableTimes} occasions={occasions} onSubmit={handleSubmit} dispatch={dispatch} />)

        // full name
        const fullName = screen.getByLabelText("Full Name")
        await userEvent.type(fullName, "John Doe")

        // email
        const email = screen.getByLabelText("Email")
        await userEvent.type(email, "johndoe@example.com")

        // date
        const date = screen.getByLabelText("Choose date")
        await userEvent.type(date, "2024-01-09")

        // time
        const time = screen.getByLabelText("Choose time")
        await userEvent.selectOptions(time, "19:00")

        // guests
        const guests = screen.getByTestId("guests")
        await userEvent.type(guests, "2")

        // occasion
        const occasion = screen.getByLabelText("Occasion")
        await userEvent.selectOptions(occasion, "Anniversary")

        // submit button
        const submit = screen.getByTestId("submit")
        await userEvent.click(submit)

        // assert
        expect(fullName).toHaveValue("John Doe")
        expect(email).toHaveValue("johndoe@example.com")
        expect(date).toHaveValue("2024-01-09")
        expect(time).toHaveValue("19:00")
        expect(guests).toHaveValue(2)
        expect(occasion).toHaveValue("Anniversary")
        await waitFor(() => {
            expect(handleSubmit).toHaveBeenCalled()
        })
    })
})