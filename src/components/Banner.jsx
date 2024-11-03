

const Banner = () => {
    return (

        <div className="md:w-11/12 md:mx-auto md:h-[694px] bg-cover flex flex-col justify-center  ">
            
        <div className="flex flex-col gap-4 items-center md:relative ">
            <span className="md:w-1/2 text-center md:text-5xl text-xl font-bold text-white">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</span>
            <span className="w-10/12 text-center text-base font-light text-gray-200 md:mt-5">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</span>

            <button className="bg-white text-cover p-3 text-xl font-bold rounded-xl mt-5">Shop Now</button>
        </div>

        <div className="md:absolute md:top-[580px] md:left-[550px] border-2 border-white rounded-xl p-3">
            <img src="/public/banner.jpg" alt="" className="md:h-[500px] h-[300px] object-cover"/>
        </div>

        </div>
    );
};

export default Banner;