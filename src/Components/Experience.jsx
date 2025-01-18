import React from 'react'
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import graphql from "../assets/graphql.png";
import tailwind from "../assets/tailwind.png";



export default function Experience() {
  
  const experices = [
      {
        id:1,
        source:html,
        title:'HTML',
        style:'shadow-orange-500'
      },
      {
        id:2,
        source:css,
        title:'CSS',
        style:'shadow-blue-500'
      },
      {
        id:3,
        source:javascript,
        title:'JAVASCRIPT',
        style:'shadow-yellow-500'
      },
      {
        id:4,
        source:reactImage,
        title:'REACT',
        style:'shadow-violet-500'
      },
    
      {
        id:5,
        source:tailwind,
        title:'tailwind',
        style:'shadow-sky-500'
      },
    
      {
        id:6,
        source:graphql,
        title:'Graphql',
        style:'shadow-white'
      },

  ]

  return (
    <div name="Experience" className=' bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>

          <div>
            <p className='text-4xl font-bold inline p-2 border-b-4 border-gray-500'>Experience</p>
            <p className='py-6'>Tech Stack</p>
          </div>


       <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8  text-center py-8 px-12 sm:px-0'>
        {
          experices.map(({id,source,title,style})=>(
            <div key={id}
             className={`shadow-md hover:scale-105 duration-500  py-2 rounded-lg ${style}`}>
            <img src={source} className='w-20 mx-auto'/>
            <p className='text-white'>{title}</p>
          </div>
          ))
        }
      </div>

        </div>
    </div>
  )
}
