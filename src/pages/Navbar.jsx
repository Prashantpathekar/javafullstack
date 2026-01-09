import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between px-10 py-4 shadow">
        {/* Logo */}
        <h1 className="flex items-center gap-2 text-4xl font-semibold">
          <span>🛋️</span>
          <span className="text-[#5a3e2b]">Furni</span>
          <span className="text-gray-800 font-normal">Home</span>
        </h1>

        {/* Search */}
        <input
          type="text"
          placeholder="Search furniture..."
          className="w-1/3 px-4 py-2 border rounded"
        />

        {/* Auth + Seller Panel */}
        <div className="flex gap-6 items-center">
          <Link to="/login">
            <button className="px-4 py-2 border rounded hover:bg-gray-100">
              Login
            </button>
          </Link>

          <Link to="/register">
            <button className="px-4 py-2 bg-blue-600 text-white rounded">
              Register
            </button>
          </Link>

          {/* ✅ SELLER PANEL BUTTON */}
          <Link to="/seller/AdminProduct">
            <button className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700">
              Seller Panel
            </button>
          </Link>

          {/* Cart */}
          <button className="text-xl">🛒</button>
        </div>
      </nav>

      {/* 👇 pages yahin render honge */}
      <Outlet />
    </>
  );
};

export default Navbar;
