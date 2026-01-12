import { useState } from "react";

const Features = ({ onNext }) => {
  const [features, setFeatures] = useState([""]);

  const handleChange = (index, value) => {
    const updated = [...features];
    updated[index] = value;
    setFeatures(updated);
  };

  const addFeature = () => {
    setFeatures([...features, ""]);
  };

  const removeFeature = (index) => {
    const updated = features.filter((_, i) => i !== index);
    setFeatures(updated);
  };

  const handleSaveFeatures = () => {
    const validFeatures = features.filter((f) => f.trim() !== "");

    if (validFeatures.length === 0) {
      alert("Please add at least one feature");
      return;
    }

    // 👉 later API call (save features)
    onNext(); // next sidebar step (Images / Review)
  };

  return (
    <div className="bg-white p-6 rounded shadow w-[750px]">
      <h2 className="text-lg font-semibold mb-2">Product Features</h2>
      <p className="text-sm text-gray-600 mb-4">
        Add key highlights of your product (shown on product page like Amazon).
      </p>

      {features.map((feature, index) => (
        <div key={index} className="flex items-center gap-2 mb-3">
          <input
            type="text"
            placeholder={`Feature ${index + 1} (e.g. Solid Sheesham Wood Frame)`}
            className="border p-2 flex-1"
            value={feature}
            onChange={(e) => handleChange(index, e.target.value)}
          />

          {features.length > 1 && (
            <button
              onClick={() => removeFeature(index)}
              className="text-red-600 text-sm"
            >
              Remove
            </button>
          )}
        </div>
      ))}

      <button
        onClick={addFeature}
        className="mb-4 px-4 py-2 border rounded text-blue-600"
      >
        + Add Another Feature
      </button>

      <button
        onClick={handleSaveFeatures}
        className="w-full px-4 py-2 bg-blue-600 text-white rounded"
      >
        Save & Continue →
      </button>
    </div>
  );
};

export default Features;
