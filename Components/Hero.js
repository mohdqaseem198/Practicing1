import Image from "next/image";
import Card from "./Card";

const Hero = () => {
  return (
    <div className=" my-5" id = "Hero-section">
        <div className="flex items-center bg-pink-950  h-[50px]">
            <h3 className="text-2xl font-bold text-white">Our Products</h3>
        </div>
        <div className="flex flex-wrap justify-around" id="card-container">
            <Card img = "/1.png" name = "Chandan Khasab Attar"/>
            <Card img = "/2.png" name = "Mount Legend Attar"/>
            <Card img = "/3.png" name = "Rose Berry Attar"/>
            <Card img = "/4.png" name = "Tuscan Leather"/>
            <Card img = "/5.png" name = "Acqua D Gio"/>
            <Card img = "/6.png" name = "Black Opum"/>
            <Card img = "/7.png" name = "Ultra Poison"/>
            <Card img = "/8.png" name = "Week End"/>
        </div>
    </div>
  );
};

export default Hero;
