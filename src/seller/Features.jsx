import { useState } from "react";

const Card = ({ title, children }) => (
  <div className="bg-white rounded-lg shadow border p-6">
    <h2 className="text-lg font-semibold mb-6 border-b pb-3">
      {title}
    </h2>
    {children}
  </div>
);

const Features = () => {
  const [features, setFeatures] = useState([""]);

  const updateFeature = (index, value) => {
    const updated = [...features];
    updated[index] = value;
    setFeatures(updated);
  };

  const addFeature = () => {
    if (features.length < 5) {
      setFeatures([...features, ""]);
    }
  };

  const removeFeature = (index) => {
    setFeatures(features.filter((_, i) => i !== index));
  };

  return (
    <Card title="Key Features">
      <div className="space-y-4">

        {features.map((feature, index) => (
          <div key={index} className="flex gap-2">
            <input
              type="text"
              value={feature}
              onChange={(e) => updateFeature(index, e.target.value)}
              placeholder={`Feature ${index + 1}`}
              className="flex-1 border rounded px-3 py-2 focus:ring-1 focus:ring-blue-500 focus:outline-none"
            />

            {features.length > 1 && (
              <button
                onClick={() => removeFeature(index)}
                className="px-3 py-2 border text-red-500 rounded"
              >
                ✕
              </button>
            )}
          </div>
        ))}

        {features.length < 5 && (
          <button
            onClick={addFeature}
            className="text-blue-600 text-sm font-medium"
          >
            + Add another feature
          </button>
        )}

        <p className="text-xs text-gray-500">
          Add up to 5 bullet points. Keep them short and descriptive.
        </p>

      </div>
    </Card>
  );
};

export default Features;
