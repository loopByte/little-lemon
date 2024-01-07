export default function TestimonialCard({ name, rating, avatar, message }) {
    return (
        <article className="testimonial_card">
            <div className="rating">
                <img src="/08c5772c481233a30a46aeca552132053604e2a8 (2).jpg" alt="Rating yellow star" />
                <span className="highlight">{rating}</span>
            </div>
            <div className="user">
                <img src={avatar} alt="user avatar" />
                <span className="card-title">{name}</span>
            </div>
            <p className="paragraph">{message}</p>
        </article>
    )
}