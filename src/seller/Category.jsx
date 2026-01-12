import { useEffect, useState } from "react";
import api from "./api";

const Category = ({ value, onChange, onNext }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [breadcrumb, setBreadcrumb] = useState("");

  useEffect(() => {
    api.get("/categories")
      .then(res => {
        setCategories(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const handlePreview = async () => {
    if (!value) {
      alert("Please select a category ❗");
      return;
    }

    try {
      const res = await api.get(`/categories/breadcrumb/${value}`);
      const path = res.data.map(c => c.name).join(" > ");
      setBreadcrumb(path);
    } catch (err) {
      console.error(err);
      alert("Failed to load breadcrumb ❌");
    }
  };

  const handleNext = async () => {
    if (!value) {
      alert("Please select a category");
      return;
    }

    try {
      const res = await api.post("/products", {
        categoryId: value
      });

      const productId = res.data.id;

      onNext(productId); // ✅ STEP CHANGE

    } catch (err) {
      console.error(err);
      alert("Failed to save category ❌");
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow w-[600px]">
      <h2 className="text-lg font-semibold mb-4">Select Category</h2>

      {loading ? (
        <p>Loading categories...</p>
      ) : (
        <select
          className="border p-2 w-full mb-4"
          value={value || ""}
          onChange={(e) => {
            onChange(Number(e.target.value));
            setBreadcrumb("");
          }}
        >
          <option value="" disabled>
            Select Final Category
          </option>

          {categories.map(c => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
      )}

      {breadcrumb && (
        <div className="mb-4 p-3 bg-gray-100 rounded text-sm text-gray-700">
          📍 <strong>Category Path:</strong> {breadcrumb}
        </div>
      )}

      <div className="flex gap-3">
        <button
          type="button"
          onClick={handlePreview}
          className="px-4 py-2 border border-blue-600 text-blue-600 rounded"
        >
          PREVIEW BREADCRUMB
        </button>

        {breadcrumb && (
          <button
            type="button"
            onClick={handleNext}
            className="px-4 py-2 bg-green-600 text-white rounded"
          >
            NEXT
          </button>
        )}
      </div>
    </div>
  );
};

export default Category;
