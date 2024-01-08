import { useLocation } from "react-router-dom"

import Header from "../components/Header"
import Footer from "../components/Footer"


export default function BookingConfirmation() {
    const { state } = useLocation()

    const rowStyle = {
        display: 'flex',
        justifyContent: 'space-between',
    }

    return (
        <>
            <Header />
            <article
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "20px",
                }}
            >
                <h1 className="display-title" style={{ textAlign: "center", margin: "10px", }}>Confirmation of Table Reservation</h1>
                <p
                    className="paragraph"
                    style={{
                        WebkitLineClamp: "2",
                        display: "block",
                        maxWidth: "700px",
                        textAlign: "center",
                        padding: "20px",
                    }}
                >
                    Your table has been successfully booked! An email has been sent to your provided address with the details.
                    We are looking forward to dine at our restaurant!
                </p>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        maxWidth: "600px",
                        gap: "20px",
                        padding: "20px",
                    }}
                >
                    <h2 className="section-title">Table Reservation Details</h2>
                    <div style={rowStyle}>
                        <span className="section-categories">Name:</span>
                        <span className="paragraph">{state.fullname}</span>
                    </div>
                    <div style={rowStyle}>
                        <span className="section-categories">Email:</span>
                        <span className="paragraph">{state.emailAddress}</span>
                    </div>
                    <div style={rowStyle}>
                        <span className="section-categories">Date:</span>
                        <span className="paragraph">{state.resDate}</span>
                    </div>
                    <div style={rowStyle}>
                        <span className="section-categories">Time:</span>
                        <span className="paragraph">{state.resTime}</span>
                    </div>
                    <div style={rowStyle}>
                        <span className="section-categories">Guests:</span>
                        <span className="paragraph">{state.guests}</span>
                    </div>
                    <div style={rowStyle}>
                        <span className="section-categories">Occasion:</span>
                        <span className="paragraph">{state.occasion}</span>
                    </div>
                </div>
            </article>
            <Footer />
        </>
    )
}