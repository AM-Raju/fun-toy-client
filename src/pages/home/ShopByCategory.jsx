import React, { useEffect, useState } from "react";
import toy from "../../assets/toy.jpg";
import ToyCard from "./ToyCard";

const ShopByCategory = () => {
  const [toys, setToys] = useState([]);
  const [activeTab, setActiveTab] = useState("dfd");
  useEffect(() => {
    fetch(`https://fun-toy-server.vercel.app/toys/${activeTab}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [activeTab]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <div>
      <div className=" max-w-[1440px] mx-auto my-10">
        <h3 className="text-center font-semibold text-3xl font-mali mb-8">Shop By Category</h3>

        <div className="grid md:grid-cols-3 text-xl font-semibold">
          <button
            onClick={() => {
              handleTabClick("dogRobot");
            }}
            className={`w-full py-4 border-2 border-[#FE7288] ${
              activeTab == "dogRobot" ? "bg-[#FE7288]" : "bg-white"
            }`}
          >
            Dog Robot Toy
          </button>
          <button
            onClick={() => {
              handleTabClick("transformersRobot");
            }}
            className={`w-full py-4 border-2 border-[#FE7288] ${
              activeTab == "transformersRobot" ? "bg-[#FE7288]" : "bg-white"
            }`}
          >
            Transformer Robot Toy
          </button>
          <button
            onClick={() => {
              handleTabClick("babysRobot");
            }}
            className={`w-full py-4 border-2 border-[#FE7288] ${
              activeTab == "babysRobot" ? "bg-[#FE7288]" : "bg-white"
            }`}
          >
            Baby's Robot Toy
          </button>
        </div>
        <div className="grid md:grid-cols-4 md:grid-rows-3 justify-between gap-3 border-[#FE7288] border-l-2 border-r-2 border-b-2 ">
          {/* block */}
          {toys.map((toy) => (
            <ToyCard key={toy._id} toy={toy}></ToyCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;
