import {
    createBrowserRouter,
    Navigate,
    
  } from "react-router-dom";

import MainLayout from "./pages/MainLayout";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Statistics from "./pages/Statistics";
import Details from "./pages/Details";
import { Cart } from "./components/Cart";
import { WishList } from "./components/Wishlist";
import NotFound from "./pages/NotFound";
import Trending from "./pages/Trending";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
       {
        path:'/',
        element: <Home></Home>,
        loader: ()=> fetch('../products.json')

        },
       {
        path:'/dashboard',
        element: <Dashboard></Dashboard>,
        children:[
          {
            
              index: true, 
              element: <Navigate to="cart" replace /> 
           
          },
          {
            path: 'cart',
            element: <Cart></Cart>
          },
          {
            path: 'wishlist',
            element: <WishList></WishList>
          },
         
        ]

       },
       {
        path:'/stats',
        element: <Statistics></Statistics>
       },
       {
        path:'/details/:productId',
        element: <Details></Details>
       },
       {
        path: '*', 
        element: <NotFound /> 
      },
      {
        path: '/trending', 
        element: <Trending /> 
      }
      
      
       
      ]
      
    },
  ]);
  
  export default router