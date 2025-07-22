import { Header } from "./components/Layout/Header";
import { Footer } from "./components/Layout/Footer";
import { ProductList } from "./components/ProductList/ProductList";
import { Filters } from "./components/Filters/Filters";

import { useProducts } from "./hooks/useProducts";
const App = () => {
  const { filteredProducts, setProductTypeFilter, setSearchTerm } =
    useProducts();

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
