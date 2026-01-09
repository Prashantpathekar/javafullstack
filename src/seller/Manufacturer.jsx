const Card = ({ title, children }) => (
  <div className="bg-white rounded-lg shadow border p-6">
    <h2 className="text-lg font-semibold mb-6 border-b pb-3">
      {title}
    </h2>
    {children}
  </div>
);

const Manufacturer = () => {
  return (
    <Card title="Manufacturer Details">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        {/* Manufacturer Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Manufacturer Name
          </label>
          <input
            type="text"
            placeholder="e.g. ABC Furniture Pvt Ltd"
            className="w-full border rounded px-3 py-2 focus:ring-1 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Brand Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Brand Name
          </label>
          <input
            type="text"
            placeholder="e.g. UrbanWood"
            className="w-full border rounded px-3 py-2 focus:ring-1 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Country of Origin */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Country of Origin
          </label>
          <select className="w-full border rounded px-3 py-2">
            <option value="">Select country</option>
            <option value="India">India</option>
            <option value="China">China</option>
            <option value="Vietnam">Vietnam</option>
          </select>
        </div>

        {/* Importer Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Importer Name (if applicable)
          </label>
          <input
            type="text"
            placeholder="Importer name"
            className="w-full border rounded px-3 py-2 focus:ring-1 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Manufacturer Address */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Manufacturer Address
          </label>
          <textarea
            rows={3}
            placeholder="Full manufacturer address"
            className="w-full border rounded px-3 py-2 focus:ring-1 focus:ring-blue-500 focus:outline-none"
          />
        </div>

      </div>

      {/* Compliance Hint */}
      <p className="text-xs text-gray-500 mt-4">
        Manufacturer details are required for legal compliance and customer transparency.
      </p>
    </Card>
  );
};

export default Manufacturer;
