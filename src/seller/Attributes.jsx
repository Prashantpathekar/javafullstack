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

const Attributes = () => {
  return (
    <Card title="Attributes">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        {/* Color */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Color
          </label>
          <input
            type="text"
            placeholder="e.g. Brown, Black"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* Material */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Material
          </label>
          <input
            type="text"
            placeholder="e.g. Wood, Metal"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* Size */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Size
          </label>
          <input
            type="text"
            placeholder="e.g. Large, Medium"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
  {/* Right side */}
<button className="bg-[#8B5A2B] text-white px-6 py-2 rounded font-medium">
    Continue
  </button>
      </div>
    </Card>
  );
};

export default Attributes;
