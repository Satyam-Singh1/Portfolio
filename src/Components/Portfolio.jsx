import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
export default function Portfolio() {
   
 const portfolios = [
   {
    id:1,
    source:arrayDestruct
   },
   {
    id:2,
    source:reactSmooth
   },
   {
    id:3,
    source:reactWeather
   },
   {
    id:4,
    source:installNode 
   },
   {
    id:5,
    source:reactParallax 
   },

 ]

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work </p>
        </div>
        <div className="grid sm:grid-cols-2     md:grid-cols-3 gap-8 px-12 sm:px-0">
            {
              portfolios.map(({id , source})=>(
                
                <div  key={id}className="shadow-md shadow-gray-600 rounded-lg">
                  <img src={source} alt="" />
                  <div className="flex items-center justify-center">
                    <button className="w-1/2 px-5 m-4 duration-200 hover:scale-105">Demo</button>
                    <button  className="w-1/2 px-5 m-4 duration-200 hover:scale-105">Code</button>
                  </div>
                </div>            
              ))
            }
        </div>      
      </div>
    </div>
  );
}
