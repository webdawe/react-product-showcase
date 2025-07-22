export interface Product {
  index: number;
  isSale: boolean;
  price: string;
  productImage: string;
  productName: string;
  type: "Beer" | "Wine" | "Spirits" | "Cider";
}
export const PRODUCT_TYPES = ["Beer", "Wine", "Spirits", "Cider"] as const;
