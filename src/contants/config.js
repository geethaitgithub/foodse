//Config Driven UI - Mock Data from API

/* BANGALORE LOCATION URL */
//export const GET_RESTAURANTS_LIST = "https://instafood.onrender.com/api/restaurants?lat=12.9351929&lng=77.62448069999999";
//export const GET_RESTAURANT_MENU = "https://instafood.onrender.com/api/menu?lat=12.9351929&lng=77.62448069999999&restaurantId=";

//working bangalore ,chennai
export const GET_RESTAURANTS_LIST = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING";
//export const GET_RESTAURANTS_LIST = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.067439&lng=80.237617&page_type=DESKTOP_WEB_LISTING";

//export const GET_RESTAURANT_MENU ="https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId=";//from instafood app
//export const GET_RESTAURANT_MENU ="https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0826802&lng=80.2707184&catalog_qa=undefined&submitAction=ENTER&restaurantId="; from namaste react
export const GET_RESTAURANT_MENU ="https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6126255&lng=77.04108959999999&restaurantId="; //new try

/* CDN for Restaurant & Menu items Images  */
export const RES_IMG_CDN =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";
export const ITEM_IMG_CDN =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/";

