import { useState } from "react";
import api from "./api";

const ProductInfo = ({ productId, data, onChange, onNext, onPrev }) => {
  const [form, setForm] = useState({
    name: data?.name || "",
    slug: data?.slug || "",
    description: data?.description || "",
    price: data?.price || ""
  });

  const [saving, setSaving] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    if (!productId) {
      alert("Product not found ❌");
      return;
    }

    if (!form.name.trim()) {
      alert("Product name required ❗");
      return;
    }

    try {
      setSaving(true);

      // 🔥 FIXED URL
      const res = await api.put(`/products/${productId}/info`, {
        name: form.name,
        slug: form.slug,
        description: form.description,
        price: form.price
      });

      // ✅ update parent state (optional)
      onChange(res.data);

      onNext(); // 👉 Attributes step

    } catch (err) {
      console.error("❌ ProductInfo save failed", err);
      alert("Failed to save product info ❌");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow w-[700px]">
      <h2 className="text-lg font-semibold mb-4">
        Product Information
      </h2>

      <input
        name="name"
        placeholder="Product Name"
        className="border p-2 w-full mb-3"
        value={form.name}
        onChange={handleChange}
      />

      <input
        name="slug"
        placeholder="Slug (auto / manual)"
        className="border p-2 w-full mb-3"
        value={form.slug}
        onChange={handleChange}
      />

      <textarea
        name="description"
        placeholder="Product Description"
        className="border p-2 w-full mb-3"
        rows={4}
        value={form.description}
        onChange={handleChange}
      />

      <input
        type="number"
        name="price"
        placeholder="Base Price"
        className="border p-2 w-full mb-4"
        value={form.price}
        onChange={handleChange}
      />

      <div className="flex gap-3">
        <button
          type="button"
          onClick={onPrev}
          className="px-4 py-2 border rounded"
        >
          ← Back
        </button>

        <button
          type="button"
          onClick={handleSave}
          disabled={saving}
          className={`px-4 py-2 text-white rounded ${
            saving ? "bg-gray-400" : "bg-blue-600"
          }`}
        >
          {saving ? "Saving..." : "Save & Continue →"}
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
