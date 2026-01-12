import { useState } from "react";

const Manufacturer = ({ onNext }) => {
  const [manufacturer, setManufacturer] = useState({
    manufacturerName: "",
    brandOwner: "",
    address: "",
    city: "",
    state: "",
    country: "India",
    pincode: "",
    contactNumber: "",
    email: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setManufacturer({ ...manufacturer, [name]: value });
  };

  const handleSaveManufacturer = () => {
    if (
      !manufacturer.manufacturerName ||
      !manufacturer.address ||
      !manufacturer.city ||
      !manufacturer.state
    ) {
      alert("Please fill required manufacturer details");
      return;
    }

    // 👉 later API call (save manufacturer details)
    onNext(); // next sidebar step (Images / Review)
  };

  return (
    <div className="bg-white p-6 rounded shadow w-[800px]">
      <h2 className="text-lg font-semibold mb-2">
        Manufacturer Details
      </h2>
      <p className="text-sm text-gray-600 mb-4">
        This information will be displayed on the product page as required by law.
      </p>

      <input
        name="manufacturerName"
        placeholder="Manufacturer Name"
        className="border p-2 w-full mb-3"
        value={manufacturer.manufacturerName}
        onChange={handleChange}
      />

      <input
        name="brandOwner"
        placeholder="Brand Owner / Packer / Importer (if different)"
        className="border p-2 w-full mb-3"
        value={manufacturer.brandOwner}
        onChange={handleChange}
      />

      <textarea
        name="address"
        placeholder="Complete Address"
        className="border p-2 w-full mb-3"
        rows={3}
        value={manufacturer.address}
        onChange={handleChange}
      />

      <div className="grid grid-cols-2 gap-3 mb-3">
        <input
          name="city"
          placeholder="City"
          className="border p-2"
          value={manufacturer.city}
          onChange={handleChange}
        />
        <input
          name="state"
          placeholder="State"
          className="border p-2"
          value={manufacturer.state}
          onChange={handleChange}
        />
      </div>

      <div className="grid grid-cols-2 gap-3 mb-3">
        <input
          name="pincode"
          placeholder="Pincode"
          className="border p-2"
          value={manufacturer.pincode}
          onChange={handleChange}
        />
        <input
          name="country"
          placeholder="Country"
          className="border p-2"
          value={manufacturer.country}
          onChange={handleChange}
        />
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <input
          name="contactNumber"
          placeholder="Contact Number (optional)"
          className="border p-2"
          value={manufacturer.contactNumber}
          onChange={handleChange}
        />
        <input
          name="email"
          placeholder="Email (optional)"
          className="border p-2"
          value={manufacturer.email}
          onChange={handleChange}
        />
      </div>

      <button
        onClick={handleSaveManufacturer}
        className="w-full px-4 py-2 bg-blue-600 text-white rounded"
      >
        Save & Continue →
      </button>
    </div>
  );
};

export default Manufacturer;
