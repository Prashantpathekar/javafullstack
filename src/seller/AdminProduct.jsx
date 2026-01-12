import { useState } from "react";
import Category from "./Category";
import Brand from "./Brand";
import ProductInfo from "./ProductInfo";
import Attributes from "./Attributes";
import Variants from "./Variants";
import VariantPricing from "./VariantPricing"; // ✅ FIXED IMPORT
import Features from "./Features";
import Specifications from "./Specifications";
import Manufacturer from "./Manufacturer";
import VariantImages from "./VariantImages";
import Images from "./Images";

const steps = [
  "Category",
  "Brand",
  "Product Information",
  "Attributes",
  "Variants",
  "Variant Pricing",
  "Features",
  "Specifications",
  "Manufacturer",
  "Variant Images",
  "Images",
];

const AdminProduct = () => {
  const [currentStep, setCurrentStep] = useState(0);

  // 🔥 IDs
  const [productId, setProductId] = useState(null);
  const [selectedVariantId, setSelectedVariantId] = useState(null);

  // 🔥 product state (safe)
  const [product, setProduct] = useState({
    categoryId: null,
    brandId: null,
    info: {},
    attributes: [],
    variants: [],
    pricing: {},
    features: [],
    specifications: {},
    manufacturer: {},
    variantImages: [],
    images: [],
  });

  /* ---------------- NAV HELPERS ---------------- */
  const next = () => setCurrentStep((s) => s + 1);
  const prev = () => setCurrentStep((s) => Math.max(s - 1, 0));

  const updateProduct = (key, value) => {
    if (
      value &&
      typeof value === "object" &&
      (value.nativeEvent || value.target || value.window)
    ) {
      console.error("❌ Invalid object in updateProduct:", key, value);
      return;
    }

    setProduct((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  console.log(
    "STEP:",
    currentStep,
    "PRODUCT ID:",
    productId,
    "VARIANT ID:",
    selectedVariantId
  );

  return (
    <div className="flex h-screen bg-gray-100">
      {/* ================= SIDEBAR ================= */}
      <div className="w-64 bg-white border-r p-4">
        <h2 className="font-bold mb-4">PRODUCT SETUP</h2>

        <ul className="space-y-2 text-sm">
          {steps.map((s, i) => (
            <li
              key={i}
              onClick={() => i <= currentStep && setCurrentStep(i)}
              className={`px-3 py-2 rounded cursor-pointer
                ${
                  i === currentStep
                    ? "bg-blue-600 text-white"
                    : i < currentStep
                    ? "text-green-600 hover:bg-gray-100"
                    : "text-gray-400 cursor-not-allowed"
                }`}
            >
              {i + 1}. {s}
            </li>
          ))}
        </ul>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="flex-1 p-6 overflow-auto">
        {/* STEP 0: CATEGORY */}
        {currentStep === 0 && (
          <Category
            value={product.categoryId}
            onChange={(v) => updateProduct("categoryId", v)}
            onNext={(pid) => {
              setProductId(Number(pid));
              setCurrentStep(1);
            }}
          />
        )}

        {/* STEP 1: BRAND */}
        {currentStep === 1 && (
          <Brand
            categoryId={product.categoryId}
            value={product.brandId}
            productId={productId}
            onChange={(v) => updateProduct("brandId", v)}
            onNext={() => setCurrentStep(2)}
          />
        )}

        {/* STEP 2: PRODUCT INFO */}
        {currentStep === 2 && (
          <ProductInfo
            productId={productId}
            data={product.info}
            onChange={(v) => updateProduct("info", v)}
            onNext={next}
            onPrev={prev}
          />
        )}

        {/* STEP 3: ATTRIBUTES */}
        {currentStep === 3 && (
          <Attributes
            productId={productId}
            onNext={next}
            onPrev={prev}
          />
        )}

        {/* STEP 4: VARIANTS */}
        {currentStep === 4 && (
          <Variants
            productId={productId}
            onNext={next}
            onPrev={prev}
            onSelectVariant={setSelectedVariantId} // 🔥 CRITICAL
          />
        )}

        {/* STEP 5: VARIANT PRICING */}
        {currentStep === 5 && (
          <VariantPricing
            variantId={selectedVariantId} // 🔥 MUST NOT BE NULL
            onNext={next}
            onPrev={prev}
          />
        )}

        {/* STEP 6: FEATURES */}
        {currentStep === 6 && (
          <Features
            productId={productId}
            onNext={next}
            onPrev={prev}
          />
        )}

        {/* STEP 7: SPECIFICATIONS */}
        {currentStep === 7 && (
          <Specifications
            productId={productId}
            onNext={next}
            onPrev={prev}
          />
        )}

        {/* STEP 8: MANUFACTURER */}
        {currentStep === 8 && (
          <Manufacturer
            productId={productId}
            onNext={next}
            onPrev={prev}
          />
        )}

        {/* STEP 9: VARIANT IMAGES */}
        {currentStep === 9 && (
          <VariantImages
            productId={productId}
            onNext={next}
            onPrev={prev}
          />
        )}

        {/* STEP 10: IMAGES */}
        {currentStep === 10 && (
          <Images
            productId={productId}
            product={product}
            onPrev={prev}
          />
        )}
      </div>
    </div>
  );
};

export default AdminProduct;
