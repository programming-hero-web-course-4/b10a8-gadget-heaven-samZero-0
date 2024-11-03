import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
       
        fetch(`../products.json`) 
            .then((res) => res.json())
            .then((data) => {
                const foundProduct = data.find((item) => item.product_id === productId);
                setProduct(foundProduct);
            });
    }, [productId]);

    if (!product) {
        return 
    }

    return (
        <div className="p-3  flex flex-col md:w-11/12 md:mx-auto mb-5 bg-cover h-[250px] ">

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
                    
                  
                    {product.availability ? <div className="bg-green-200 border-2 border-green-800 rounded-xl w-1/2 text-center">In Stock</div> : <div className="bg-red-200 border-2 border-red-800 rounded-xl w-1/2 text-center ">Not Available</div> }

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

                    <div>
                        <button className="p-3 bg-cover rounded-xl text-white">Add to Cart</button>
                    </div>



                    </div>

                </div>
        </div>
    );
};

export default Details;
