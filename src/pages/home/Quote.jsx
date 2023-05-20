import React from "react";
import img from "../../assets/quoteBg.jpg";

const Quote = () => {
  return (
    <div style={{ backgroundImage: `url(${img})` }} className="h-60 bg-cover">
      <div className="text-center">
        <h3 className="text-4xl pt-16 pb-4 font-semibold">
          “Like stars are to the sky, so are the children to our world. <br /> They deserve to
          shine!”
        </h3>
        <p className="text-lg">— Chinonye J. Chidolue</p>
      </div>
    </div>
  );
};

export default Quote;
