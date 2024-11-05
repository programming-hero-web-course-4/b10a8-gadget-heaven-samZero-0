import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";


const NotFound = () => {
    return (
        
        <div className="md:w-11/12 md:mx-auto flex justify-center items-center">
        <Helmet>
            <title>Not Found</title>
        </Helmet>
           <div className="flex flex-col gap-5 mt-28 items-center">
           <h1 className="text-3xl font-bold">404 Page Not Found</h1>
           <Link to='/'><button className="p-3 text-xl font-semibold rounded-xl border border-gray-200">Go to Home</button></Link>
           </div>
          
        </div>
    );
};

export default NotFound;