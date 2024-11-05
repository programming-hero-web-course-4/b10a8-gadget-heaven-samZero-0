import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { CartContext, CartCountContext, WishCountContext, WishlistContext } from "./MainLayout";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import ReactStars from "react-rating-stars-component";
import { Helmet } from "react-helmet-async";

const Details = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [trendingProduct, setTrendingProduct] = useState(null);
    const { carts, setCarts } = useContext(CartContext); 
    const {  setCartCount } = useContext(CartCountContext);
    const { setWishCount } = useContext(WishCountContext);
    const { wishlists, setWishlists } = useContext(WishlistContext);

    const handleAddToCart = (product) => {
        setCarts([...carts, product]);
        toast.success(`${product.product_title} is added to cart!`, {
            position: "top-center",
            autoClose: 1500,
        });
        setCartCount((prevCount) => prevCount + 1);
    };

    const handleWishlist = (product) => {
        const isInWishlist = wishlists.some(item => item.product_id === product.product_id);
        if (!isInWishlist) {
            setWishlists([...wishlists, product]);
            toast.success(`${product.product_title} is added to wishlist!`, {
                position: "top-center",
                autoClose: 1500,
            });
            setWishCount((prevCount) => prevCount + 1);
        } else {
            toast.error(`${product.product_title} is already added!`);
        }
    };

    useEffect(() => {
        fetch(`../products.json`)
            .then((res) => res.json())
            .then((data) => {
                const foundProduct = data.find((item) => item.product_id === productId);
                setProduct(foundProduct);
            });
    }, [productId]);

    useEffect(() => {
        fetch(`../trending.json`)
            .then((res) => res.json())
            .then((data) => {
                const foundTrendingProduct = data.find((item) => item.product_id === productId);
                setTrendingProduct(foundTrendingProduct);
            });
    }, [productId]);

    
    if (!product && !trendingProduct) {
        return;
    }

    const ratingConfig = {
        size: 30,
        value: product ? `${product.rating}` : `${trendingProduct.rating}`,
        edit: false,
    };

    return (
        <div className="p-3 flex flex-col md:w-11/12 md:mx-auto mb-5 bg-cover h-[250px] rounded-xl ">
            <ToastContainer />
            <Helmet>
                <title>{product ? product.product_title : trendingProduct.product_title} Details</title>
            </Helmet>

            
            {product ? (
                <div className="bg-gray-100 h-[500px] w-2/3 md:absolute rounded-xl md:top-[25%] md:left-[300px] flex items-center">
                    <div className="w-1/2 p-3 flex justify-center">
                        <img src={product.product_image} alt="" className="h-[380px] w-full rounded-xl object-cover" />
                    </div>
                    <div className="flex flex-col gap-3">
                        <span className="text-2xl font-bold">{product.product_title}</span>
                        <span className="text-xl font-bold">Price: ${product.price}</span>
                        {product.availability ? (
                            <div className="bg-green-200 border-2 border-green-300 rounded-xl w-1/4 text-center text-lg font-semibold">In Stock</div>
                        ) : (
                            <div className="bg-red-200 border-2 border-red-800 rounded-xl w-1/2 text-center">Not Available</div>
                        )}
                        <span className="text-black text-lg">{product.description}</span>
                        <div>
                            <span className="text-xl font-bold">Specifications:</span>
                            <ol style={{ listStyleType: 'decimal' }} className="ml-4">
                                {product.Specification.map((item, index) => <li className="text-lg mt-2" key={index}>{item}</li>)}
                            </ol>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold">Rating</span>
                            <div className="flex items-center gap-5">
                                <ReactStars {...ratingConfig} />
                                <span className="text-base font-semibold">{product.rating}</span>
                            </div>
                        </div>
                        <div className="flex gap-4 items-center">
                            <div onClick={() => handleAddToCart(product)} className="flex items-center bg-cover rounded-xl cursor-pointer">
                                <button className="p-3 text-white">Add to Cart</button>
                                <CiShoppingCart className="mr-4 text-2xl font-bold text-white" />
                            </div>
                            <div
                                onClick={() => { const isInWishlist = wishlists.some(item => item.product_id === product.product_id); if (!isInWishlist) handleWishlist(product); }}
                                className={`p-3 border border-gray-300 rounded-full ${wishlists.some(item => item.product_id === product.product_id) ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}>
                                <FaRegHeart />
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                trendingProduct && (
                    <div className="bg-gray-100 h-[500px] w-2/3 md:absolute rounded-xl md:top-[25%] md:left-[300px] flex items-center">
                    <div className="w-1/2 p-3 flex justify-center">
                        <img src={trendingProduct.product_image} alt="" className="h-[380px] w-full rounded-xl object-cover" />
                    </div>
                    <div className="flex flex-col gap-3">
                        <span className="text-2xl font-bold">{trendingProduct.product_title}</span>
                        <span className="text-xl font-bold">Price: ${trendingProduct.price}</span>
                        {trendingProduct.availability ? (
                            <div className="bg-green-200 border-2 border-green-300 rounded-xl w-1/4 text-center text-lg font-semibold">In Stock</div>
                        ) : (
                            <div className="bg-red-200 border-2 border-red-800 rounded-xl w-1/2 text-center">Not Available</div>
                        )}
                        <span className="text-black text-lg">{trendingProduct.description}</span>
                        <div>
                            <span className="text-xl font-bold">Specifications:</span>
                            <ol style={{ listStyleType: 'decimal' }} className="ml-4">
                                {trendingProduct.Specification.map((item, index) => <li className="text-lg mt-2" key={index}>{item}</li>)}
                            </ol>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold">Rating</span>
                            <div className="flex items-center gap-5">
                                <ReactStars {...ratingConfig} />
                                <span className="text-base font-semibold">{trendingProduct.rating}</span>
                            </div>
                        </div>
                        <div className="flex gap-4 items-center">
                            <div onClick={() => handleAddToCart(trendingProduct)} className="flex items-center bg-cover rounded-xl cursor-pointer">
                                <button className="p-3 text-white">Add to Cart</button>
                                <CiShoppingCart className="mr-4 text-2xl font-bold text-white" />
                            </div>
                            <div
                                onClick={() => { const isInWishlist = wishlists.some(item => item.product_id === trendingProduct.product_id); if (!isInWishlist) handleWishlist(trendingProduct); }}
                                className={`p-3 border border-gray-300 rounded-full ${wishlists.some(item => item.product_id === trendingProduct.product_id) ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}>
                                <FaRegHeart />
                            </div>
                        </div>
                    </div>
                </div>
                )
            )}
        </div>
    );
};

export default Details;
