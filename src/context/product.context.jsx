import { createContext, useState } from "react";
import PRODUCTS from "../shop-data.json";

export const ProductsContext = createContext({
  currentProducts: [],
});

export const ProductsProvider = ({ children }) => {
  const [currentProducts, setCurrentProducts] = useState(PRODUCTS);
  const value = {currentProducts, setCurrentProducts};
  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
};