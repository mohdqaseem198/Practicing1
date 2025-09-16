
const About = () => {
    return(<div className="my-5" id="About">
        <div className="flex my-5 items-center bg-pink-950  h-[50px]">
            <h3 className="text-2xl font-bold text-white">About Us</h3>
        </div>
        <div className=" grid grid-cols-1
        md:grid md:grid-cols-3
        lg:grid lg:grid-cols-3">
            <div className="text-center">
                <h2 className=" font-bold text-2xl">
                    Digital Attarwala scent, Makes You Remarkable
                </h2>
            </div>
            <div className="col-span-2 text-center text-2xl mt-2">
                <p className=" whitespace-pre-line font-sans">
                {`Digital Attarwala is a leading perfume brand that started in 2020,
                offering premium fragrances that blend tradition with modernity.
                With a strong e-commerce presence on platforms like Amazon and Flipkart,
                we’ve become a trusted name in the Indian fragrance industry.`}
                </p>
            </div>
        </div>
    </div>)
};
export default About;