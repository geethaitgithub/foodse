import React from 'react';

const RestaurantCard = ({
    cloudinaryImageId,
    name,
    cuisines,
    area,
    lastMileTravelString,
    costForTwo,
    avgRating,
    sla
  }) => {
  return (
    
    <div className="w-56 h-70 p-4 m-2 bg-slate-100 rounded-lg hover:shadow-md hover:bg-gray-200 transition-all shadow-lg shadow-slate-600">
     <img className=' w-[250px] h-[150] rounded-lg '   alt="card"
        src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      />
       
       <div className="flex flex-col gap-2">
        <h3 className="py-3 text-md font-bold">{name}</h3>
        <em className=' text-sm'>{cuisines.join(', ').substring(0,30).concat('...')}</em>
        

        <div className="flex  gap-2 text-sm ">

        <h4 className="flex items-center gap-2 text-sm ">
         {(Math.round(avgRating)<=3) ? (<span className=' bg-red-500 rounded-md p-1'> &#9733; {avgRating} </span>)
            : (<span className=' bg-green-500 rounded-md p-1'> &#9733; {avgRating} </span>)}
        </h4>
        <h4 className="flex items-center gap-2 text-sm">
          <span>{costForTwo}</span>
        </h4>
        <h4 className="flex items-center gap-2 text-sm">
          <span>{sla.deliveryTime} min</span>
        </h4>
        </div>

      </div>
    </div>
  )
}

export default RestaurantCard