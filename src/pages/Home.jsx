import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Explore from "../components/Explore";
import Details from "./Details";



const Home = () => {

const gadgets = useLoaderData() ;



    
    return (
        <>
       <div className="flex flex-col gap-4">
        <Banner></Banner>
        <div className="md:h-[350px]"></div>
        <Explore gadgets={gadgets}></Explore>
        <Details></Details>
       </div>

       
       </>
      
    );
};

export default Home;