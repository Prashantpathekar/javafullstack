import { useState } from "react";

const Specifications = ({ onNext }) => {
  const [specs, setSpecs] = useState({
    productType: "",
    roomType: "",
    material: "",
    finish: "",
    seatingCapacity: "",
    storage: "",
    assembly: "",
    countryOfOrigin: "",
    brand: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSpecs({ ...specs, [name]: value });
  };

  const handleSaveSpecs = () => {
    // minimal validation
    if (!specs.productType || !specs.material) {
      alert("Please fill required specifications");
      return;
    }

    // 👉 later API call
    onNext(); // next sidebar step
  };

  return (
    <div className="bg-white p-6 rounded shadow w-[800px]">
      <h2 className="text-lg font-semibold mb-4">
        Product Specifications
      </h2>

      {/* Product Type & Room Type */}
      <div className="grid grid-cols-2 gap-3 mb-3">
        <input
          name="productType"
          placeholder="Product Type (Sofa / Bed / Table)"
          className="border p-2"
          value={specs.productType}
          onChange={handleChange}
        />

        <input
          name="roomType"
          placeholder="Room Type (Living Room / Bedroom)"
          className="border p-2"
          value={specs.roomType}
          onChange={handleChange}
        />
      </div>

      {/* Material & Finish */}
      <div className="grid grid-cols-2 gap-3 mb-3">
        <input
          name="material"
          placeholder="Primary Material"
          className="border p-2"
          value={specs.material}
          onChange={handleChange}
        />

        <input
          name="finish"
          placeholder="Finish Type"
          className="border p-2"
          value={specs.finish}
          onChange={handleChange}
        />
      </div>

      {/* Seating & Storage */}
      <div className="grid grid-cols-2 gap-3 mb-3">
        <input
          name="seatingCapacity"
          placeholder="Seating Capacity"
          className="border p-2"
          value={specs.seatingCapacity}
          onChange={handleChange}
        />

        <input
          name="storage"
          placeholder="Storage (Yes / No)"
          className="border p-2"
          value={specs.storage}
          onChange={handleChange}
        />
      </div>

      {/* Assembly */}
      <select
        name="assembly"
        className="border p-2 w-full mb-3"
        value={specs.assembly}
        onChange={handleChange}
      >
        <option value="">Assembly Required?</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>

      {/* Country & Brand */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <input
          name="countryOfOrigin"
          placeholder="Country of Origin"
          className="border p-2"
          value={specs.countryOfOrigin}
          onChange={handleChange}
        />

        <input
          name="brand"
          placeholder="Brand"
          className="border p-2"
          value={specs.brand}
          onChange={handleChange}
        />
      </div>

      <button
        onClick={handleSaveSpecs}
        className="w-full px-4 py-2 bg-blue-600 text-white rounded"
      >
        Save & Continue →
      </button>
    </div>
  );
};

export default Specifications;
