import { useState, useMemo } from "react";
import type { Product } from "../types";
import productsData from "../assets/products.json";
import { filterProducts } from "../utils/filterLogic";
export const useProducts = () => {
  const products: Product[] = productsData as Product[];
  const [productTypeFilter, setProductTypeFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = filterProducts(
    products,
    productTypeFilter,
    searchTerm
  );

  return {
    filteredProducts,
    setProductTypeFilter,
    setSearchTerm,
  };
};
