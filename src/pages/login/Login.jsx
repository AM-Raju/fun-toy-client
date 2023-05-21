import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const { login, signInWithGoogle } = useContext(AuthContext);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // Used to navigate after login from private route
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password, "Nepal");

    setSuccess("");
    setError("");

    login(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser, "China");
        setSuccess("Login successful");
        form.reset();
        // return to current location after login from private route
        navigate(from, { replace: true });
      })
      .catch((error) => setError(error.message));
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then(() => {
        setSuccess("You successfully loggedIn with google");
        // return to current location after login from private route
        navigate(from, { replace: true });
      })
      .catch((error) => setError(error.message));
  };
  return (
    <div className="flex justify-center items-center h-[800px]">
      <div className="bg-[#e5f2fc] py-10 pr-16 w-1/4 border-r-4 border-[#FE7288] ">
        <h3 className="mb-10 pl-16 border-l-4 border-[#FE7288] py-4 text-4xl font-semibold font-mali">
          Login page
        </h3>
        <form onSubmit={handleLogin} className="flex flex-col space-y-5 pl-16">
          <input
            className="py-3 px-3  bg-transparent border-b-2 outline-none focus:bg-[#FE7288] border-[#FE7288] placeholder:text-[#FE7288] focus:text-white text-xl text-[#FE7288]"
            type="email"
            name="email"
            placeholder="Email"
          />
          <input
            className="py-3 px-3  bg-transparent border-b-2 outline-none focus:bg-[#FE7288] border-[#FE7288] placeholder:text-[#FE7288] focus:text-white text-xl text-[#FE7288]"
            type="password"
            name="password"
            placeholder="password"
          />
          <input
            className="w-full text-center text-xl pl-5 py-3 bg-[#FE7288] font-semibold "
            type="submit"
            value="Login"
          />
        </form>
        <div className="pl-16 my-5 flex items-center">
          <FcGoogle className="bg-white w-14 p-2 h-14 text-3xl"></FcGoogle>
          <button
            onClick={handleGoogleLogin}
            className="w-full border-2 border-white text-xl  py-3 bg-[#4081EC] text-center font-semibold"
          >
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
        <p className="pl-16 text-blue-500">{success}</p>
        <p className="pl-16 text-red-500">{error}</p>
      </div>
    </div>
  );
};

export default Login;
