import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { createContext, useState } from "react";

const CartContext = createContext(null);
const WishlistContext = createContext(null);
const CartCountContext = createContext(null);
const WishCountContext = createContext(null);

const MainLayout = () => {
    const [carts, setCarts] = useState([]);
    const [wishlists, setWishlists] = useState([]);
    const [cartCount,setCartCount] = useState(0);
    const [wishCount,setWishCount] = useState(0);

    return (
        <WishCountContext.Provider value={{wishCount,setWishCount}}>
        <CartCountContext.Provider value={{cartCount,setCartCount}}>
        <WishlistContext.Provider value={{ wishlists, setWishlists }}>
            <CartContext.Provider value={{ carts, setCarts }}>
                <NavBar />
                <div className="min-h-[calc(100vh-289px)]">
                    <Outlet />
                </div>
                <Footer />
            </CartContext.Provider>
        </WishlistContext.Provider>
        </CartCountContext.Provider>
        </WishCountContext.Provider>
       
    );
};

export default MainLayout;
export { CartContext, WishlistContext,CartCountContext,WishCountContext };
