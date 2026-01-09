const Category = () => {
  return (
    <div className="bg-white p-6 max-w-2xl">
      {/* Title */}
      <h2 className="text-lg font-semibold mb-4">Select Category</h2>

      {/* Final Category ID Input */}
      <input
        type="text"
        placeholder="Final Category ID"
        className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-1 focus:ring-blue-500"
      />

      {/* Preview Breadcrumb Button */}
      <button
        className="px-4 py-2 border border-blue-500 text-blue-500 rounded
                   hover:bg-blue-50 text-sm font-medium"
      >
        PREVIEW BREADCRUMB
      </button>
    </div>
  );
};

export default Category;
