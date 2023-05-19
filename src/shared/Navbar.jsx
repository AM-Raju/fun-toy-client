import React, { useContext } from "react";
import navLogo from "../assets/logos/nav-logo.png";
import { FaInstagram, FaRegUser, FaShoppingBag, FaShoppingBasket } from "react-icons/fa";
import { Link } from "react-router-dom";
import Login from "../pages/login/Login";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut();
  };

  return (
    <div className="bg-[#67bbf7]">
      <div className="max-w-[1440px] mx-auto h-32 flex items-center">
        <div className="w-2/12  h-24">
          <img src={navLogo} alt="" />
        </div>
        <div className="w-8/12 h-24">
          <div className="text-center">
            <ul>
              <li className="h-14 text-xl font-mali px-6 py-3 hover:border-b-2 border-[#FE7288] duration-100  inline-block">
                <Link to="/">Home</Link>
              </li>
              <li className="h-14 text-xl font-mali px-6 py-3 hover:border-b-2 border-[#FE7288] duration-100  inline-block">
                All Toys
              </li>
              <li className="h-14 text-xl font-mali px-6 py-3 hover:border-b-2 border-[#FE7288] duration-100  inline-block">
                My Toys
              </li>
              <li className="h-14 text-xl font-mali px-6 py-3 hover:border-b-2 border-[#FE7288] duration-100  inline-block">
                Add a Toy
              </li>

              <li className="h-14 text-xl font-mali px-6 py-3 hover:border-b-2 border-[#FE7288] duration-100  inline-block">
                Blog
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-center">Marquee here</h3>
          </div>
        </div>
        <div className="w-2/12 h-24">
          <div className="flex text-2xl justify-end items-center h-14">
            <FaShoppingBasket></FaShoppingBasket>
            <FaInstagram className="mx-6"></FaInstagram>
            {/* User icon with login and resiter button on hover */}
            <div className="dropdown dropdown-hover">
              {user ? (
                <img
                  className="w-7 border-2 rounded-full"
                  src={user?.photoURL}
                  alt=""
                  title={user.displayName}
                  referrerPolicy="no-referrer"
                />
              ) : (
                <FaRegUser></FaRegUser>
              )}

              <ul tabIndex={0} className="dropdown-content text-xl py-2 shadow w-36">
                {!user ? (
                  <li className="hover:text-[#FE7288] hover:border-l-2 px-5 h-8  border-[#FE7288]">
                    <Link to="/login">Login</Link>
                  </li>
                ) : (
                  <li
                    onClick={handleSignOut}
                    className="hover:text-[#FE7288] hover:border-l-2 px-5 h-8 border-[#FE7288]"
                  >
                    Sign Out
                  </li>
                )}

                {!user && (
                  <li className="hover:text-[#FE7288] hover:border-l-2 px-5 h-8 border-[#FE7288]">
                    <Link to="/register">Register</Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
