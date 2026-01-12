import { useEffect, useState } from "react";
import api from "./api";

const VariantPricing = ({ variantId, onNext, onPrev }) => {
  const [form, setForm] = useState({
    mrp: "",
    sellingPrice: "",
    discountType: "PERCENT", // PERCENT | FLAT
    discountValue: "",
    gstPercent: 18, // 🔥 USER CAN CHANGE
    discountAmount: 0,
    gstAmount: 0,
    finalPrice: 0,
  });

  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(false);

  /* ================= AUTO CALCULATION ================= */
  useEffect(() => {
    // const  = Number(form.mrp) || 0;
    const selling = Number(form.sellingPrice) || 0;
    const discountVal = Number(form.discountValue) || 0;
    const gstPercent = Number(form.gstPercent) || 0;

    let discountAmount = 0;

    if (selling > 0 && discountVal > 0) {
      discountAmount =
        form.discountType === "PERCENT"
          ? (selling * discountVal) / 100
          : discountVal;
    }

    discountAmount = Math.min(discountAmount, selling);

    const priceAfterDiscount = selling - discountAmount;
    const gstAmount = (priceAfterDiscount * gstPercent) / 100;
    const finalPrice = priceAfterDiscount + gstAmount;

    setForm((prev) => ({
      ...prev,
      discountAmount: Math.round(discountAmount),
      gstAmount: Math.round(gstAmount),
      finalPrice: Math.round(finalPrice),
    }));
  }, [
    form.mrp,
    form.sellingPrice,
    form.discountType,
    form.discountValue,
    form.gstPercent,
  ]);

  /* ================= LOAD EXISTING ================= */
  useEffect(() => {
    if (!variantId) return;

    setLoading(true);

    api
      .get(`/variants/${variantId}/pricing`)
      .then((res) => {
        if (!res.data) return;

        setForm((prev) => ({
          ...prev,
          mrp: res.data.mrp ?? "",
          sellingPrice: res.data.sellingPrice ?? "",
          finalPrice: res.data.finalPrice ?? 0,
        }));
      })
      .finally(() => setLoading(false));
  }, [variantId]);

  /* ================= INPUT HANDLER ================= */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  /* ================= SAVE PRICING ================= */
  const pricing = async () => {
    if (!variantId) {
      alert("Variant not selected ❌");
      return;
    }

    if (!form.mrp || !form.sellingPrice) {
      alert("MRP & Selling Price required ❗");
      return;
    }

    if (Number(form.sellingPrice) > Number(form.mrp)) {
      alert("Selling price cannot be greater than MRP ❌");
      return;
    }

    try {
      setSaving(true);

      // 1️⃣ SAVE PRICE
      await api.post(`/variants/${variantId}/price`, {
        mrp: Number(form.mrp),
        sellingPrice: Number(form.sellingPrice),
      });

      // 2️⃣ SAVE DISCOUNT (OPTIONAL)
      if (form.discountAmount > 0) {
        await api.post(`/variants/${variantId}/discount`, {
          discountType: form.discountType,
          discountValue: Number(form.discountValue),
        });
      }

      console.log("✅ Pricing saved successfully");
      onNext(); // 👉 FEATURES

    } catch (err) {
      console.error("❌ Pricing save failed", err);
      alert("Pricing save failed ❌");
    } finally {
      setSaving(false);
    }
  };

  /* ================= GUARD ================= */
  if (!variantId) {
    return (
      <div className="bg-white p-6 rounded shadow w-[600px]">
        ❌ Please select a variant first
      </div>
    );
  }

  /* ================= UI ================= */
  return (
    <div className="bg-white p-6 rounded shadow w-[750px]">
      <h2 className="text-lg font-semibold mb-4">
        Variant Pricing (GST Editable)
      </h2>

      {loading ? (
        <p>Loading pricing...</p>
      ) : (
        <>
          {/* MRP */}
          <input
            name="mrp"
            type="number"
            placeholder="MRP (₹)"
            className="border p-2 w-full mb-3"
            value={form.mrp}
            onChange={handleChange}
          />

          {/* Selling Price */}
          <input
            name="sellingPrice"
            type="number"
            placeholder="Selling Price (₹)"
            className="border p-2 w-full mb-3"
            value={form.sellingPrice}
            onChange={handleChange}
          />

          {/* DISCOUNT */}
          <div className="grid grid-cols-2 gap-3 mb-3">
            <select
              name="discountType"
              className="border p-2"
              value={form.discountType}
              onChange={handleChange}
            >
              <option value="PERCENT">Percentage (%)</option>
              <option value="FLAT">Flat (₹)</option>
            </select>

            <input
              name="discountValue"
              type="number"
              placeholder={
                form.discountType === "PERCENT"
                  ? "Discount %"
                  : "Discount ₹"
              }
              className="border p-2"
              value={form.discountValue}
              onChange={handleChange}
            />
          </div>

          {/* GST */}
          <input
            name="gstPercent"
            type="number"
            placeholder="GST % (e.g. 18)"
            className="border p-2 w-full mb-3"
            value={form.gstPercent}
            onChange={handleChange}
          />

          {/* AMAZON STYLE SUMMARY */}
          <div className="bg-gray-100 p-4 rounded text-sm mb-4 space-y-1">
            <div>Discount Applied: ₹{form.discountAmount}</div>
            <div>GST ({form.gstPercent}%): ₹{form.gstAmount}</div>
            <div className="font-semibold text-base">
              Final Price: ₹{form.finalPrice}
            </div>
          </div>

          {/* ACTIONS */}
          <div className="flex gap-3">
            <button
              onClick={onPrev}
              className="px-4 py-2 border rounded"
            >
              ← Back
            </button>

            <button
              disabled={saving}
              onClick={pricing}
              className={`px-4 py-2 text-white rounded ${
                saving ? "bg-gray-400" : "bg-blue-600"
              }`}
            >
              {saving ? "Saving..." : "Save & Continue →"}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default VariantPricing;
