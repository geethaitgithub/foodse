import React from 'react'


const Footer = () => {
  const year = new Date().getFullYear();
  return (

   <div className=" w-auto h-12  bottom-0  bg-amber-600 text-blue-dark text-center leading-[3.5rem]  shadow-black shadow-lg">
   <span className="text-center p-1 m-2 font-bold">Made by Geetha</span>
   <i className="fa-solid fa-copyright"></i>
        {year}
        <strong>
          <span>Foodse</span>
        </strong>

 </div>
  )
}

export default Footer