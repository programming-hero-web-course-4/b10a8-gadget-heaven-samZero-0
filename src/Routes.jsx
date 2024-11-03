import {
    createBrowserRouter,
    
  } from "react-router-dom";

import MainLayout from "./pages/MainLayout";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Statistics from "./pages/Statistics";
import Details from "./pages/Details";


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
        element: <Dashboard></Dashboard>

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