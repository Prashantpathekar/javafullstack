import { useState } from "react";
import api from "./api";

const createEmptyVariant = () => ({
  color: "",
  material: "",
  size: "",
  finish: "",
  price: "",
  stock: ""
});

const Variants = ({ productId, onNext, onSelectVariant }) => {
  const [variants, setVariants] = useState([createEmptyVariant()]);
  const [saving, setSaving] = useState(false);

  const handleChange = (index, field, value) => {
    setVariants((prev) => {
      const copy = [...prev];
      copy[index] = { ...copy[index], [field]: value };
      return copy;
    });
  };

  const addVariant = () => {
    setVariants((prev) => [...prev, createEmptyVariant()]);
  };

  const removeVariant = (index) => {
    setVariants((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSave = async () => {
    if (!productId) {
      alert("Product not found ❌");
      return;
    }

    for (let v of variants) {
      if (!v.price || !v.stock) {
        alert("Price & Stock are required ❗");
        return;
      }
    }

    try {
      setSaving(true);

      const res = await api.post(
        `/products/${productId}/variants`,
        variants.map((v) => ({
          color: v.color,
          material: v.material,
          size: v.size,
          finish: v.finish,
          price: Number(v.price),
          stock: Number(v.stock)
        }))
      );

      // ✅ FIRST set variantId (for pricing step)
      if (onSelectVariant && res.data?.length) {
        onSelectVariant(res.data[0].id);
      }

      console.log("✅ Variants saved successfully");

      // ✅ THEN move to next step
      onNext();

    } catch (error) {
      console.error("❌ Variant save failed", error.response?.data || error);
      alert("Variants save failed ❌");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow w-[900px]">
      <h2 className="text-lg font-semibold mb-4">
        Product Variants
      </h2>

      {variants.map((v, index) => (
        <div
          key={index}
          className="grid grid-cols-6 gap-3 mb-4 p-3 border rounded"
        >
          <input
            placeholder="Color"
            className="border p-2"
            value={v.color}
            onChange={(e) =>
              handleChange(index, "color", e.target.value)
            }
          />

          <input
            placeholder="Material"
            className="border p-2"
            value={v.material}
            onChange={(e) =>
              handleChange(index, "material", e.target.value)
            }
          />

          <input
            placeholder="Size"
            className="border p-2"
            value={v.size}
            onChange={(e) =>
              handleChange(index, "size", e.target.value)
            }
          />

          <input
            placeholder="Finish"
            className="border p-2"
            value={v.finish}
            onChange={(e) =>
              handleChange(index, "finish", e.target.value)
            }
          />

          <input
            type="number"
            placeholder="Price"
            className="border p-2"
            value={v.price}
            onChange={(e) =>
              handleChange(index, "price", e.target.value)
            }
          />

          <input
            type="number"
            placeholder="Stock"
            className="border p-2"
            value={v.stock}
            onChange={(e) =>
              handleChange(index, "stock", e.target.value)
            }
          />

          {variants.length > 1 && (
            <button
              type="button"
              onClick={() => removeVariant(index)}
              className="col-span-6 text-red-600 text-sm"
            >
              Remove Variant
            </button>
          )}
        </div>
      ))}

      <button
        type="button"
        onClick={addVariant}
        className="mb-4 px-4 py-2 border rounded"
      >
        + Add Variant
      </button>

      <button
        type="button"
        disabled={saving}
        onClick={handleSave}
        className={`w-full px-4 py-2 text-white rounded ${
          saving ? "bg-gray-400" : "bg-blue-600"
        }`}
      >
        {saving ? "Saving..." : "Save Variants & Continue →"}
      </button>
    </div>
  );
};

export default Variants;
