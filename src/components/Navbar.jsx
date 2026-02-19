import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='w-full h-10 flex items-center justify-center gap-10 text-lg font-medium '>
            <NavLink to='/' className={({ isActive }) => isActive ? 'text-green-500' : 'text-white'}>Home</NavLink>
            <NavLink to='/recipes' className={({ isActive }) => isActive ? 'text-green-500' : 'text-white'}>Recipes</NavLink>
            <NavLink to='/about' className={({ isActive }) => isActive ? 'text-green-500' : 'text-white'}>About</NavLink>
            {/* <NavLink to='/create' className={({ isActive }) => isActive ? 'text-green-500' : 'text-white'}>Create</NavLink> */}
            <NavLink
                to="/create"
                className={({ isActive }) =>
                    `px-4 py-2 bg-gray-900 rounded ${isActive ? "text-green-500" : "text-white"}`
                }
            >
                Create Recipe
            </NavLink>
        </div>
    )
}

export default Navbar