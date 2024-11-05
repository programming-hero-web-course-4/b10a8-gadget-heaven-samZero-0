import { useContext } from "react";
import {  WishlistContext } from "../pages/MainLayout";
import { ToastContainer } from "react-toastify";
import { TbXboxX } from "react-icons/tb";




export function WishList(){

    const { wishlists } = useContext(WishlistContext); 
 

    
    return(
        <div className="md:w-11/12 md:mx-auto mt-5">
             <ToastContainer />

             <div className="flex justify-between mt-5">
                <span className="text-2xl font-bold">Wishlist</span>

               
            </div>

          <div className="mt-5">
            
          {
                wishlists.map((product,index) => <div key={index} className="w-full rounded-xl p-3 border border-gray-200 flex flex-col gap-3 mt-5 mb-5">
                    
                    
                  <div className="flex ">

                <div className="w-1/6">
                    <img src={product.product_image} alt="" className="w-11/12 rounded-xl h-[200px] object-cover"/>
                </div>


                 <div className="flex justify-between w-full">

                 <div className="flex flex-col gap-3">
                 <div>
                        <span className="text-3xl font-bold">{product.product_title}</span>
                    </div>

                    <div>
                        <span className="text-xl font-semibold">Description: <span className="font-light">{product.description}</span></span>
                    </div>

                    <div>
                        <span className="text-xl font-semibold">Price: ${product.price}</span>
                    </div>

                 

                  </div>

                  <div className="flex ">
                                    <button className="text-5xl text-red-600"><TbXboxX></TbXboxX></button>
                                </div>
                 </div>
                  
                 </div>



                </div>)
            }
          </div>
        </div>
    )
}