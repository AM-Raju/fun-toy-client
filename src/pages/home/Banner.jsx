import React from "react";
import bannerBg from "../../assets/bannerBg.webp";

const Banner = () => {
  return (
    <div className="h-[930px] bg-cover  " style={{ backgroundImage: `url(${bannerBg})` }}>
      <div className="md:w-5/12 w-full mx-auto bg-black bg-opacity-20 py-24 relative top-1/4">
        <h3 className="md:text-7xl text-3xl font-bold text-center text-white">Let's Make Them</h3>
        <h2 className="text-6xl font-bold text-center text-[#1572ff]  py-8">Surprised!</h2>
        <div className="w-52 mx-auto mt-6">
          <button
            className="bg-[#FE7288] py-4 px-8 w-full text-xl font-semibold rounded-lg 
        "
          >
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
