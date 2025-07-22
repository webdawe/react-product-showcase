import type { Product } from "../../types";
import { ProductCard } from "../ProductCard/ProductCard";
type ProductListProps = {
  products: Product[];
};

export const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm-grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={`product-${product.index}`} product={product} />
      ))}
    </div>
  );
};
