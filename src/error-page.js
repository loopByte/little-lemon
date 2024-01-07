import { useRouteError } from "react-router-dom"

export default function ErrorPage() {
    const error = useRouteError()
    console.log(error)

    return (
        <>
            <div style={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
            }}>
                <img
                    src="/error-image.jpg"
                    alt="Error image"
                    style={{
                        width: "auto",
                        height: "300px",
                    }}
                />
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </>
    )
}