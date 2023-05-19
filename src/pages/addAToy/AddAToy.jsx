import React from "react";

const AddAToy = () => {
  const handleToyData = (event) => {
    event.preventDefault();

    const form = event.target;
    const category = form.category.value;
    const description = form.description.value;
    console.log(category, description, "raju");
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
                placeholder="User Name"
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
                placeholder="User Email"
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
                <option value="None" selected>
                  Select Category
                </option>
                <option value="DeSoto">DeSoto</option>
                <option value="Hillsboro">Hillsboro</option>
                <option value="Grandview">Grandview</option>
                <option value="Festus">Festus</option>
                <option value="R-7">R-7</option>
                <option value="Home-Schooled">Home-Schooled</option>
                <option value="Other School">Other School</option>
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
              name="Photo"
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
                name="Rating"
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
                name="qty"
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
