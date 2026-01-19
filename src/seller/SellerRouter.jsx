import { Routes, Route } from "react-router-dom";
import SellerLayout from "./SellerSidebar";
import AdminProduct from "./AdminProduct";
import Category from "./category";

const SellerRouter = () => (
  <Routes>
    <Route element={<SellerLayout />}>
    <Route path="AdminProduct" element={<AdminProduct />}>
    <Route path="category" element={<Category />} />
    {/* <Route path="brand" element={<Brand />} />
    <Route path="product-info" element={<ProductInfo />} />
    <Route path="attributes" element={<Attributes />} />
    <Route path="variants" element={<Variants />} />
    <Route path="pricing" element={<VariantPricing />} />
    <Route path="features" element={<Features />} />
    <Route path="specifications" element={<Specifications />} />
    <Route path="manufacturer" element={<Manufacturer />} />
    <Route path="variant-images" element={<VariantImages />} />
    <Route path="images" element={<Images />} />
    <Route path="additional-info" element={<AdditionalInfo />} /> */}
  </Route>
    </Route>
  </Routes>
);

export default SellerRouter;
