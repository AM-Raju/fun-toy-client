import React from "react";
import Banner from "./Banner";
import Gallery from "./Gallery";
import Quote from "./Quote";
import Service from "./Service";
import ShopByCategory from "./ShopByCategory";

const Home = () => {
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
