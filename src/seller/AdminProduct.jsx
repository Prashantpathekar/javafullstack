import { useState } from "react";

import Category from "./Category";
import Brand from "./Brand";
import ProductInfo from "./ProductInfo";
import Attributes from "./Attributes";
import Variants from "./Variants";
import Pricing from "./Pricing";
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
  "Pricing",
  "Features",
  "Product Specifications",
  "From the Manufacturer",
  "Variant Image Upload",
  "Image Upload",
];

export default function AdminProduct() {
  const [activeStep, setActiveStep] = useState(0);

  const renderStep = (step) => {
    switch (step) {
      case 0: return <Category />;
      case 1: return <Brand />;
      case 2: return <ProductInfo />;
      case 3: return <Attributes />;
      case 4: return <Variants />;
      case 5: return <Pricing />;
      case 6: return <Features />;
      case 7: return <Specifications />;
      case 8: return <Manufacturer />;
      case 9: return <VariantImages />;
      case 10: return <Images />;
      default: return null;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* SIDEBAR */}
      <div className="w-72 bg-white border-r px-4 py-6 flex flex-col">
        <h2 className="text-lg font-bold mb-6 tracking-wide">
          PRODUCT SETUP
        </h2>

        <ul className="flex-1 space-y-2 overflow-y-auto pr-1">
          {steps.map((step, index) => (
            <li
              key={index}
              onClick={() => setActiveStep(index)}
              className={`cursor-pointer px-4 py-3 rounded-lg text-base font-medium transition
                ${
                  activeStep === index
                    ? "bg-blue-600 text-white shadow"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
            >
              <span className="mr-2">{index + 1}.</span>
              {step}
            </li>
          ))}
        </ul>
      </div>

      {/* CONTENT */}
      <div className="flex-1 p-8 overflow-y-auto">
        {renderStep(activeStep)}
      </div>

    </div>
  );
}
