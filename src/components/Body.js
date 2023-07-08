import React,{useState,useEffect}  from 'react';
import RestaurantCard from './RestaurantCard';
import  filterData from '../utils/filterdata,js';
import { GET_RESTAURANTS_LIST } from '../contants/config.js'; /* url to get Restaurant data */
import Shimmer from '../contants/Shimmer.js'


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
          
          
    
          setAllRestaurants(restaurantList?.data?.cards[2]?.data?.data?.cards);
          setFilteredRestaurants(restaurantList?.data?.cards[2]?.data?.data?.cards);
        } catch (error) {
          console.log(error);
        }
        
      };

      const searchData = (searchText, restaurants ) => ()=> { 
        console.log("called search"); 
        if(searchText !== '') {
          console.log(searchText);
          const data = filterData(searchText,restaurants);
          console.log(data);
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
    
<div className=" shadow-lg p-2 m-2">
  <div>
    <input
          type="text"
          className="focus:bg-green-200 p-2 m-2 rounded-2xl w-80 border border-gray-300 shadow-lg shadow-black"
          placeholder="Search here"
          value={searchtext}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
    />
    <button
          className=" p-2 m-2 bg-orange-900 hover:bg-gray-500 text-white rounded-2xl shadow-black "
          onClick={() => {searchData(searchtext, allRestaurants);
            
          }}
        >
          Search
    </button>
</div>
{ errorMsg && 
      <div className="h-14 m-auto text-center" id="error">
        <span className="error-text w-14 h-8 " id="error-msg">{errorMsg}</span>
      </div> 
    }


{ allRestaurants?.length === 0 ? (<Shimmer />) :
<div className="flex flex-wrap">
      {filteredRestaurants.map((restaurant) => {
        return <RestaurantCard key={restaurant.data.id} {...restaurant.data} />;
      })}
    </div>
}
</div>

  )
}

export default Body