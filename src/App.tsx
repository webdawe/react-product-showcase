import { Header } from "./components/Layout/Header";
import { Footer } from "./components/Layout/Footer";
import { ProductCard } from "./components/ProductCard/ProductCard";
import type { Product } from "./types";
import productsData from "./assets/products.json";
import { useState } from "react";
const App = () => {
  const [products, setProducts] = useState<Product[]>(
    productsData as Product[]
  );
  const randomIndex = Math.floor(Math.random() * productsData.length);
  const sampleProduct = products[randomIndex - 1];
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <ProductCard product={sampleProduct} />
      </main>
      <Footer />
    </div>
  );
};
export default App;
