import { createContext, useContext, useState } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [categoryId, setCategoryId] = useState(null);
  const [breadcrumb, setBreadcrumb] = useState("");

  return (
    <ProductContext.Provider
      value={{ categoryId, setCategoryId, breadcrumb, setBreadcrumb }}
    >
      {children}    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
