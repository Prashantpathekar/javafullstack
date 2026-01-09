import { useState } from "react";
import { uploadToCloudinary } from "./uploadToCloudinary";

/* Card Component */
const Card = ({ title, children }) => (
  <div className="bg-white rounded-lg shadow border p-6">
    <h2 className="text-lg font-semibold mb-6 border-b pb-3">
      {title}
    </h2>
    {children}
  </div>
);

const Images = () => {
  const [mainImage, setMainImage] = useState(null);
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(false);

  /* Main Image Upload */
  const handleMainImage = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setLoading(true);
    try {
      const url = await uploadToCloudinary(file);
      setMainImage(url);
    } catch {
      alert("Main image upload failed");
    } finally {
      setLoading(false);
    }
  };

  /* Gallery Upload (Multiple) */
  const handleGallery = async (e) => {
    const files = Array.from(e.target.files);
    if (!files.length) return;

    setLoading(true);
    try {
      const urls = await Promise.all(
        files.map((file) => uploadToCloudinary(file))
      );
      setGallery((prev) => [...prev, ...urls]);
    } catch {
      alert("Gallery upload failed");
    } finally {
      setLoading(false);
    }
  };

  const removeGalleryImage = (index) => {
    setGallery((prev) => prev.filter((_, i) => i !== index));
  };

  /* SUBMIT */
  const handleSubmit = () => {
    if (!mainImage) {
      alert("Main image is required");
      return;
    }

    const payload = {
      mainImage,
      galleryImages: gallery,
    };

    console.log("SUBMITTED DATA 👉", payload);

    alert("Images submitted successfully ✅");

    // yahan backend API call lagegi
    // axios.post("/api/product/images", payload)
  };

  return (
    <Card title="Product Images">
      <div className="space-y-6">

        {/* MAIN IMAGE */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Main Image (Required)
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleMainImage}
            className="block text-sm"
          />
          {mainImage && (
            <img
              src={mainImage}
              alt="Main"
              className="mt-3 w-32 h-32 object-cover border rounded"
            />
          )}
        </div>

        {/* GALLERY */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Additional Images
          </label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleGallery}
            className="block text-sm"
          />

          <div className="flex flex-wrap gap-4 mt-3">
            {gallery.map((img, index) => (
              <div
                key={index}
                className="relative w-24 h-24 border rounded overflow-hidden"
              >
                <img
                  src={img}
                  alt="Gallery"
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => removeGalleryImage(index)}
                  className="absolute top-1 right-1 bg-white text-red-500 text-xs rounded-full px-1"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* SUBMIT BUTTON */}
        <div className="pt-4 border-t">
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="px-6 py-2 bg-black text-white rounded
                       disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Submit
          </button>
        </div>

        {loading && (
          <p className="text-sm text-gray-500">
            Uploading images...
          </p>
        )}

      </div>
    </Card>
  );
};

export default Images;
