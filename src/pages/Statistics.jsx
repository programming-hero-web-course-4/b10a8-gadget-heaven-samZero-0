import { Helmet } from "react-helmet-async";

const Statistics = () => {
    return (
        <div className="md:w-11/12 md:mx-auto">
        <div className="p-3  flex flex-col   mb-5 bg-cover h-[250px] rounded-xl justify-center ">
             <Helmet>
                <title>Statistics</title>
            </Helmet>

            <div className="flex flex-col justify-center ">
                <div className="flex justify-center text-3xl font-bold text-white">
                    <span>Statistics</span>
                </div>

                <div className="flex justify-center text-white  mt-5  ">
                    <span className="text-center w-1/4">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all</span>
                </div>
                </div>

                
        </div>

        <div className="flex flex-col gap-4">
        <span className="text-3xl font-bold">Statistics</span>

        <div className="flex justify-center mt-10">
        <span className="text-cover text-5xl font-bold">No Data to show</span>
        </div>

        </div>

        </div>
    );
};

export default Statistics;