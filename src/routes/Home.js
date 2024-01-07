import Header from "../components/Header";
import Hero from "../components/Hero";
import Specials from "../components/Specials";
import Testimonials from "../components/Testimonials";
import About from '../components/About';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <Specials />
            <Testimonials />
            <About />
            <Footer />
        </>
    )
}