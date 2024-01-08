export default function About() {
    return (
        <article className="about">
            <div className="content">
                <h1 className="display-title">Little Lemon</h1>
                <h2 className="sub-title">Chicago</h2>
                <p  className="paragraph">
                    Little Lemon is a family affair, 
                    born from a shared love of good food, 
                    warm hospitality, and the simple pleasures 
                    of life. Our story began with Yia Yia (that's 
                    grandma in Greek!), whose legendary recipes are the 
                    beating heart of our menu. Each dish whispers of generations 
                    past, infused with the fragrant herbs and bright flavors of her 
                    Aegean island home.
                </p>
            </div>

            <div className="images">
                <img className="image_1" src="/restaurant.jpg" alt="Restaurant interior" />
                <img className="image_2" src="/restaurant chef B.jpg" alt="Restaurant chef" />
            </div>
        </article>
    )
}