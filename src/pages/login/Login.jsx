import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-[800px]">
      <div className="bg-[#e5f2fc] py-10 pr-16 w-1/4 border-r-4 border-[#FE7288] ">
        <h3 className="mb-10 pl-16 border-l-4 border-[#FE7288] py-4 text-4xl font-semibold font-mali">
          Login page
        </h3>
        <form className="flex flex-col space-y-5 pl-16">
          <input
            className="py-3 px-3  bg-transparent border-b-2 outline-none focus:bg-[#FE7288] border-[#FE7288] placeholder:text-[#FE7288] focus:text-white text-xl text-[#FE7288]"
            type="email"
            name="name"
            placeholder="Email"
            id=""
          />
          <input
            className="py-3 px-3  bg-transparent border-b-2 outline-none focus:bg-[#FE7288] border-[#FE7288] placeholder:text-[#FE7288] focus:text-white text-xl text-[#FE7288]"
            type="password"
            name="password"
            placeholder="password"
            id=""
          />
          <input
            className="w-full text-center text-xl pl-5 py-3 bg-[#FE7288] font-semibold "
            type="submit"
            value="Login"
          />
        </form>
        <div className="pl-16 my-5 flex items-center">
          <FcGoogle className="bg-white w-14 p-2 h-14 text-3xl"></FcGoogle>
          <button className="w-full border-2 border-white text-xl  py-3 bg-[#4081EC] text-center font-semibold">
            Login with Google
          </button>
        </div>
        <p className="pl-16">
          Not registered yet? Please{" "}
          <Link to="/register" className="text-blue-500">
            register{" "}
          </Link>
          here.
        </p>
      </div>
    </div>
  );
};

export default Login;
