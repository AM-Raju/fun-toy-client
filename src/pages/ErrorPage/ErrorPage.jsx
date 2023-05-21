import React from "react";
import { Link, useRouteError } from "react-router-dom";
import errorBg from "../../assets/errorBg.jpg";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <section
      style={{ backgroundImage: `url(${errorBg})` }}
      className="flex items-center h-screen p-16 bg-gray-100 text-gray-900"
    >
      <div className="container flex flex-col items-center justify-center  ml-32 mt-96">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-7xl text-red-500 ">
            <span className="sr-only">Error</span>
            {status || 404}
          </h2>
          <p className="text-2xl bg-yellow-300 p-3 font-semibold md:text-4xl text-red-800 mb-8">
            {error?.message}
          </p>
          <Link
            to="/"
            className="px-8 py-4 bg-green-500 hover:bg-green-800 rounded w-full mt-4 text-lg font-semibold tracking-wider text-white"
          >
            Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
