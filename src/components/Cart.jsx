import { BiSort } from "react-icons/bi";
import { useContext } from "react";
import { CartContext } from "../pages/MainLayout";


export function Cart() {
    const { carts } = useContext(CartContext); 
    const totalCost = carts.reduce((total, item) => total + item.price, 0);

    return(
        <div className="md:w-11/12 md:mx-auto ">
            <div className="flex justify-between mt-5">
                <span className="text-2xl font-bold">Cart</span>

                <div className="flex gap-3 items-center">
                    <span className="text-2xl font-bold">Total Cost: ${totalCost.toFixed(2)}</span>
                    
                    <div className="flex gap-2 items-center border-white rounded-xl p-3 border border-black">
                        <button>Sort by Price</button>
                        <BiSort />
                    </div>

                    <div className="flex gap-2 items-center border-white rounded-xl p-3 border border-black">
                        <button>Purchase</button>
                    </div>
                </div>
            </div>

            <div className="mt-5">
                {carts.length > 0 ? (
                    carts.map((product, index) => (
                        <div key={index} className="flex justify-between items-center p-3 border border-gray-200 rounded-lg mb-3">
                            <div className="flex items-center gap-3">
                                <img src={product.product_image} alt={product.product_title} className="w-20 h-20 object-cover rounded-lg" />
                                <div>
                                    <span className="text-lg font-semibold">{product.product_title}</span>
                                    <div>Price: ${product.price}</div>
                                </div>
                            </div>
                            <button className="text-red-500 font-bold">Remove</button>
                        </div>
                    ))
                ) : (
                    <div className="text-center text-gray-500">Your cart is empty</div>
                )}
            </div>
        </div>
    );
}
