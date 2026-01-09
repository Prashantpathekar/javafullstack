const Brand = ({ value, onChange }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Brand Name</h2>

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter brand name"
        className="border p-2 rounded w-64"
        
      />
      
    </div>
    
  );
};

export default Brand;
