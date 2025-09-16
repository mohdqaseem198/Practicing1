import Image from "next/image";

const Card = ({img, name}) => {

    return(<div className="w-[300px] h-auto rounded-2xl my-5 bg-white" id="card">
            <Image className="rounded-2xl" src={img} width={300} height={300} alt="Img"/>
        <div className="p-2">
            <div className="flex justify-between">
                <p className="px-2 rounded-2xl bg-gray-300 ">ATTAR</p>
                <span className="px-2 rounded-2xl bg-gray-300 ">⭐3.8+</span>
            </div>
            <h2 className="fond-bold text-2xl">{name}</h2>
            <div className="flex justify-end">
                <p className="px-2 rounded-b-2xl rounded-tl-2xl w-[100px] mr-0 pr-0 text-white bg-green-600">30% OFF</p>
            </div>
        </div>
        <a href="#Contact" className="block text-center border-blue-400 border-1 w-full p-1 rounded-2xl cursor-pointer">Contact Us</a>
    </div>)
};

export default Card;