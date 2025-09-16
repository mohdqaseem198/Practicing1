import Image from "next/image";
import Hero from "./Hero";
import Navbar from "./Navbar";
import About from "./About";
import Contact from "./Contact";
import Trending from "./Trending";
import Footer from "./Footer";

const Body = () => {
    return(<div className="bg-gray-100" id="body">
        <Navbar />
        <Hero />
        <Trending />
        <About />
        <Contact />
        <Footer />
    </div>)
};

export default Body;