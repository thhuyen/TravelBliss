import Banner from "~/components/Layout/components/Banner";
import Footer from "~/components/Layout/components/Footer";
import Header from "~/components/Layout/components/Header";
import About from "./About";
import Chatbot from "./Chatbox";
import Destination from "./Destination";
import News from "./News";
import WhyChoose from "./WhyChoose";

function HomePage() {
    return (
        <>
            <Header />
            <Banner />
            <About />
            <News />
            <Destination />
            <WhyChoose />
            <Chatbot />
            <Footer />
        </>
    );
}

export default HomePage;
