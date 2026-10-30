import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function Home() {
  return (
    <main className="min-h-screen px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-center text-3xl font-bold">Коллекция товаров</h1>

        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>

        <div className="mt-10 flex justify-center">
          <button className="w-full rounded-full bg-blue-900 px-10 py-3 text-sm font-medium uppercase text-white transition-colors duration-200 hover:bg-blue-800 sm:w-auto">
            смотреть всю коллекцию
          </button>
        </div>
      </div>
    </main>
  );
}