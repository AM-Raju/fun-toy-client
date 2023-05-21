import React from "react";
import bg from "../../assets/bg3.jpg";
import useTitle from "../../hooks/useTitle";

const Blog = () => {
  useTitle("Kid's Toy | Blog");
  return (
    <div>
      <div style={{ backgroundImage: `url(${bg})` }} className="bg-cover">
        <h3 className="text-5xl pt-10 text-[#FE7288] text-center font-semibold font-mali ">Blog</h3>
        <div className=" w-[1200px] mx-auto pt-5 pb-10 ">
          <div className="w-[900px] bg-white opacity-80 mx-auto p-8 border-l-8 my-10 hover:border-[#FE7288]">
            <h3 className="text-2xl font-semibold">
              Question: What is an access token and refresh token? How do they work and where should
              we store them on the client-side?
            </h3>
            <p className="mt-10">
              Refresh token allows to balance user's access. Whereas access token help to get the
              required resources so that the users can complete their tasks. Refresh token is
              connected with the authorization server and the access token is connected with the
              resource server.
            </p>
          </div>
          <div className="w-[900px] bg-white opacity-80 mx-auto p-8 border-l-8 my-10 hover:border-[#FE7288] ">
            <h3 className="text-2xl font-semibold">Question: Compare SQL and NoSQL databases?</h3>
            <p className="mt-10">
              SQL is a table based database and NoSQL is document based. SQL is better for
              structured data whereas NoSQL is used to store unstructured data. Both are scalable.
              But, SQL is vertically scalable and NoSQL is horizontally scalable. NoSQL is easy to
              use and handy for small project.
            </p>
          </div>
          <div className="w-[900px] bg-white opacity-80 mx-auto p-8 border-l-8 my-10 hover:border-[#FE7288] ">
            <h3 className="text-2xl font-semibold">
              Question: What is express js? What is Nest JS?
            </h3>
            <p className="mt-10">
              Express.js is a web framework of Node.js. Node.js is a javascript runtime which is
              used to run javascript in the backend. Express.js helps to use the Node.js
              functionality with an ease.
              <br />
              Nest.js is a another framework of Node.js. Nest.js structure and CLI makes is beginner
              friendly. It provides module, controller, service and a testing pile to make your
              backend activity much easier.
            </p>
          </div>
          <div className="w-[900px] bg-white opacity-80 mx-auto p-8 border-l-8 my-10 hover:border-[#FE7288] ">
            <h3 className="text-2xl font-semibold">
              Question: What is MongoDB aggregate and how does it work?
            </h3>
            <p className="mt-10">
              If you want to process a large number of data of a collection, you should use mongoDB
              aggregation. Here the collection of data passed through different stages for
              processing. These stages is collectively called as pipeline. The stages in pipeline
              can sort, filter, group and reshape the data.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
