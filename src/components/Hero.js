export default function Hero() {
    return (
        <div className="hero">
            <h1 className="display-title">Little Lemon</h1>
            <h2 className="sub-title">Chicago</h2>
            <p className="paragraph">
                We are a family owned Mediterranean restaurant, 
                focused on traditional recipes served with a modern twist.
            </p>
            <button role="link" aria-label="Reservee a Table" className="btn primary">Reserve a Table</button>

            <div className="image-wrapper">
                <img src="/restauranfood.jpg" alt="Restaurant food" />
            </div>
        </div>
    )
}