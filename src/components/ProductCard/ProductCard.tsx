import type { Product } from "../../types";

type ProductCardProps = {
  product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  const imageUrl = `/images/products/${product.productImage}`;

  return (
    <div className=" relative bg-white border rounded-lg shadow-md p-4 flex flex-col text-center">
      {product.isSale && (
        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
          Sale
        </div>
      )}
      <img
        src={imageUrl}
        alt={product.productName}
        className="w-full h-48 object-contain mb-4"
      />
      <h3 className="text-lg font-semibold flex-grow">{product.productName}</h3>
      <p className="text-xl font-bold text-gray-900 mt-2">{product.price}</p>
    </div>
  );
};
