import {useState,useEffect} from 'react';
import { GET_RESTAURANT_MENU } from '../contants/config';

const useRestaurant = (resId) => {
  const [restaurant, setRestauraunt] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    console.log(GET_RESTAURANT_MENU + resId);
    const data = await fetch(GET_RESTAURANT_MENU + resId);
    const json = await data.json();
    setRestauraunt(json?.data);
    console.log(json?.data);
  }

  return restaurant;
};

export default useRestaurant;