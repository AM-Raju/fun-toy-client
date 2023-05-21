import React from "react";
import Banner from "./Banner";
import Gallery from "./Gallery";
import Quote from "./Quote";
import Service from "./Service";
import ShopByCategory from "./ShopByCategory";
import Navbar from "../../shared/Navbar";
import useTitle from "../../hooks/useTitle";

const Home = () => {
  useTitle("Kid's Toy | Home");
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <ShopByCategory></ShopByCategory>
      <Quote></Quote>
      <Service></Service>
    </div>
  );
};

export default Home;
