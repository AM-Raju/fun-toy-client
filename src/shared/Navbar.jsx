import React, { useContext } from "react";
import navLogo from "../assets/logos/nav-logo.png";
import { FaInstagram, FaRegUser, FaShoppingBag, FaShoppingBasket } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut();
  };

  return (
    <div className="">
      <div className="bg-[#67bbf7] hidden md:block">
        <div className="max-w-[1440px] mx-auto h-32 flex items-center">
          <div className="w-2/12  h-24">
            <img src={navLogo} alt="" />
          </div>
          <div className="w-8/12 h-24">
            <div className="text-center font-semibold">
              <ul>
                <li className="h-14 text-xl font-mali py-3 hover:border-b-2 border-[#FE7288] duration-100  inline-block">
                  <Link to="/">Home</Link>
                </li>
                <li className="h-14 text-xl font-mali px-6 py-3 hover:border-b-2 border-[#FE7288] duration-100  inline-block">
                  <Link to="/all-toys">All Toys</Link>
                </li>
                <li className="h-14 text-xl font-mali px-6 py-3 hover:border-b-2 border-[#FE7288] duration-100  inline-block">
                  <Link to="/my-toys">My Toys</Link>
                </li>
                <li className="h-14 text-xl font-mali px-6 py-3 hover:border-b-2 border-[#FE7288] duration-100  inline-block">
                  <Link to="/add-a-toy">Add a Toy</Link>
                </li>

                <li className="h-14 text-xl font-mali px-6 py-3 hover:border-b-2 border-[#FE7288] duration-100  inline-block">
                  <Link to="/blog">Blog</Link>
                </li>
              </ul>
            </div>

            <div>
              <Marquee>
                <p className="text-lg">
                  | “Making the decision to have a child is momentous. It is to decide forever to
                  have your heart go walking around outside your body.” —Elizabeth Stone || “Having
                  a baby is like falling in love again, both with your husband and your child.”
                  —Tina Brown || “Children have neither past nor future. They enjoy the present,
                  which very few of us do.” —Jean De La Bruyere |
                </p>
              </Marquee>
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
      {/* Mobile responsive footer */}
      <div className=" md:hidden">
        <div className="bg-[#67bbf7] max-w-[1440px] mx-auto items-center flex justify-around">
          <div className="mr-28">
            <img src={navLogo} alt="" />
          </div>
          <div className=" h-24">
            <div className=" text-2xl items-center mt-8 h-14 mr-10">
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

                <ul tabIndex={0} className="dropdown-content text-xl py-2 shadow">
                  {!user ? (
                    <li className="hover:text-[#FE7288] hover:border-l-2 h-8  border-[#FE7288]">
                      <Link to="/login">Login</Link>
                    </li>
                  ) : (
                    <li
                      onClick={handleSignOut}
                      className="hover:text-[#FE7288] hover:border-l-2  h-8 border-[#FE7288]"
                    >
                      Sign Out
                    </li>
                  )}

                  {!user && (
                    <li className="hover:text-[#FE7288] hover:border-l-2  h-8 border-[#FE7288]">
                      <Link to="/register">Register</Link>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-slate-500">
          <div className="w-11/12 mx-auto">
            <ul className="space-x-2 text-center ">
              <li className=" text-xl font-mali py-3 hover:border-b-2 border-[#FE7288] duration-100  inline-block">
                <Link to="/">Home</Link>
              </li>
              <li className=" text-xl font-mali py-3 hover:border-b-2 border-[#FE7288] duration-100  inline-block">
                <Link to="/all-toys">All Toys</Link>
              </li>
              <li className=" text-xl font-mali py-3 hover:border-b-2 border-[#FE7288] duration-100  inline-block">
                <Link to="/my-toys">My Toys</Link>
              </li>
              <li className=" text-xl font-mali py-3 hover:border-b-2 border-[#FE7288] duration-100  inline-block">
                <Link to="/add-a-toy">Add a Toy</Link>
              </li>

              <li className=" text-xl font-mali py-3 hover:border-b-2 border-[#FE7288] duration-100  inline-block">
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
