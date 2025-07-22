import { Header } from "./components/Layout/Header";
import { Footer } from "./components/Layout/Footer";

import type { Product } from "./types";
import productsData from "./assets/products.json";
import { useState } from "react";
import { ProductList } from "./components/ProductList/ProductList";
import { Filters } from "./components/Filters/Filters";
import { filterProducts } from "./utils/filterLogic";
const App = () => {
  const products: Product[] = productsData as Product[];
  const [productTypeFilter, setProductTypeFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = filterProducts(
    products,
    productTypeFilter,
    searchTerm
  );

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <Filters
          onFilterChange={setProductTypeFilter}
          onSearchChange={setSearchTerm}
        />
        <ProductList products={filteredProducts} />
      </main>
      <Footer />
    </div>
  );
};
export default App;
