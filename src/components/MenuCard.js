import React from 'react'
import { ITEM_IMG_CDN } from '../contants/config';
import MealItemInput from './MealItemInput';

const MenuCard = ({item}) => {
    console.log(item.description+"menu");
  return (
   
   <div className="flex ">
    <div className="flex w-full ">
      <div className="flex pt-7" >
        <img
          className="w-[140px] h-[140px] rounded-2xl"
          src={
            ITEM_IMG_CDN + item.imageId
          }
          alt="Avatar"
        />
         <div className="pl-6 flex flex-col">
        <h3 className="font-bold text-lg w-3/5">{item.name}</h3>
        <p className="mt-1 text-base font-normal">
          {item.price > 0 ? "₹ " + item.price / 100 : " "}{" "}
        </p>
        <p className="mt-3.5 leading-5 text-gray-400 w-4/5 text-base overflow-hidden ">
          {item.description}
        </p>
        </div>
    </div></div>
     <MealItemInput  menuItem={item}/>

     </div>
  )
}

export default MenuCard