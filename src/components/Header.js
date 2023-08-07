import React from "react";
import Logo from "../Images/foodsethumbnail.png";
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
    <div className=" flex sticky top-0 z-20 bg-white shadow-lg  w-auto justify-between  ">
      <div className=" ">
        <img className="h-16" alt="foodselogo" src={Logo} />
      </div>

      <div className=" w-1/3 justify-between px-12 m-1 ">
        <nav className=" ">
          <ul className="nav-items flex font-bold  text-sm ">
            <li className=" p-1 m-2  rounded-lg hover:bg-yellow-600">
              <Link to="/foodse"> HOME </Link>
            </li>
            <li className=" p-1 m-2 rounded-lg hover:bg-yellow-600">
              <Link to="about">ABOUT</Link>
            </li>

            <li className=" p-1 m-2  rounded-lg hover:bg-yellow-600">
              <Link to="spiderman">CONTACT</Link>
            </li>
            <li className=" p-1 m-2 rounded-lg  hover:bg-yellow-600">
              <Link to="cart">
                <img className="h-6" alt="cartlogo" src={cartIcon} />
              </Link>
            </li>
            <li className=" p-1 m-2 rounded-lg ">
              {isLoggedIn ? (
                <img
                  className=" h-8 cursor-pointer"
                  alt="loggedInUserLogo"
                  src={loggedOutUserLogo}
                  onClick={() => toggleUserStatus()}
                />
              ) : (
                <img
                  className=" h-8 cursor-pointer"
                  alt="foodselogo"
                  src={loggedInUserLogo}
                  onClick={() => toggleUserStatus()}
                />
              )}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
