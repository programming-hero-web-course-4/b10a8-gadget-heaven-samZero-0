import { useEffect, useState } from "react";
import Card from "./Card";



const Explore = ({gadgets}) => {

    
    const [categories,setCategories]= useState({ categories: [] });

    const [selected,setSelected] = useState('');


    useEffect(()=>{
        fetch('categories.json')
        .then(res=> res.json())
        .then(data=> setCategories(data))
        
    },[])

    // console.log(categories);


    const handleCategory= (category) =>{
        setSelected(category);
    }

   let filtered = selected?gadgets.filter(gadget => gadget.category === selected) : gadgets;

    

    return (
        <div className="md:w-11/12 md:mx-auto mb-5">

            <div className="flex justify-center">
                <span className="font-bold text-3xl">Explore Cutting-Edge Gadgets</span>
            </div>

            <div className="md:flex md:flex-row flex-col gap-12 mt-10">

                {/* category section */}

               <div   className="md:w-1/4 flex flex-col gap-8 border border-gray-300 p-3 rounded-xl h-[500px] ">
                        <div onClick={() => handleCategory('')} className={`border border-gray-300 rounded-xl p-3 cursor-pointer text-2xl text-center  ${selected === '' ? 'bg-cover text-white' : 'bg-slate-100'}`}>All Products</div>
                    { 
                        categories.categories.map((category,index)=> <div onClick={()=>handleCategory(category)} className={`border border-gray-300 rounded-xl p-3 cursor-pointer text-2xl text-center  ${selected === category ? 'bg-cover text-white' : 'bg-slate-100'}`} key={index}>{category}</div>)
                    }
               </div>


                {/* cards */}
                <div className="md:grid md:grid-cols-3 grid-cols-1 gap-4 flex-grow">
                    {
                        filtered.map((gadget,index)=> <Card key={index} gadget={gadget}></Card>)
                    }

                   
                </div>
            </div>




        </div>
    );
};

export default Explore;