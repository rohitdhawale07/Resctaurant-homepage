import React from 'react'

function Navbar() {
  return (
    <div className="m-0 p-0 box-border">
        <nav className=" text-black flex items-center justify-between mb-4 mt-0 font-bold">
      <div className="flex items-center">
        <img src="https://flowbite.com/docs/images/logo.svg" alt="Logo" className="w-8 h-8 mr-2" />
        <span className= "text-lg font-semibold">GeekFoods</span>
      </div>

      <div className="flex-grow text-center hover:text-royal-blue">
        <a href="#" className="mx-4 hover:text-royal-blue">Home</a>
        <a href="#" className="mx-4 hover:text-royal-blue">Quote</a>
        <a href="#" className="mx-4 hover:text-royal-blue">Restaurants</a>
        <a href="#" className="mx-4 hover:text-royal-blue">Foods</a>
        <a href="#" className="mx-4 hover:text-royal-blue">Contact</a>
      </div>

      <div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Get Started</button>
      </div>
    </nav>
    </div>
  )
}

export default Navbar