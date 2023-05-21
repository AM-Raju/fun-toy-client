import React from "react";
import { FaHeadset, FaRegIdBadge, FaRegMoneyBillAlt, FaShippingFast } from "react-icons/fa";

const Service = () => {
  return (
    <div>
      <div className=" max-w-[1440px] mx-auto border-t-2 border-b-2 my-10 md:flex justify-around px-16 md:px-0">
        {/* Block */}
        <div className="flex items-center gap-6 my-10 border-black md:border-r-2 pr-20">
          <FaShippingFast className="text-5xl"></FaShippingFast>
          <div>
            <h4 className="text-xl font-semibold">Free Delivery</h4>
            <p>Order from all items</p>
          </div>
        </div>
        {/* Block */}
        <div className="flex items-center gap-6 my-10 border-black md:border-r-2 pr-20">
          <FaRegMoneyBillAlt className="text-5xl"></FaRegMoneyBillAlt>
          <div>
            <h4 className="text-xl font-semibold">Return and Refund</h4>
            <p>Money back guaranty</p>
          </div>
        </div>
        {/* Block */}
        <div className="flex items-center gap-6 my-10 border-black md:border-r-2 pr-20">
          <FaRegIdBadge className="text-5xl"></FaRegIdBadge>
          <div>
            <h4 className="text-xl font-semibold">Member Discount</h4>
            <p>On order over every $100</p>
          </div>
        </div>
        {/* Block */}
        <div className="flex items-center gap-6 my-10 border-black ">
          <FaHeadset className="text-5xl"></FaHeadset>
          <div>
            <h4 className="text-xl font-semibold">24/7 Support</h4>
            <p>Ready to hear from you</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
