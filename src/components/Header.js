import React from 'react'
import Logo from "../Images/foodselogo.png";
import UserLogo from "../Images/userlogo.png";
import cartIcon from "../Images/carticon.png" ;

const Header = () => {




  return (
   <div className=" flex bg-amber-600 grid-cols-3 justify-between shadow-black shadow-lg p-2 m-2">
     
        <div className=" col-span-1 bg-white">
            <img className="h-12" alt="foodselogo" src={Logo} />
        </div>

        <div className="col-span-1 flex justify-between font-bold">
   
  <div className=" h-4 text-white px-5 py-3">HOME</div>
  <div className=" h-4 text-white px-5 py-3">ABOUT</div>
  <div className=" h-4 text-white px-5 py-3"><img className="h-8" alt="cartlogo" src={cartIcon} /> </div>
</div>

   
  

         <div className="col-span-1">

        
         <img  className="h-12 cursor-pointer"  alt="foodselogo" src={UserLogo} />
         </div>
        </div>
  )
}

export default Header