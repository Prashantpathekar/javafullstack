import { Link } from "react-router-dom";
import { Search, User, Heart, ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";
import Logo from "./Logo";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white border-b">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">

        {/* Logo */}
        <Link to="/">
          <Logo />
        </Link>

        {/* Search (Desktop only) */}
        <div className="hidden md:flex flex-1 mx-8 items-center rounded-md bg-gray-100 px-4 py-3">
          <input type="text" placeholder="Search your products" className="w-full bg-transparent text-sm outline-none text-gray-700"/>
          <Search className="h-5 w-5 text-gray-500" />
        </div>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center gap-8 text-gray-800">

          {/* 👉 Become a Seller */}
          <Link to="/seller" className="rounded-md border px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50">Become a Seller</Link>

          {/* Profile */}
          <div className="relative">
            <div
              className="flex flex-col items-center cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              <User className="h-5 w-5" />
              <span className="text-xs mt-1">Profile</span>
            </div>

            {open && (
              <div className="absolute right-0 mt-3 w-40 rounded-md border bg-white shadow-lg">
                <Link to="/login"className="block px-4 py-2 text-sm hover:bg-gray-100" onClick={() => setOpen(false)}>Login</Link>
                <Link to="/register"className="block px-4 py-2 text-sm hover:bg-gray-100" onClick={() => setOpen(false)}>Register</Link>
              </div>)}  </div>

          <div className="flex flex-col items-center cursor-pointer">
            <Heart className="h-5 w-5" />
            <span className="text-xs mt-1">Wishlist</span>
          </div>

          <div className="flex flex-col items-center cursor-pointer">
            <ShoppingCart className="h-5 w-5" />
            <span className="text-xs mt-1">Cart</span>
          </div>
        </div>
        

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t bg-white px-4 py-4 space-y-4">

          {/* Search */}
          <div className="flex items-center rounded-md bg-gray-100 px-4 py-3">
            <input
              type="text"
              placeholder="Search products"
              className="w-full bg-transparent text-sm outline-none"
            />
            <Search className="h-5 w-5 text-gray-500" />
          </div>

          {/* 👉 Become a Seller (Mobile) */}
          <Link
            to="/seller"
            className="block text-sm font-medium text-blue-600"
            onClick={() => setMenuOpen(false)} > Become a Seller</Link>

          <Link to="/login" className="block text-sm">Login</Link>
          <Link to="/register" className="block text-sm">Register</Link>
          <Link to="/wishlist" className="block text-sm">Wishlist</Link>
          <Link to="/cart" className="block text-sm">Cart</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
