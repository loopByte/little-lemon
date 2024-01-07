import TestimonialCard from "./TestimonialCard"

export default function Testimonials() {
    const data = [
        { name: "Janice", rating: 4, avatar: "/08c5772c481233a30a46aeca552132053604e2a8.jpg", message: "Hummus heaven! Creamy, garlicky, pita perfection." },
        { name: "Jamal", rating: 4, avatar: "/3ca412176fe4306326b04a78b51fa148c49f99c1.jpg", message: "Moussaka magic. Layers of eggplant, meat, béchamel. Divine!" },
        { name: "Katrina", rating: 5, avatar: "/08c5772c481233a30a46aeca552132053604e2a8 (3).jpg", message: "Calamari crunch. Crispy, light, addictive. Best in town!" },
        { name: "Joel", rating: 4, avatar: "/08c5772c481233a30a46aeca552132053604e2a8 (4).jpg", message: "Baklava bliss. Honey, nuts, flaky layers. Can't stop won't stop." },
    ]

    return (
        <div className="testimonials">
            <h2 className="sub-title">Testimonials</h2>
            <aside className="content">
                {data.map(({ name, rating, avatar, message }, index) => <TestimonialCard key={index} name={name} rating={rating} avatar={avatar} message={message} />)}
            </aside>
        </div>
    )
}