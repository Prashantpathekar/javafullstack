import api from "./api"
const Images = ({ product, onPrev }) => {

  const saveProduct = async () => {
    await api.post("/api/seller/products", product);
    alert("Product created successfully ✅");
  };

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-lg font-semibold mb-4">Upload Images</h2>

      <button
        onClick={onPrev}
        className="border px-4 py-2 mr-3"
      >
        Back
      </button>

      <button
        onClick={saveProduct}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        SAVE PRODUCT
      </button>
    </div>
  );
};

export default Images;
