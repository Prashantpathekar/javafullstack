import { useState } from "react";

const VariantImages = ({ variants = [], onNext }) => {
  // example variants:
  // [{ id: 1, color: "Brown" }, { id: 2, color: "Grey" }]

  const [images, setImages] = useState({}); 
  // { variantId: [File, File] }

  const handleImageChange = (variantId, files) => {
    setImages({
      ...images,
      [variantId]: Array.from(files)
    });
  };

  const handleSaveImages = () => {
    if (variants.length === 0) {
      alert("No variants found");
      return;
    }

    // optional validation
    const firstVariant = variants[0];
    if (!images[firstVariant.id] || images[firstVariant.id].length === 0) {
      alert("Please upload images for at least one variant");
      return;
    }

    // 👉 later API call (multipart upload)
    console.log("Variant Images:", images);

    onNext(); // next sidebar step (Images / Review / Publish)
  };

  return (
    <div className="bg-white p-6 rounded shadow w-[800px]">
      <h2 className="text-lg font-semibold mb-2">
        Variant Images
      </h2>
      <p className="text-sm text-gray-600 mb-4">
        Upload images for each variant. These images will change when customers select a variant.
      </p>

      {variants.map((variant) => (
        <div
          key={variant.id}
          className="border rounded p-4 mb-4"
        >
          <h3 className="font-medium mb-2">
            Variant: {variant.color || variant.name}
          </h3>

          <input
            type="file"
            multiple
            accept="image/*"
            className="border p-2 w-full"
            onChange={(e) =>
              handleImageChange(variant.id, e.target.files)
            }
          />

          {images[variant.id] && (
            <p className="text-sm text-green-600 mt-2">
              {images[variant.id].length} image(s) selected
            </p>
          )}
        </div>
      ))}

      <button
        onClick={handleSaveImages}
        className="w-full px-4 py-2 bg-blue-600 text-white rounded"
      >
        Save & Continue →
      </button>
    </div>
  );
};

export default VariantImages;
