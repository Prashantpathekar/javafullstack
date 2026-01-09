import { useState } from "react";

const Card = ({ title, children }) => (
  <div className="bg-white rounded-lg shadow border p-6">
    <h2 className="text-lg font-semibold mb-6 border-b pb-3">
      {title}
    </h2>
    {children}
  </div>
);

const Specifications = () => {
  const [specs, setSpecs] = useState([
    { key: "", value: "" },
  ]);

  const updateSpec = (index, field, value) => {
    const updated = [...specs];
    updated[index][field] = value;
    setSpecs(updated);
  };

  const addSpec = () => {
    setSpecs([...specs, { key: "", value: "" }]);
  };

  const removeSpec = (index) => {
    setSpecs(specs.filter((_, i) => i !== index));
  };

  return (
    <Card title="Product Specifications">
      <div className="space-y-4">

        {/* Table Header */}
        <div className="grid grid-cols-2 gap-4 text-sm font-medium text-gray-600">
          <span>Specification</span>
          <span>Value</span>
        </div>

        {/* Specification Rows */}
        {specs.map((spec, index) => (
          <div
            key={index}
            className="grid grid-cols-2 gap-4 items-center"
          >
            <input
              type="text"
              placeholder="e.g. Material"
              value={spec.key}
              onChange={(e) =>
                updateSpec(index, "key", e.target.value)
              }
              className="border rounded px-3 py-2 focus:ring-1 focus:ring-blue-500 focus:outline-none"
            />

            <div className="flex gap-2">
              <input
                type="text"
                placeholder="e.g. Solid Wood"
                value={spec.value}
                onChange={(e) =>
                  updateSpec(index, "value", e.target.value)
                }
                className="flex-1 border rounded px-3 py-2 focus:ring-1 focus:ring-blue-500 focus:outline-none"
              />

              {specs.length > 1 && (
                <button
                  onClick={() => removeSpec(index)}
                  className="px-3 py-2 border text-red-500 rounded"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        ))}

        {/* Add Row */}
        <button
          onClick={addSpec}
          className="text-blue-600 text-sm font-medium"
        >
          + Add another specification
        </button>

        <p className="text-xs text-gray-500">
          Add detailed technical information to help customers make informed decisions.
        </p>

      </div>
    </Card>
  );
};

export default Specifications;

