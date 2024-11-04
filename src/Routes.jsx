import {
    createBrowserRouter,
    
  } from "react-router-dom";

import MainLayout from "./pages/MainLayout";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Statistics from "./pages/Statistics";
import Details from "./pages/Details";
import { Cart } from "./components/Cart";
import { WishList } from "./components/Wishlist";


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
            path: 'cart',
            element: <Cart></Cart>
          },
          {
            path: 'wishlist',
            element: <WishList></WishList>
          }
         

        ]

       },
       {
        path:'/stats',
        element: <Statistics></Statistics>
       },
       {
        path:'/details/:productId',
        element: <Details></Details>
       }
      ]
    },
  ]);
  
  export default router