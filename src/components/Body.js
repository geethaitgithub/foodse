import React,{useState,useEffect}  from 'react';
import RestaurantCard from './RestaurantCard';
import { GET_RESTAURANTS_LIST } from '../contants/config.js'; /* url to get Restaurant data */
import Shimmer from '../contants/Shimmer.js'
import { filterData } from '../utils/filterData';
import { Link } from 'react-router-dom';

const Body = () => {
    const [searchtext,setSearchText] = useState([]);
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');
    

    useEffect(() => {
        getRestaurants();
      }, []);


      const getRestaurants = async () => {
        try {
          /* Live Data */
          const response = await fetch(GET_RESTAURANTS_LIST);
          const restaurantList = await response.json();
          //console.log(restaurantList?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
          //console.log(GET_RESTAURANTS_LIST);
          
          setAllRestaurants(restaurantList?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);//.
          setFilteredRestaurants(restaurantList?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
          //setAllRestaurants(restaurantList?.data?.cards[2]?.data?.data?.cards);
          //setFilteredRestaurants(restaurantList?.data?.cards[2]?.data?.data?.cards);
        } catch (error) {
          console.log(error);
        }
        
      };

      const searchData = (searchText, restaurants ) => ()=> { 
        if(searchText !== '') {
          const data = filterData(searchText,restaurants);
          setFilteredRestaurants(data); 
          setErrorMsg('');
        if (data.length === 0) {
          setErrorMsg('No matches found ');
        }
      } else {
          if(errorMsg) setErrorMsg('');
          setAllRestaurants(allRestaurants);
        }
      }
    

// Don't render component (Early return)
if (!allRestaurants) {
  return null;
}

  return (
    
<div>
  <div className=' px-10 mt-12 justify-center'>
    <input
          type="text"
          id = "searchInput"
          name = "searchInput"
          className=" py-2 my-2 rounded-l-2xl border border-yellow-600 shadow-lg w-2/5"
          placeholder="Search for restaurant"
          value={searchtext}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
    />
<button className="rounded-r-lg bg-yellow-600  hover shadow-lg p-2 my-2 text-black " 
            onClick={ searchData(searchtext, allRestaurants)}> Search </button>
    
   
    </div>
{ errorMsg && 
      <div className="h-14 m-auto text-center" id="error">
        <span className="error-text w-14 h-8 " id="error-msg">{errorMsg}</span>
      </div> 
    }

{ allRestaurants?.length === 0 ? (<Shimmer />) :

<div className="flex flex-wrap">
  
      {filteredRestaurants.map((restaurant) => {
        console.log("test"+restaurant);
        return (
           
          <Link 
          to ={"/menu/" + restaurant.info.id} key={restaurant.info.id}>
            <RestaurantCard key={restaurant.info.id} {...restaurant.info} />
        </Link>
        
      );
      })}
    </div>

} 
</div>

  )
}

export default Body

