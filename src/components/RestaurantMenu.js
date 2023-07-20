import React, { useState , useEffect} from 'react'
import { useParams } from 'react-router-dom';
//import useRestaurant from '../Hooks/useRestaurant';
import Shimmer from '../contants/Shimmer';
import { GET_RESTAURANT_MENU } from '../contants/config';
import MenuCard from './MenuCard';
import ShowContent from './ShowContent';

const RestaurantMenu = () => {
    const { resId } = useParams();
    //const [RestaurantMenuData,setRestaurantMenuData] = useState(null);
    //const restaurant = useRestaurant(resId); currently not using useRestaurant custom hook
  //setRestaurantMenuData(restaurant);


    const [MenuRestaurant,setMenuRestaurant] = useState([]);
    const [RestaurantTop,setRestaurantTop] = useState(null);

    
    
    useEffect(() => {
      try {
        getRestaurantInfo();
      } catch (error) {
     console.log(error);
      }
      
    }, []);

      const getRestaurantInfo =  async () =>  {
        let response = await fetch(GET_RESTAURANT_MENU+resId);
        const json = await response.json();
        //console.log("json")
        //console.log(json)
        const data = json?.data;
         
        setRestaurantTop(data);
        const menuItems =
              data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((x) => x.card?.card)
                ?.filter(
                  (x) =>
                    x["@type"] ===
                    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
                );
             console.log(menuItems);
             
        setMenuRestaurant(menuItems);
        console.log(MenuRestaurant);
         };
      
        

      
    return !RestaurantTop ? (
      <Shimmer />
    ) : (
       
       <div>
      <div className="flex bg-[#171717]">
        <img
          className="w-[300px] ml-[200px] p-[10px] rounded-3xl"
          src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +RestaurantTop?.cards[0]?.card?.card?.info?.cloudinaryImageId}
          alt="Avatar"
        />
         <div>
          <h1 className=" text-4xl text-white ml-[25px] pt-10">
            {RestaurantTop?.cards[0]?.card?.card?.info?.name}
          </h1>
          <h4 className=" text-sm text-white ml-[25px] pt-4">
            {RestaurantTop?.cards[0]?.card?.card?.info?.cuisines?.join(",")}
          </h4>
          <div className="flex">
            <h4 className=" text-sm text-white ml-[25px] pt-4">
              {RestaurantTop?.cards[0]?.card?.card?.info?.avgRating} Stars
            </h4>
            <h4 className=" text-sm text-white ml-[25px] pt-4">
             {RestaurantTop?.cards[0]?.card?.card?.info?.areaName}
            </h4>
            <h4 className=" text-sm text-white ml-[25px] pt-4">
              {RestaurantTop?.cards[0]?.card?.card?.info?.totalRatingsString}
            </h4>
          </div>
        </div>
        
          
        </div>
        {/*<hr className=" w-full h-1 mx-auto my-4 bg-slate-500 border-0 rounded md:my-4 dark:bg-gray-700" />*/}
        <div className=''>
       
        {console.log(MenuRestaurant)}
      
          {MenuRestaurant?.map((menu) => (<ShowContent menu={menu} />))}
      </div></div>
    );
  };
  
  


export default RestaurantMenu;