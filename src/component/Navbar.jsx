import React from 'react';
import { Link } from 'react-router-dom';
import Home from './Home';
import MobRes from './MobRes';
const Navbar = () => {
  return (
    <><div className="flex items-center justify-between bg-black  border-b-white border-b-[1px]">
        <div className=" bg-black  p-4 text-white text-2xl cursor-pointer hover:text-gray-500"><Link to="/"> Ultimate CodeEditor</Link></div>
        <Link to="/result"> <button className='bg-gray-500 mr-4 px-3 py-1 rounded text-white font-bold block cursor-pointer sm:hidden hover:bg-gray-800'>Result</button></Link>
    </div>
    </>
  )
}

export default Navbar