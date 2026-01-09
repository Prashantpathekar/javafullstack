const Card = ({ title, children }) => (
  <div className="bg-white rounded-lg shadow border p-6">
    <h2 className="text-lg font-semibold mb-6 border-b pb-3">
      {title}
    </h2>
    {children}
  </div>
);

const Pricing = () => {
  return (
    <Card title="Pricing">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

        {/* MRP */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            MRP (₹)
          </label>
          <input
            type="number"
            placeholder="e.g. 19999"
            className="w-full border rounded px-3 py-2 focus:ring-1 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Selling Price */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Selling Price (₹)
          </label>
          <input
            type="number"
            placeholder="e.g. 15999"
            className="w-full border rounded px-3 py-2 focus:ring-1 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* GST */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            GST %
          </label>
          <input
            type="number"
            placeholder="e.g. 18"
            className="w-full border rounded px-3 py-2 focus:ring-1 focus:ring-blue-500 focus:outline-none"
          />
        </div>

      </div>

      {/* Amazon-style hint */}
      <p className="text-xs text-gray-500 mt-4">
        GST will be calculated automatically based on the selected tax category.
      </p>
    </Card>
  );
};

export default Pricing;
