import Card from "./Card";

export default function Specials() {
    const specials = [
        { title: "Greek salad", image: "/greek salad.jpg", price: "$12.99", description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. " },
        { title: "Bruchetta", image: "/bruchetta.jpg", price: "$5.99", description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. " },
        { title: "Lemon Dessert", image: "/lemon dessert.jpg", price: "$5.00", description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined." },
    ]

    return (
        <div className="specials">
            <div className="title_button">
                <h2 className="sub-title">Specials</h2>
                <button role="link" aria-label="Online Menu" className="btn primary">Online Menu</button>
            </div>
            <div className="cards">
                {specials.map(({ title, image, price, description }, index) => <Card key={index} title={title} image={image} price={price} description={description} />)}
            </div>
        </div>
    )
}