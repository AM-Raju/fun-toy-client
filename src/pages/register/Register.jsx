import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleRegister = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password, "Bangladesh");

    // Clear success and error message before register another one
    setError("");
    setSuccess("");

    createUser(email, password)
      .then((result) => {
        const registeredUser = result.user;
        setSuccess("Registration Successful.");
        // Reset registration form after successful registration
        updateUserInfo(registeredUser, name, photo);
        form.reset();
      })

      .catch((error) => setError(error.message));
  };

  const updateUserInfo = (registeredUser, name, photo) => {
    updateProfile(registeredUser, { displayName: name, photoURL: photo })
      .then(() => {})
      .catch((error) => setError(error.message));
  };

  return (
    <div className="flex justify-center items-center h-[800px]">
      <div className="bg-[#e5f2fc] py-10 pr-16  w-1/4 border-r-4 border-[#FE7288] ">
        <h3 className="mb-10 pl-16 border-l-4 border-[#FE7288] pt-4 text-4xl font-semibold font-mali">
          Please Register!
        </h3>
        <form onSubmit={handleRegister} className="flex flex-col space-y-8 py-4 pl-16">
          <input
            className="py-3 px-3  bg-transparent border-b-2 outline-none focus:bg-[#FE7288] border-[#FE7288] placeholder:text-[#FE7288] focus:text-white text-xl text-[#FE7288]"
            type="text"
            name="name"
            placeholder="Name"
          />
          <input
            className="py-3 px-3  bg-transparent border-b-2 outline-none focus:bg-[#FE7288] border-[#FE7288] placeholder:text-[#FE7288] focus:text-white text-xl text-[#FE7288]"
            type="text"
            name="photo"
            placeholder="Photo URL"
          />
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
            value="Register"
          />
        </form>
        <p className="pl-16">
          Already registered? Please{" "}
          <Link to="/login" className="text-blue-500">
            Login
          </Link>{" "}
          here.
        </p>
        <p className="pl-16 text-blue-500">{success}</p>
        <p className="pl-16 text-red-500">{error}</p>
      </div>
    </div>
  );
};

export default Register;
