import type { Product } from "../types";

export const filterProducts = (
  products: Product[],
  type: string,
  searchTerm: string
): Product[] => {
  return products
    .filter((product) => {
      return type === "All" || product.type === type;
    })
    .filter((product) => {
      return (
        searchTerm === "" ||
        product.productName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
};
