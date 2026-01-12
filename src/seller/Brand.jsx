import { useEffect, useState } from "react";
import api from "./api";

const Brand = ({ categoryId, value, onChange, onNext, productId }) => {
  const [brands, setBrands] = useState([]);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!categoryId) return;

    api
      .get(`/brands?categoryId=${categoryId}`)
      .then((res) => setBrands(res.data || []))
      .catch(console.error);
  }, [categoryId]);

  const handleSelect = (e) => {
    const selectedBrand = Number(e.target.value);
    onChange(selectedBrand); // ✅ only state update
  };

  const handleNext = async () => {
    if (!value) {
      alert("Please select a brand ❗");
      return;
    }

    onNext(); // ✅ STEP CHANGE FIRST (UI SAFE)

    // 🔹 save in background
    if (!productId) return;

    try {
      setSaving(true);

      await api.put(`/products/${productId}/brand`, {
        brandId: value,
      });

      console.log("✅ Brand saved");

    } catch (err) {
      console.error("❌ Brand save failed", err);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow w-[600px]">
      <h2 className="text-lg font-semibold mb-4">Select Brand</h2>

      <select
        value={value || ""}
        onChange={handleSelect}
        className="border p-2 w-full mb-4"
      >
        <option value="">Select Brand</option>
        {brands.map((b) => (
          <option key={b.id} value={b.id}>
            {b.name}
          </option>
        ))}
      </select>

      <button
        type="button"
        onClick={handleNext}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Save & Continue →
      </button>

      {saving && (
        <p className="text-sm text-gray-500 mt-2">
          Saving brand...
        </p>
      )}
    </div>
  );
};

export default Brand;
