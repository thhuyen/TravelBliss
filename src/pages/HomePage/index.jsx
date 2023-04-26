import React from "react";
import Banner from "~/components/Layout/components/Banner";
import FooterMini from "~/components/Layout/components/FooterMini";
import Header from "~/components/Layout/components/Header";
import About from "./About";
import Destination from "./Destination";
import News from "./News";
import WhyChoose from "./WhyChoose";

function HomePage() {
    return (
        <>
            <Header />
            <Banner />
            {/* <About />
            <News />
            <Destination />
            <WhyChoose />
            <FooterMini /> */}
        </>
    );
}

export default HomePage;
