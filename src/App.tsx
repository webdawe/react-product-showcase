import { Header } from "./components/Layout/Header";
import { Footer } from "./components/Layout/Footer";

import type { Product } from "./types";
import productsData from "./assets/products.json";
import { useState } from "react";
import { ProductList } from "./components/ProductList/ProductList";
const App = () => {
  const [products, setProducts] = useState<Product[]>(
    productsData as Product[]
  );

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <ProductList products={products} />
      </main>
      <Footer />
    </div>
  );
};
export default App;
