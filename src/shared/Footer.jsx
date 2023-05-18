import React from "react";
import footerLogo from "../assets/logos/footer-logo.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="bg-[#022c49] text-white py-10 space-y-8">
        <div className="space-y-3 text-center">
          <img className="w-fit mx-auto" src={footerLogo} alt="" />
          <h3 className="font-semibold text-2xl font-mali">KID's Toys Industries Ltd</h3>
          <p className="text-lg">These toys would be the best companion for your kids after you.</p>
        </div>
        <div className="flex gap-5 text-2xl justify-center">
          <FaFacebook></FaFacebook>
          <FaInstagram></FaInstagram>
          <FaTwitter></FaTwitter>
          <FaLinkedin></FaLinkedin>
        </div>
      </div>
      <div className=" border-t-2 w-full bg-[#011625] text-white">
        <div className="max-w-[1440px] mx-auto flex justify-between items-center h-14">
          <p>Copyright © 2023 - All right reserved</p>
          <ul className="flex gap-5">
            <li>About Us</li>
            <li>Terms & Condition</li>
            <li>Return Policy</li>
            <li>Blog</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
