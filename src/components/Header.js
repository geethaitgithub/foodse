import React from "react";
import Logo from "../Images/foodselogo.png";
import loggedOutUserLogo from "../Images/loggedOutLogo.png";
import loggedInUserLogo from "../Images/loggedInLogo.png";
import cartIcon from "../Images/carticon.png";
import { useSelector, useDispatch } from "react-redux";
import { toggleUser } from "../utils/appSlice.js";
import { Link } from "react-router-dom";

const Header = () => {
  const isLoggedIn = useSelector((store) => store.app.isLoggedIn);
  const dispatch = useDispatch();

  const toggleUserStatus = () => {
    dispatch(toggleUser());
  };

  return (
    <div className=" flex bg-amber-600 grid-cols-3 justify-between shadow-black shadow-lg p-1 ">
      <div className=" col-span-1">
        <img className="h-12" alt="foodselogo" src={Logo} />
      </div>

      <div className=" w-4/12">
        <nav className=" ">
          <ul className="nav-items flex   font-bold justify-between">
            <li className=" p-1 m-2 bg-cyan-600  shadow-lg shadow-cyan-500/50 rounded-lg">
              <Link to="/foodse"> HOME </Link>
            </li>
            <li className=" p-1 m-2 bg-cyan-600 shadow-lg shadow-cyan-500/50 rounded-lg">
              <Link to="about">ABOUT</Link>
            </li>
           
            <li className=" p-1 m-2 bg-cyan-600 shadow-lg shadow-cyan-500/50 rounded-lg">
              <Link to="spiderman">CONTACT</Link>
            </li>
            <li className=" p-1 m-2 bg-cyan-600 shadow-lg shadow-cyan-500/50 rounded-lg">
              <Link to="cart">
                <img className="h-8" alt="cartlogo" src={cartIcon} />
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="col-span-1 p-1">
        {isLoggedIn ? (
          <img
            className="h-12 cursor-pointer"
            alt="loggedInUserLogo"
            src={loggedInUserLogo}
            onClick={() => toggleUserStatus()}
          />
        ) : (
          <img
            className="h-12 cursor-pointer"
            alt="foodselogo"
            src={loggedOutUserLogo}
            onClick={() => toggleUserStatus()}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
