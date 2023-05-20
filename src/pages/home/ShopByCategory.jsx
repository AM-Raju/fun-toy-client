import React from "react";
import toy from "../../assets/toy.jpg";

const ShopByCategory = () => {
  return (
    <div>
      <div className="w-[1440px] mx-auto grid grid-cols-4 gap-2 my-10">
        <div className="my-auto">
          <h3 className="text-center font-semibold text-3xl font-mali">Shop By Category</h3>
          <div className="h-52 bg-red-300"></div>
        </div>

        <div className="h-96 border-2 p-5 relative">
          <div className="text-center absolute w-full mt-20">
            <h4>Toy Name</h4>
            <p>Price $100</p>
            <p>Rating: 4.5</p>
            <button>View Details</button>
          </div>
          <img src={toy} alt="" />
        </div>
        <div className="h-10 bg-red-300"></div>
        <div className="h-10 bg-red-300"></div>
      </div>
    </div>
  );
};

export default ShopByCategory;
