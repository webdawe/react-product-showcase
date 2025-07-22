import { it, expect, describe } from "vitest";
import { Product } from "../types";
import { filterProducts } from "./filterLogic";

const mockProducts: Product[] = [
  {
    "index": 0,
    "isSale": false,
    "price": "$49.99",
    "productImage": "Product_1.jpeg",
    "productName": "Pure Blonde Crate",
    "type": "Beer",
  },
  {
    "index": 1,
    "isSale": true,
    "price": "$14.99",
    "productImage": "Product_2.jpeg",
    "productName": "Victoria Bitter 4x6x375ml",
    "type": "Beer",
  },
  {
    "index": 2,
    "isSale": false,
    "price": "$25.99",
    "productImage": "Product_5.jpeg",
    "productName": "Aquila Spark SauvB Bottle",
    "type": "Wine",
  },
];

describe("filterProducts", () => {
  it('should filter by product type "Beer"', () => {
    const result = filterProducts(mockProducts, "Beer", "");
    expect(result).toHaveLength(2);
    expect(result[0].type).toBe("Beer");
  });

  it('should return all products when filter by product type "All" and search is empty', () => {
    const result = filterProducts(mockProducts, "All", "");
    expect(result).toHaveLength(3);
    expect(result[0].productName).toBe("Pure Blonde Crate");
  });

  it('should filter search term "Bitter"', () => {
    const result = filterProducts(mockProducts, "All", "Bitter");
    expect(result).toHaveLength(1);
    expect(result[0].productName).toBe("Victoria Bitter 4x6x375ml");
  });

  it("should combine type and search filters correctly", () => {
    const result = filterProducts(mockProducts, "Beer", "Pure");
    expect(result).toHaveLength(1);
    expect(result[0].productName).toBe("Pure Blonde Crate");
    expect(result[0].type).toBe("Beer");
  });
});
