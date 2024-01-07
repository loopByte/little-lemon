export default function Card({ image, title, price, description }) {
    return (
        <article className="specials_card">
            <div className="image_wrapper">
                <img src={image} alt={title} />
            </div>
            <h3 className="card-title">{title}</h3>
            <span className="highlight">{price}</span>
            <p className="paragraph">{description}</p>
            <span className="order">Order a delivery</span>
        </article>
    )
}