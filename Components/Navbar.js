import { Nabla } from "next/font/google";

const Navbar = () => {
    return(
        <div id="NavBar">
            <div className="flex flex-row justify-around bg-pink-950 text-white">
                <div>
                    <a className="cursor-pointer">Home</a>
                </div>
                <div>
                    <a href="#About" className="cursor-pointer">About</a>
                </div>
                <div>
                    <a href="#Trending" className="cursor-pointer">Trending</a>
                </div>
                <div>
                    <a href="#Contact" className="cursor-pointer">Contact Us</a>
                </div>
            </div>
            <div>
                <h2 className="font-bold text-2xl text-center m-2">Digital Attarwala</h2>
            </div>
        </div>
    )
};

export default Navbar;