import { useState } from "react";

const Card = ({ title, children }) => (
  <div className="bg-white rounded-lg shadow border p-6">
    <h2 className="text-lg font-semibold mb-6 border-b pb-3">
      {title}
    </h2>
    {children}
  </div>
);

const Variants = () => {
  const [variantType, setVariantType] = useState("");
  const [variantValue, setVariantValue] = useState("");
  const [variants, setVariants] = useState([]);

  const addVariant = () => {
    if (!variantType || !variantValue) return;

    setVariants([...variants, { type: variantType, value: variantValue }]);
    setVariantValue("");
  };

  return (
    <Card title="Variants">
      <div className="space-y-4">

        {/* Variant Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Variant Type
          </label>
          <select
            value={variantType}
            onChange={(e) => setVariantType(e.target.value)}
            className="w-64 border rounded px-3 py-2"
          >
            <option value="">Select</option>
            <option value="Color">Color</option>
            <option value="Size">Size</option>
            <option value="Material">Material</option>
          </select>
        </div>

        {/* Variant Value */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Variant Value
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={variantValue}
              onChange={(e) => setVariantValue(e.target.value)}
              placeholder="e.g. Red, Large"
              className="border rounded px-3 py-2 w-64"
            />
            <button
              onClick={addVariant}
              className="px-4 py-2 border border-blue-500 text-blue-500 rounded"
            >
              Add
            </button>
          </div>
        </div>

        {/* Variant List */}
        {variants.length > 0 && (
          <div>
            <p className="text-sm font-medium mb-2">Added Variants</p>
            <div className="flex flex-wrap gap-2">
              {variants.map((v, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gray-100 border rounded text-sm"
                >
                  {v.type}: {v.value}
                </span>
              ))}
            </div>
          </div>
        )}


      </div>
    </Card>
  );
};

export default Variants;
