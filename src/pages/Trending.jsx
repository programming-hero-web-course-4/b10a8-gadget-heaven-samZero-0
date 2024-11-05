import { useEffect } from "react";
import { useState } from "react";
import Card from "../components/Card";
import { Helmet } from "react-helmet-async";


const Trending = () => {

    const [products,setProducts] = useState([]);

    useEffect(()=>{
        
        fetch('trending.json')
        .then((res)=> res.json())
        .then(data => setProducts(data))



    },[]) 


console.log(products)


    return (

        <div className="md:w-11/12 md:mx-auto">

<div className="p-3  flex flex-col   mb-5 bg-cover h-[250px] rounded-xl justify-center ">
             

            <div className="flex flex-col justify-center ">
                <div className="flex justify-center text-3xl font-bold text-white">
                    <span>Trending Products</span>
                </div>

                <div className="flex justify-center text-white  mt-5  ">
                    <span className="text-center w-1/4">Discover the latest tech everyones raving about! Our trending picks bring the best of performance, innovation, and style</span>
                </div>
                </div>

                </div>

<Helmet>
                <title>Trending Products</title>
                
            </Helmet>

<div className="md:grid md:grid-cols-4 grid-cols-1 gap-4 flex-grow mt-10 mb-10">
                    {
                        products.map((gadget,index)=> <Card key={index} gadget={gadget}></Card>)
                    }

                   
                </div>
            
        
        </div>
    );
};

export default Trending;