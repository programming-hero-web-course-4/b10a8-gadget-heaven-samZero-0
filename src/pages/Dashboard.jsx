import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div>
        <div  className="md:w-11/12 md:mx-auto md:h-[250px] bg-cover flex flex-col justify-center  ">

                <div className="flex flex-col relative">
                <div className="flex justify-center text-3xl font-bold text-white">
                    <span>Dashboard</span>
                </div>

                <div className="flex justify-center text-white  mt-5">
                    <span className="text-center w-1/2">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all</span>
                </div>

                <div className="flex justify-center gap-3 mt-10">
                    <NavLink to='cart' className={({ isActive }) =>
                                isActive ? "active p-3 rounded-xl bg-white border border-white text-black w-[100px] text-center text-lg font-bold" : "p-3 rounded-xl bg-cover border border-white text-white w-[100px] text-center text-lg"
                            }>
                    Cart
                    </NavLink>


                    <NavLink to='wishlist' className={({ isActive }) =>
                                isActive ? "active p-3 rounded-xl bg-white border border-white text-black w-[100px] text-center text-lg font-bold" : "p-3 rounded-xl bg-cover border border-white text-white w-[100px] text-center text-lg"
                            }>
                    Wishlist
                    </NavLink>

                </div>

                </div>
                
        </div>
        <Outlet></Outlet>
        </div>
    
    );
};

export default Dashboard;