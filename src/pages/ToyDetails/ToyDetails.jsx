import React from "react";
import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
  const toy = useLoaderData();
  const { name, email, title, category, image, price, rating, quantity, description } = toy;

  return (
    <div>
      <div className="w-[1440px] mx-auto">
        <h2 className="text-5xl font-semibold font-mali text-center py-10 text-orange-300">
          Toy Details
        </h2>
        <div className=" text-center w-[900px] mx-auto border-2 border-orange-300 p-10 rounded-xl space-y-3 mb-10">
          <div className="w-96 mx-auto">
            <img src={image} alt="" />
          </div>
          <h2 className="text-4xl font-semibold">{title}</h2>
          <div className="bg-purple-200 flex justify-around items-center ">
            <h4 className="text-2xl">Seller : {name}</h4>
            <p>Email : {email}</p>
          </div>
          <p>Price : ${price}</p>
          <p>Rating : ${rating}</p>
          <p>Available Quantity : {quantity} Pcs</p>
          <div className="w-[700px] mx-auto border p-5">
            <h4 className="text-center font-semibold text-lg">Description</h4>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
