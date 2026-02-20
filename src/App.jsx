import React from 'react'
import Mainroutes from './routes/Mainroutes'
import Navbar from './components/Navbar'
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className='py-10 px-[10%] w-screen h-screen overflow-y-auto text-white font-thin bg-gray-700'>
      <Navbar />
      <Mainroutes/>
    </div>
  )
}

export default App
