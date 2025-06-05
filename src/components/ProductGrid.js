import React, { useState } from "react";
import { Grid3X3, List } from "lucide-react";
import { Link } from "react-router-dom";

const products = [
  {
    title: "Adult Multivitamin Gummies",
    price: "$50.00",
    sku: "GHSJ1890",
    stockQty: 150,
    status: "Full Stock",
    image:
      "https://www.jiomart.com/images/product/original/rvfiiorbco/radiplex-multivitamin-gummies-for-kids-adults-13-vitamins-mineral-30-gummy-candy-strawberry-product-images-orvfiiorbco-p599977822-0-202303292305.jpg?im=Resize=(420,420)",
  },
  {
    title: "Kids Multivitamin Gummies",
    price: "$50.00",
    sku: "GHSJ1891",
    stockQty: 100,
    status: "Full Stock",
    image:
      "https://www.jiomart.com/images/product/original/rvfiiorbco/radiplex-multivitamin-gummies-for-kids-adults-13-vitamins-mineral-30-gummy-candy-strawberry-product-images-orvfiiorbco-p599977822-0-202303292305.jpg?im=Resize=(420,420)",
  },
];

export default function ProductGrid() {
  const [isGridView, setIsGridView] = useState(true);

  return (
    <div className="min-h-screen w-full bg-gradient-to-tr from-[#fffce8] via-[#fff5eb] to-[#fff2f8] flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-transparent">
        <div className="text-left">
          <h1 className="text-xl font-semibold text-black">Products</h1>
          <p className="text-sm text-black/70">Detailed review on Products</p>
        </div>
        <div className="flex gap-2">
          <button
            className={`flex items-center gap-1 px-3 py-1 border rounded ${
              !isGridView ? "bg-black text-white" : "border-black text-black"
            }`}
            onClick={() => setIsGridView(false)}
          >
            <List size={18} /> List View
          </button>
          <button
            className={`flex items-center gap-1 px-3 py-1 border rounded ${
              isGridView ? "bg-black text-white" : "border-black text-black"
            }`}
            onClick={() => setIsGridView(true)}
          >
            <Grid3X3 size={18} /> Grid View
          </button>
        </div>
      </header>

      {/* Product Grid/List */}
      <main className="p-6 overflow-y-auto">
        <div
          className={`${
            isGridView
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              : "flex flex-col gap-4"
          }`}
        >
          {products.map((product, index) => (
            <div
              key={index}
              className={`rounded-2xl shadow-lg p-6 bg-white/70 backdrop-blur-md ${
                isGridView ? "max-w-md" : "flex items-center gap-4"
              }`}
            >
              {/* Product Image */}
              <div
                className={`${
                  isGridView
                    ? "rounded-xl flex justify-center items-center mb-4"
                    : "w-40 h-40 flex-shrink-0"
                }`}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-auto max-h-[300px] object-contain rounded-lg"
                />
              </div>

              {/* Product Info */}
              <div className={`${isGridView ? "" : "flex-1"}`}>
                <div className="flex justify-between items-center mb-1">
                  <h2 className="text-[22px] font-bold text-black">{product.title}</h2>
                  <span className="font-semibold text-black">{product.price}</span>
                </div>
                <p className="text-sm text-black/70 mb-2">
                  Short description of the product will be here...
                </p>
                <div className="text-sm text-black mb-2">SKU ID: {product.sku}</div>
                <div className="text-sm text-black mb-2">
                  Stock Qty: {product.stockQty}
                </div>
                <div className="text-sm text-green-700 mb-2">
                  Status: {product.status}
                </div>
                <Link
                  to={`/products/${index}`}
                  className="mt-2 text-sm text-blue-700 underline inline-block"
                >
                  View in detail
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
