import React, { useContext, useEffect, useState } from "react";
import bg from "../../assets/bg2.jpg";
import { AuthContext } from "../../providers/AuthProvider";
import useTitle from "../../hooks/useTitle";

const MyToys = () => {
  const { user } = useContext(AuthContext);

  useTitle("Kid's Toy | My Toys");

  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch(`https://fun-toy-server.vercel.app/my-toys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [user]);

  const handleDelete = (id) => {
    const proceed = confirm("Are you want to delete it?");
    if (proceed) {
      fetch(`https://fun-toy-server.vercel.app/all-toys/${id}`, { method: "DELETE" })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Deleted successful");
            const remaining = toys.filter((toy) => toy._id !== id);
            setToys(remaining);
          }
        });
    }
  };

  return (
    <div>
      <div style={{ backgroundImage: `url(${bg})` }}>
        <div className="max-w-[1440px] mx-auto  py-10">
          <h3 className="text-4xl text-center font-mali font-semibold mb-5">My Toys</h3>

          <table className="w-full opacity-80">
            <thead className="bg-blue-500 text-xl">
              <tr className="text-center">
                <th className="py-5">SN</th>
                <th>Toy Title</th>
                <th>Seller</th>
                <th>Sub-category</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Rating</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {toys?.map((toy, index) => (
                <tr
                  key={index}
                  className="table-zebra text-lg text-left bg-blue-300 border-b-2 border-blue-100"
                >
                  <td className="border-r-2 border-blue-100 py-2 pl-5">{index + 1}</td>
                  <td className="border-r-2 border-blue-100 py-2 pl-5">{toy.title}</td>
                  <td className="border-r-2 border-blue-100 py-2 pl-5">{toy.name}</td>
                  <td className="border-r-2 border-blue-100 py-2 pl-5">{toy.category}</td>
                  <td className="border-r-2 border-blue-100 py-2 pl-5">${toy.price}</td>
                  <td className="border-r-2 border-blue-100 py-2 pl-5">{toy.quantity} Pcs</td>
                  <td className="border-r-2 border-blue-100 py-2 pl-5">{toy.rating}</td>
                  <td className="border-r-2 border-blue-100 py-2 text-center">
                    <button className="bg-[#FE7288] py-2 px-5 rounded font-semibold">Edit</button>
                  </td>
                  <td className="border-r-2 border-blue-100 py-2 text-center">
                    <button
                      onClick={() => {
                        handleDelete(toy?._id);
                      }}
                      className="bg-[#FE7288] py-2 px-5 rounded font-semibold"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyToys;
