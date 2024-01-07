import React from "react"
import { useFormik } from "formik"
import { object, date, string, number } from "yup"

export default function BookingForm({ availableTimes, occasions, dispatch, onSubmit }) {
    const reservationSchema = object({
        fullname: string().min(3, "Too short").max(20, "Too long").required("Required"),
        emailAddress: string().email("Invalid email!").required("Required"),
        resDate: date().required("Required"),
        resTime: string().required("Required"),
        guests: number().required("Required"),
        occasion: string().required("Required"),
    })

    const { errors, touched, values, handleSubmit, handleChange, handleBlur } = useFormik({
        initialValues: {
            fullname: "",
            emailAddress: "",
            resDate: "",
            resTime: "",
            guests: "",
            occasion: "",
        },
        onSubmit: values => {
            onSubmit(values)
        },
        validationSchema: reservationSchema,
    })

    const dateHandleChange = e => {
        handleChange(e)
        dispatch({
            type: "update",
            data: e.target.value
        })
    }

    return (
        <>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <h1 className="display-title">Table Reservation</h1>
            </div>
            <form className="table_res_form" onSubmit={handleSubmit}>
                <label htmlFor="fullname">Full Name <span>{touched.fullname && errors.fullname}</span></label>
                <input
                    className={errors.fullname && touched.fullname ? 'error' : ''}
                    type="text"
                    id="fullname"
                    placeholder="e.g.: John Doe"
                    required={true}
                    value={values.fullname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />

                <label htmlFor="emailAddress">Email <span>{touched.emailAddress && errors.emailAddress}</span></label>
                <input
                    className={errors.emailAddress && touched.emailAddress ? 'error' : ''}
                    type="text"
                    id="emailAddress"
                    placeholder="e.g.: johndoe@example.com"
                    required={true}
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />

                <label htmlFor="resDate">Choose date <span>{touched.resDate && errors.resDate}</span></label>
                <input
                    className={errors.resDate && touched.resDate ? 'error' : ''}
                    type="date"
                    id="resDate"
                    required={true}
                    value={values.resDate}
                    onChange={dateHandleChange}
                    onBlur={handleBlur}
                />

                <label htmlFor="resTime">Choose time <span>{touched.resTime && errors.resTime}</span></label>
                <select
                    className={errors.resTime && touched.resTime ? 'error' : ''}
                    id="resTime"
                    defaultValue={values.resTime}
                    onChange={handleChange}
                    onBlur={handleBlur}
                >
                    <option>Select a time</option>
                    {availableTimes.map((time, index) => <option key={index} value={time}>{time}</option>)}
                </select>

                <label htmlFor="guests">Number of guests <span>{touched.guests && errors.guests}</span></label>
                <input
                    className={errors.guests && touched.guests ? 'error' : ''}
                    type="number"
                    placeholder="1"
                    min="1"
                    max="10"
                    id="guests"
                    required={true}
                    value={values.guests}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />

                <label htmlFor="occasion">Occasion <span>{touched.occasion && errors.occasion}</span></label>
                <select
                    className={errors.occasion && touched.occasion ? 'error' : ''}
                    id="occasion"
                    defaultValue={values.occasion}
                    onChange={handleChange}
                    onBlur={handleBlur}
                >
                    <option>Select an occasion</option>
                    {occasions.map((occasion, index) => <option key={index} value={occasion}>{occasion}</option>)}
                </select>

                <input
                    type="submit"
                    className="btn primary"
                    value="Make Your reservation"
                    onClick={handleSubmit}
                />
            </form>
        </>
    )
}