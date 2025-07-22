import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ProductCard } from "./ProductCard";
import type { Product } from "../../types";

describe("ProductCard", () => {
  const mockProduct: Product = {
    index: 1,
    isSale: false,
    price: "$29.99",
    productImage: "p1.jpeg",
    productName: "Product 1",
    type: "Beer",
  };

  it('does NOT display a "Sale" badge if isSale is false', () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.queryByText("Sale")).not.toBeInTheDocument();
  });

  it('displays a "Sale" badge if isSale is true', () => {
    const saleProduct = {
      ...mockProduct,
      isSale: true,
    };
    render(<ProductCard product={saleProduct} />);
    expect(screen.queryByText("Sale")).toBeInTheDocument();
  });
});
