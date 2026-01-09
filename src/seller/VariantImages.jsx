import { useState } from "react";

const Card = ({ title, children }) => (
  <div className="bg-white rounded-lg shadow border p-6">
    <h2 className="text-lg font-semibold mb-6 border-b pb-3">
      {title}
    </h2>
    {children}
  </div>
);

const VariantImages = () => {
  const [variant, setVariant] = useState("");
  const [images, setImages] = useState([]);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImages((prev) => [...prev, ...files]);
  };

  const removeImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  return (
    <Card title="Variant Images">
      <div className="space-y-5">

        {/* Variant Selector */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Select Variant
          </label>
          <select
            value={variant}
            onChange={(e) => setVariant(e.target.value)}
            className="w-64 border rounded px-3 py-2"
          >
            <option value="">Select variant</option>
            <option value="Red">Red</option>
            <option value="Blue">Blue</option>
            <option value="Large">Large</option>
          </select>
        </div>

        {/* Upload Box */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Upload Images for Variant
          </label>

          <input
            type="file"
            multiple
            onChange={handleImageUpload}
            className="block w-full text-sm text-gray-600"
          />

          <p className="text-xs text-gray-500 mt-1">
            Upload at least 1 main image per variant. JPG/PNG only.
          </p>
        </div>

        {/* Preview Images */}
        {images.length > 0 && (
          <div>
            <p className="text-sm font-medium mb-2">Uploaded Images</p>
            <div className="flex flex-wrap gap-4">
              {images.map((img, index) => (
                <div
                  key={index}
                  className="relative w-24 h-24 border rounded overflow-hidden"
                >
                  <img
                    src={URL.createObjectURL(img)}
                    alt="variant"
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => removeImage(index)}
                    className="absolute top-1 right-1 bg-white text-red-500 rounded-full text-xs px-1"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Info */}
        <p className="text-xs text-gray-500">
          Each variant must have its own images to help customers choose correctly.
        </p>

      </div>
    </Card>
  );
};

export default VariantImages;
