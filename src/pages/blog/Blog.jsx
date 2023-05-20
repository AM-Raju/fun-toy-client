import React from "react";
import bg from "../../assets/bg3.jpg";

const Blog = () => {
  return (
    <div>
      <div style={{ backgroundImage: `url(${bg})` }}>
        <h3 className="text-5xl pt-10 text-[#FE7288] text-center font-semibold font-mali ">Blog</h3>
        <div className=" w-[1200px] mx-auto pt-5 pb-10 ">
          <div className="w-[900px] bg-white opacity-80 mx-auto p-8 border-l-8 my-10 hover:border-[#FE7288]">
            <h3 className="text-2xl font-semibold">
              Question: What is an access token and refresh token? How do they work and where should
              we store them on the client-side?.
            </h3>
            <p className="mt-10">
              In React controlled component means it is controlled by React itself. And uncontrolled
              component is controlled by the DOM. Controlled component is much easier to handle. It
              gives us predictable data. Whereas, on uncontrolled data you can't predict the data of
              an input form.
            </p>
          </div>
          <div className="w-[900px] bg-white opacity-80 mx-auto p-8 border-l-8 my-10 hover:border-[#FE7288] ">
            <h3 className="text-2xl font-semibold">Question: Compare SQL and NoSQL databases?</h3>
            <p className="mt-10">
              You can validate React props by installing propTypes package. It will help you to
              determine the types of props. It protects component to receive any wrong data through
              props. It will block the wrong props and give you an warning.
            </p>
          </div>
          <div className="w-[900px] bg-white opacity-80 mx-auto p-8 border-l-8 my-10 hover:border-[#FE7288] ">
            <h3 className="text-2xl font-semibold">
              Question: What is express js? What is Nest JS?
            </h3>
            <p className="mt-10">
              Node.js is a cross-platform open-source server environment. It is used to provide
              back-end service. It helps to run JavaScript code outside the browser. On the other
              hand express.js is a framework of node.js. It helps to perform the backend task most
              easiest and efficient way.
            </p>
          </div>
          <div className="w-[900px] bg-white opacity-80 mx-auto p-8 border-l-8 my-10 hover:border-[#FE7288] ">
            <h3 className="text-2xl font-semibold">
              Question: What is MongoDB aggregate and how does it work?
            </h3>
            <p className="mt-10">
              Custom hook is a kind of reusable function used for unique functionality. It is
              created to do repeated complex task with an ease. It can be reused as per requirement.
              It also helps to make the code clean and reuseable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
