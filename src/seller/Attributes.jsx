import { useState } from "react";
import api from "./api";

const Attributes = ({ productId, onNext, onPrev }) => {
  const [name, setName] = useState("");
  const [valueInput, setValueInput] = useState("");
  const [values, setValues] = useState([]);
  const [saving, setSaving] = useState(false);

  const addValue = () => {
    if (!valueInput.trim()) return;
    setValues((prev) => [...prev, valueInput.trim()]);
    setValueInput("");
  };

  const removeValue = (i) => {
    setValues((prev) => prev.filter((_, idx) => idx !== i));
  };

  const handleSave = async () => {
    console.log("➡️ ATTRIBUTES SAVE CLICKED");

    // 🔥 even if validation fails, step should not freeze
    if (!name.trim() || values.length === 0) {
      console.warn("Validation skipped, moving next");
      onNext();
      return;
    }

    try {
      setSaving(true);

      await api.post("/api/attributes", {
        productId,
        name,
        values
      });

      console.log("✅ Attribute saved");

    } catch (err) {
      console.error("❌ Attribute save failed:", err);
      // ❗ even on API error → still move next
    } finally {
      setSaving(false);
      onNext(); // 🔥 GUARANTEED NEXT
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow w-[700px]">
      <h2 className="text-lg font-semibold mb-4">
        Product Attributes
      </h2>

      <input
        placeholder="Attribute Name (Material, Color)"
        className="border p-2 w-full mb-3"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <div className="flex gap-2 mb-3">
        <input
          placeholder="Attribute Value"
          className="border p-2 flex-1"
          value={valueInput}
          onChange={(e) => setValueInput(e.target.value)}
        />
        <button
          type="button"              // 🔥 IMPORTANT
          onClick={addValue}
          className="px-4 py-2 border rounded"
        >
          Add
        </button>
      </div>

      {values.length > 0 && (
        <ul className="mb-4 list-disc ml-5 text-sm">
          {values.map((v, i) => (
            <li key={i} className="flex justify-between">
              {v}
              <button
                type="button"
                onClick={() => removeValue(i)}
                className="text-red-500 text-xs"
              >
                remove
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="flex gap-3">
        <button
          type="button"
          onClick={onPrev}
          className="px-4 py-2 border rounded"
        >
          ← Back
        </button>

        <button
          type="button"               // 🔥 IMPORTANT
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

export default Attributes;

