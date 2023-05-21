import React from "react";

const ToyCard = ({ toy }) => {
  const { _id, name, email, title, category, image, price, rating, quantity, description } =
    toy || {};
  console.log(title, "bidehs");
  return (
    <div className=" border-2 p-5">
      <div className="relative group w-[308px]">
        <div className="text-center absolute w-full h-full bg-[#FE7288] bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300">
          <div className="mt-52 p-3 opacity-0 group-hover:opacity-100 bottom-0  group-hover:bottom-8 transition-all duration-800 absolute w-full space-y-1 text-white">
            <h4 className="text-2xl">{title}</h4>
            <p className="text-lg">Price: ${price}</p>
            <p className="text-lg">Rating: {rating}/5</p>
            <button className="px-3 py-2 bg-[#FE7288]">View Details</button>
          </div>
        </div>
        <img className="w-[354px] h-96" src={image} alt="" />
      </div>
    </div>
  );
};

export default ToyCard;
