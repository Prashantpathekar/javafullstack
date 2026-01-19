import React, { useEffect, useState } from "react";
import api from "../Apis/api";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  // 🔹 categories load
  useEffect(() => {
    api.get("/category")
      .then((res) => {
        setCategories(res.data.data);
      })
      .catch((err) => {
        console.error("Category load error", err);
      });
  }, []);

  // 🔹 SAVE + NEXT
  const handleNext = async () => {
    if (!selectedCategory) {
      alert("Please select category");
      return;
    }

    try {
      console.log("Saving category...");

      const res = await api.post("/product/draft/category", {
        categoryId: selectedCategory,
      });

      console.log("Saved:", res.data);

      // 🔴 YAHAN STORE KARNA HAI
      localStorage.setItem("draftId", res.data.draftId);

      // 🔴 YAHAN NAVIGATE KARNA HAI
      navigate("/seller/AdminProduct/brand");

    } catch (error) {
      console.error("Save error", error);
    }
  };

  return (
    <div>
      <h2>Select Category</h2>

      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="">Select Category</option>
        {categories.map((c) => (
          <option key={c.id} value={c.id}>
            {c.name}
          </option>
        ))}
      </select>

      <br /><br />

      <button onClick={handleNext}>
        Save & Continue
      </button>
    </div>
  );
};

export default Category;
