import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { createContext, useState } from "react";

const CartContext = createContext(null);

const MainLayout = () => {
   
    const [carts, setCarts] = useState([]);

    return (
        <CartContext.Provider value={{ carts, setCarts }}>
            <NavBar />
            <div className="min-h-[calc(100vh-289px)]">
                <Outlet />
            </div>
            <Footer />
        </CartContext.Provider>
    );
};

export default MainLayout;
export { CartContext }; 
