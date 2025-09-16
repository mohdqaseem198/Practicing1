import Card from "./Card";
import Contact from "./Contact";

const Trending = () => {
    return(
        <div className="" id="Trending">
            <div className="flex items-center bg-pink-950  h-[50px]">
                <h3 className="text-2xl font-bold text-white">Trending</h3>
            </div>
            <div className="flex flex-wrap justify-around">
            <Card img = "/12.png" name = "Zam Zam Attar"/>
            <Card img = "/11.png" name = "Madina Attar"/>
            <Card img = "/10.png" name = "For Ever Attar"/>
            <Card img = "/13.png" name = "Musk Leather"/>
            
        </div>
        </div>
    )
};

export default Trending;