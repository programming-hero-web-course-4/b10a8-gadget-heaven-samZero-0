import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { CartContext } from "./MainLayout";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Details = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const { carts, setCarts } = useContext(CartContext); 

    const handleAddToCart = (product) => {
        setCarts([...carts, product]);
        console.log(product);
        toast.success("This is a success alert!");

    };

    useEffect(() => {
        fetch(`../products.json`)
            .then((res) => res.json())
            .then((data) => {
                const foundProduct = data.find((item) => item.product_id === productId);
                setProduct(foundProduct);
            });
    }, [productId]);

    if (!product) {
        return ;
    }

    // console.log(product.product_id);
    return (
        
        <div className="p-3  flex flex-col md:w-11/12 md:mx-auto mb-5 bg-cover h-[250px] ">
 <ToastContainer />
                <div className="flex flex-col relative">
                <div className="flex justify-center text-3xl font-bold text-white">
                    <span>Product Details</span>
                </div>

                <div className="flex justify-center text-white  mt-5">
                    <span className="text-center w-1/2">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all</span>
                </div>
                </div>


                <div className="bg-gray-100 h-[500px] w-2/3 md:absolute rounded-xl md:top-[199px] md:left-[300px] flex items-center ">

                    {/* image section */}
                    <div className="w-1/2 p-3 flex justify-center">
                        <img src={product.product_image} alt="" className="h-[380px] w-full rounded-xl object-cover"/>
                    </div>

                    {/* info section */}

                    <div className="flex flex-col gap-3">
                    <span className="text-2xl font-bold">{product.product_title}</span>
                    <span className="text-xl font-bold">Price: ${product.price}</span>
                    
                  
                    {product.availability ? <div className="bg-green-200 border-2 border-green-800 rounded-xl w-1/3 text-center text-lg font-semibold">In Stock</div> : <div className="bg-red-200 border-2 border-red-800 rounded-xl w-1/2 text-center ">Not Available</div> }

                    <span className="text-black">{product.description}</span>

                    <div>
                        <span className="text-xl font-bold">Specifications:</span>
                        {
                            product.Specification.map((item,index) => <div className="text-lg mt-2" key={index}>{item}</div>
                               
                            )
                        }
                    </div>

                    <div>
                        <span className="font-bold">Rating</span>
                    </div>

                    <div className="flex gap-4 items-center">
                    <div className="flex  items-center bg-cover rounded-xl">
                        <button onClick={()=>handleAddToCart(product)} className="p-3  text-white">Add to Cart</button>
                        <CiShoppingCart className="mr-4 text-2xl font-bold text-white"></CiShoppingCart> 
                        
                    </div>
                    

                       
                    <div className="p-3 border border-gray-300 rounded-full cursor-pointer">
                    <FaRegHeart />
                    </div>

                    </div>


                    </div>

                </div>
                
        </div>
        
    );
};

export default Details;
