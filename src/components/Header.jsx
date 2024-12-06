import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-white px-4 sm:px-10 py-3 flex items-center justify-between fixed top-0 left-0 w-full shadow-lg'>
      <Link to={"/"}><h1 className='font-bold sm:text-[19px] text-gray-400 hover:text-blue-600'>CRUD APP</h1></Link>
      <h1 className='uppercase font-bold sm:text-xl text-blue-600 hover:text-blue-700'>Siddique Ahmed</h1>
      <Link to={"/addTopic"}><button className='bg-blue-700 text-white px-3 sm:px-5 py-2 rounded-full font-bold hover:bg-blue-600'>Add Topic</button></Link>
    </div>
  )
}

export default Header