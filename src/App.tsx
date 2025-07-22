import { Header } from "./components/Layout/Header";
import { Footer } from "./components/Layout/Footer";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto p-4">Product List</main>
      <Footer />
    </div>
  );
};
export default App;
