import Image from "next/image";
import type { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="w-full rounded-3xl bg-white p-4 shadow-sm">
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-slate-100">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain p-6"
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
        />
      </div>
      <h2 className="mt-4 text-xl font-bold lowercase">{product.title}</h2>
      <p className="mt-2 text-sm leading-6 text-gray-600">{product.description}</p>
      <div className="mt-3 flex flex-col items-start">
        <p className="text-sm text-gray-600">{product.price.toLocaleString("ru-RU")} ₽</p>
        <button className="mt-4 rounded-full bg-blue-900 px-6 py-2 text-xs uppercase text-white transition-colors duration-200 hover:bg-blue-800">
          в корзину
        </button>
      </div>
    </article>
  );
}