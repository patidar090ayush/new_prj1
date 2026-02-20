import React from 'react'
import { Link } from 'react-router-dom';

const RecipeCard = (props) => {
    const { id, chef, desc, image , title } = props.recipe;
  return (
   <Link to={`/recipes/details/${id}`} className='hover:scale-105 mr-2 mb-2 block w-[23vw] rounded overflow-hidden shadow p-1 transition duration-300' >
     {/* <div className="block mt-10 px-3 mb-3 pt-4 rounded text-black bg-white shadow-md w-1/4"> */}
         <img className="object-cover w-full h-[20vh]" src={image || "https://via.placeholder.com/300x200?text=No+Image"} alt={title} />
      
       <h1 className='p-2 mt-2 font-black'>{title}</h1>
        <h1 className='text-sm text-red-400'>{chef}</h1>
        <p className='px-2 pb-3'>{desc.slice(0, 100)}...{" "}<small className='text-blue-400'>more</small></p>
     {/* </div> */}
   </Link>
    
  )
}

export default RecipeCard;