const Card = ({ title, children }) => {
  return (
    <div className="bg-white rounded-lg shadow border p-6">
      <h2 className="text-lg font-semibold mb-6 border-b pb-3">
        {title}
      </h2>
      {children}
    </div>
  );
};

const ProductInfo = () => {
  return (
    <Card title="Product Information">
      <div className="space-y-5">

        {/* Product Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Product Title
          </label>
          <input
            type="text"
            placeholder="Enter product title"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* Short Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Short Description
          </label>
          <textarea
            rows={3}
            placeholder="Enter short description"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
          />
        </div>

        {/* Full Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Description
          </label>
          <textarea
            rows={5}
            placeholder="Enter full product description"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

      </div>
    </Card>
  );
};

export default ProductInfo;
