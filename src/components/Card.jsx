import { Link } from "react-router-dom";


const Card = ({gadget}) => {

    const {product_title,product_image,price,rating,product_id} = gadget;

    return (

        <div className="flex flex-col gap-4 p-3 border border-gray-400 rounded-xl w-full">

            <div className="w-full flex justify-center">
        <img src={product_image} alt=""  className="w-11/12 h-[250px] object-cover rounded-xl "/></div>

        <span className="font-bold text-xl">{product_title}</span>

        <span className="text-gray-600">Price: {price} Tk.</span>

        <div className="flex ">
        
       <Link to={`/details/${product_id}`} className="w-1/3 p-2 border border-cover text-base font-bold rounded-xl text-cover bg-white ">
       <button  >View Details</button></Link>

        </div>
        

        </div>
    );
};

export default Card;