import { BiSort } from "react-icons/bi";
import { useContext, useEffect, useState } from "react";
import { CartContext, CartCountContext } from "../pages/MainLayout";
import { TbXboxX } from "react-icons/tb";
import { ToastContainer } from "react-toastify";
import { useNavigate } from 'react-router-dom';

export function Cart() {
    const { carts, setCarts } = useContext(CartContext); 
    const {setCartCount} = useContext(CartCountContext);
    const [totalCost, setTotalCost] = useState(0);
    
    const [purchasedCarts, setPurchasedCarts] = useState([]); 
    const navigate = useNavigate();

    useEffect(() => {
        const calculatedTotal = carts.reduce((total, item) => total + item.price, 0);
        setTotalCost(calculatedTotal);
        
        
    }, [carts]);

    const handleModalClose = () => {
        navigate('/');    
    }

    const handlePurchase = () => {
        
        setPurchasedCarts([...carts]);
        document.getElementById('my_modal_5').showModal();
        setTotalCost(0); 
        setCarts([]);    
        setCartCount(0);
    }


    const handleSort = ()=>{
        const sortedCart = [...carts].sort((a, b) => b.price - a.price);
        setCarts(sortedCart)
        
    }


    return (
        <div className="md:w-11/12 md:mx-auto ">
            <div className="md:flex justify-between mt-5">
                <span className="text-2xl font-bold">Cart</span>

                <div className="flex gap-3 items-center">
                    <span className="text-2xl font-bold">Total Cost: ${totalCost.toFixed(2)}</span>







                    
                    <div onClick={()=>handleSort()} className="flex gap-2 items-center rounded-2xl p-3 border border-cover cursor-pointer">
                        <button className="text-cover font-bold">Sort by Price</button>
                        <BiSort className="text-cover font-extrabold"/>
                    </div>






                  <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <div className="flex justify-center mt-4 mb-4">
                        <img src='/Group.png' alt="" />
                    </div>
                    <h3 className="font-bold text-xl flex justify-center">Payment Successful</h3>
                    <p className="mt-5 flex justify-center">Thanks for purchasing</p>
                    
                    <div className="mt-3 flex flex-col items-center">
                        {purchasedCarts.length > 0 ? (
                            <span className="font-semibold">
                                Total Price: ${purchasedCarts.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
                            </span>
                        ) : (
                            ''
                        )}
                    </div>

                    <div className="w-full flex justify-center">
                        <button onClick={handleModalClose} className="btn w-full mt-5">Close</button>
                    </div>
                </div>
                       </dialog>

                    <div onClick={carts.length > 0 ? handlePurchase : undefined} className={`flex gap-2 items-center rounded-2xl p-3  text-white bg-cover font-bold ${carts.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}>
                        <button disabled={carts.length === 0}>Purchase</button>
                    </div>
                </div>
            </div>

            <div className="mt-5">
                <ToastContainer />
                {carts.length > 0 ? (
                    carts.map((product, index) => (
                        <div key={index} className="w-full rounded-xl p-3 border border-gray-200 flex flex-col gap-2 mt-5 mb-5">
                            <div className="md:flex">
                                <div className="md:w-1/6">
                                    <img src={product.product_image} alt="" className="md:w-11/12 rounded-xl h-[200px] object-cover" />
                                </div>

                                <div className="flex justify-between w-full">
                                    <div className="flex flex-col gap-3">
                                        <div>
                                            <span className="text-3xl font-bold">{product.product_title}</span>
                                        </div>

                                        <div>
                                            <span className="text-xl font-semibold"><span className="font-light">{product.description}</span></span>
                                        </div>

                                        <div>
                                            <span className="text-xl font-semibold">Price: ${product.price}</span>
                                        </div>
                                    </div>

                                    <div className="flex">
                                        <button className="text-5xl text-red-600"><TbXboxX /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center text-gray-500">Your cart is empty</div>
                )}
            </div>
        </div>
    );
}
