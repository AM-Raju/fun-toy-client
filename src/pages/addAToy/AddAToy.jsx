import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const AddAToy = () => {
  const { user } = useContext(AuthContext);
  const handleToyData = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.defaultValue;
    const email = form.email.defaultValue;

    const title = form.title.value;
    const category = form.category.value;
    const image = form.photo.value;
    const price = form.price.value;
    const rating = form.rating.value;

    const quantity = form.quantity.value;
    const description = form.description.value;
    console.log(name, email, title, category, image, price, rating, quantity, description, "India");
    const toyInfo = { name, email, title, category, image, price, rating, quantity, description };

    fetch("http://localhost:5000/all-toys", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(toyInfo),
    })
      .then((result) => {
        if (result) {
          alert("Toy data inserted successfully");
          form.reset();
        }
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="bg-[#f7da5a]">
      <div className="max-w-[1440px] mx-auto pb-16 pt-8">
        <h3 className="text-4xl font-mali font-semibold text-center mb-10">Add a Toy</h3>
        <form
          onSubmit={handleToyData}
          className=" space-y-6 border border-[#FE7288] w-8/12 mx-auto px-14 py-8 rounded-2xl"
        >
          {/* Username and Email block */}
          <div className="grid grid-cols-2 gap-10">
            <div>
              <label className="text-xl" htmlFor="">
                User name
              </label>
              <br />
              <input
                className="w-full mt-3 p-3 rounded-md outline-none"
                type="name"
                name="name"
                defaultValue={user?.displayName}
                placeholder="User Name"
                disabled
              />
            </div>
            <div>
              <label className="text-xl" htmlFor="">
                User email
              </label>
              <br />
              <input
                className="w-full mt-3 p-3 rounded-md outline-none"
                type="email"
                name="email"
                defaultValue={user?.email}
                placeholder="User Email"
                disabled
              />
            </div>
          </div>
          {/* Product Title and Category Block */}
          <div className="grid grid-cols-2 gap-10">
            <div>
              <label className="text-xl" htmlFor="">
                Product Title
              </label>
              <br />
              <input
                className="w-full mt-3 p-3 rounded-md outline-none"
                type="text"
                name="title"
                placeholder="Product Title"
              />
            </div>
            <div>
              <label className="text-xl" htmlFor="">
                Category
              </label>
              <br />
              <select className="w-full mt-3 p-3 rounded-md outline-none" name="category">
                <option value="">Select Category</option>
                <option value="Dog Robot Toy">Dog Robot Toy</option>
                <option value="Transformer Robot Toy">Transformer Robot Toy</option>
                <option value="General Robot Toy">General Robot Toy</option>
                <option value="Baby's Toy">Baby's Toy</option>
                <option value="Cartoon Robot">Cartoon Robot</option>
              </select>
            </div>
          </div>
          {/* Product Image block */}
          <div>
            <label className="text-xl" htmlFor="">
              Product Image
            </label>
            <input
              className="w-full mt-3 p-3 rounded-md outline-none"
              type="text"
              name="photo"
              placeholder="Photo URL"
            />
          </div>
          {/* Price Rating Qty Block */}
          <div className="grid grid-cols-3 gap-10">
            <div>
              <label className="text-xl" htmlFor="">
                Price
              </label>
              <input
                className="w-full mt-3 p-3 rounded-md outline-none"
                type="text"
                name="price"
                placeholder="Price"
              />
            </div>
            <div>
              <label className="text-xl" htmlFor="">
                Rating
              </label>
              <input
                className="w-full mt-3 p-3 rounded-md outline-none"
                type="text"
                name="rating"
                placeholder="Rating"
              />
            </div>
            <div>
              <label className="text-xl" htmlFor="">
                Quantity
              </label>
              <input
                className="w-full mt-3 p-3 rounded-md outline-none"
                type="number"
                name="quantity"
                placeholder="Available Qty"
              />
            </div>
          </div>
          <div>
            <div className="form-control mb-6">
              <label className="label">
                <span className="text-xl">Product Description</span>
              </label>
              <textarea
                className=" p-3 rounded-lg outline-none h-24 resize-none"
                name="description"
                placeholder="Product Description"
              ></textarea>
            </div>
          </div>

          <input
            className="w-full mx-auto p-3 bg-[#FE7288] text-xl font-semibold rounded-md outline-none"
            type="submit"
            value="Add Toy"
          />
        </form>
      </div>
    </div>
  );
};

export default AddAToy;
