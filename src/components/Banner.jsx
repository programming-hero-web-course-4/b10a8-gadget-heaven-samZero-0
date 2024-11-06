import { Link } from "react-router-dom";
import BannerImage from "./BannerImage";


const Banner = () => {
    return (
        <div>

        <div className="md:w-11/12 md:mx-auto  bg-cover flex flex-col justify-center rounded-b-xl p-24 pb-48 ">
            
        <div className="flex flex-col gap-4 items-center  ">
            <span className=" text-center md:text-5xl text-xl font-bold text-white">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</span>
            <span className="w-10/12 text-center text-base font-light text-gray-200 md:mt-5">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</span>

            <Link to='/dashboard'className="bg-white text-cover p-3 text-xl font-bold rounded-xl mb-10 mt-5">
            <button >Shop Now</button>
            </Link>
        </div>

        
        

        </div>
        <div className="md:w-11/12 md:mx-auto flex justify-center relative -top-48">
        <BannerImage></BannerImage>
        </div>

        </div>
    );
};


export default Banner;