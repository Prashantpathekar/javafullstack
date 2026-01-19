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
  "Additional Information",
];

const SellerSidebar = ({ currentStep }) => {
  return (
    <div className="w-64 border-r">
      <h2 className="font-bold p-4">PRODUCT SETUP</h2>

      {steps.map((step, index) => (
        <div
          key={index}
          className={`p-3 cursor-pointer ${
            currentStep === index + 1
              ? "bg-blue-600 text-white"
              : "text-gray-500"
          }`}
        >
          {index + 1}. {step}
        </div>
      ))}
    </div>
  );
};

export default SellerSidebar;
