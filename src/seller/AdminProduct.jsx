import { Outlet, useLocation } from "react-router-dom";
import SellerSidebar from "./SellerSidebar";

const stepMap = {
  category: 1,
//   brand: 2,
//   product-info: 3,
//   attributes: 4,o
//   variants: 5,
//   pricing: 6,
//   features: 7,
//   specifications: 8,
//   manufacturer: 9,
//   variant-images: 10,
//   images: 11,
//   additional-info: 12,


};

const AdminProduct = () => {
  const location = useLocation();
  const currentRoute = location.pathname.split("/").pop();

  return (
    <div className="flex h-screen">
      <SellerSidebar currentStep={stepMap[currentRoute]} />
      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminProduct;
