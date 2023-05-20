import React from "react";
import lImage1 from "../../assets/gallery/l1.jpg";
import lImage2 from "../../assets/gallery/l2.jpg";
import lImage3 from "../../assets/gallery/l3.jpg";
import sImage1 from "../../assets/gallery/s1.jpg";
import sImage2 from "../../assets/gallery/s2.jpg";
import sImage3 from "../../assets/gallery/s3.jpg";
import sImage4 from "../../assets/gallery/s4.jpg";
import sImage5 from "../../assets/gallery/s5.jpg";
import sImage6 from "../../assets/gallery/s6.jpg";
const Gallery = () => {
  return (
    <div className="bg-purple-100">
      <div className=" w-[1440px] mx-auto grid grid-cols-4 grid-rows-3 gap-2 py-2">
        {/* Image 1 */}
        <div className=" h-52 overflow-hidden w-full col-span-2 relative group">
          <div className="absolute bg-purple-800 bg-opacity-0 group-hover:bg-opacity-50 w-full h-52  transition-all duration-300">
            <div className=" text-white opacity-0 group-hover:opacity-100 transition-all duration-300  text-center pt-16">
              <h3 className="text-3xl font-semibold">Dancing Robot</h3>
              <p>Checkout this awesome toy</p>
            </div>
          </div>
          <img src={lImage1} alt="" />
        </div>
        {/* Image */}
        <div className="h-52 overflow-hidden w-full relative group ">
          <div className="absolute bg-blue-800 bg-opacity-0 group-hover:bg-opacity-50 w-full h-52  transition-all duration-300">
            <div className=" text-white opacity-0 group-hover:opacity-100 transition-all duration-300 text-center pt-16">
              <h3 className="text-3xl font-semibold">Robo Fidget</h3>
              <p>Checkout this awesome toy</p>
            </div>
          </div>
          <img src={sImage1} alt="" />
        </div>
        {/* Image */}
        <div className="h-52 overflow-hidden w-full relative group">
          <div className="absolute bg-orange-800 bg-opacity-0 group-hover:bg-opacity-50 w-full h-52  transition-all duration-300">
            <div className=" text-white opacity-0 group-hover:opacity-100 transition-all duration-300 text-center pt-16">
              <h3 className="text-3xl font-semibold">Cool Robot</h3>
              <p>Checkout this awesome toy</p>
            </div>
          </div>
          <img src={sImage2} alt="" />
        </div>
        {/* Image */}
        <div className="h-52 overflow-hidden w-full relative group">
          <div className="absolute bg-black bg-opacity-0 group-hover:bg-opacity-50 w-full h-52  transition-all duration-300">
            <div className=" text-white opacity-0 group-hover:opacity-100 transition-all duration-300 text-center pt-16">
              <h3 className="text-3xl font-semibold">Sad Boy</h3>
              <p>Checkout this awesome toy</p>
            </div>
          </div>
          <img src={sImage3} alt="" />
        </div>
        {/* Image */}
        <div className="h-52 overflow-hidden w-full relative group ">
          <div className="absolute bg-cyan-800 bg-opacity-0 group-hover:bg-opacity-50 w-full h-52  transition-all duration-300">
            <div className=" text-white opacity-0 group-hover:opacity-100 transition-all duration-300 text-center pt-16">
              <h3 className="text-3xl font-semibold">Wall-E</h3>
              <p>Checkout this awesome toy</p>
            </div>
          </div>
          <img src={sImage4} alt="" />
        </div>
        {/* Image */}
        <div className="h-52 overflow-hidden w-full relative group col-span-2">
          <div className="absolute bg-red-800 bg-opacity-0 group-hover:bg-opacity-50 w-full h-52  transition-all duration-300">
            <div className=" text-white opacity-0 group-hover:opacity-100 transition-all duration-300 text-center pt-16">
              <h3 className="text-3xl font-semibold">Rescuer Robot</h3>
              <p>Checkout this awesome toy</p>
            </div>
          </div>
          <img src={lImage2} alt="" />
        </div>
        {/* Image */}
        <div className="h-52 overflow-hidden w-full relative group col-span-2">
          <div className="absolute bg-amber-800 bg-opacity-0 group-hover:bg-opacity-50 w-full h-52  transition-all duration-300">
            <div className=" text-white opacity-0 group-hover:opacity-100 transition-all duration-300 text-center pt-16">
              <h3 className="text-3xl font-semibold">The Leader</h3>
              <p>Checkout this awesome toy</p>
            </div>
          </div>
          <img src={lImage3} alt="" />
        </div>
        {/* Image */}
        <div className="h-52 overflow-hidden w-full relative group">
          <div className="absolute bg-green-800 bg-opacity-0 group-hover:bg-opacity-50 w-full h-52  transition-all duration-300">
            <div className=" text-white opacity-0 group-hover:opacity-100 transition-all duration-300 text-center pt-16">
              <h3 className="text-3xl font-semibold">Dodo Robot</h3>
              <p>Checkout this awesome toy</p>
            </div>
          </div>
          <img src={sImage5} alt="" />
        </div>
        {/* Image */}
        <div className="h-52 overflow-hidden w-full relative group">
          <div className="absolute bg-blue-800 bg-opacity-0 group-hover:bg-opacity-50 w-full h-52  transition-all duration-300">
            <div className=" text-white opacity-0 group-hover:opacity-100 transition-all duration-300 text-center pt-16">
              <h3 className="text-3xl font-semibold">Bad Guy</h3>
              <p>Checkout this awesome toy</p>
            </div>
          </div>
          <img src={sImage6} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
