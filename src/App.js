import React from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ProductGrid from "./components/ProductGrid";
import ProductDetailCard from "./components/ProductDetailCard";

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
    title: "KidsMultivitamin Gummies",
    price: "$50.00",
    sku: "GHSJ1890",
    stockQty: 150,
    status: "Full Stock",
    image: "https://www.jiomart.com/images/product/original/rvfiiorbco/radiplex-multivitamin-gummies-for-kids-adults-13-vitamins-mineral-30-gummy-candy-strawberry-product-images-orvfiiorbco-p599977822-0-202303292305.jpg?im=Resize=(420,420)",
  },
];

function Dashboard() {
  return <div className="text-2xl font-bold">Dashboard Page</div>;
}
function Orders() {
  return <div className="text-2xl font-bold">Order Details Page</div>;
}
function Inventory() {
  return <div className="text-2xl font-bold">Inventory Page</div>;
}
function ProductDetails() {
  const { id } = useParams();
  const product = products[id] || products[0];
  return (
    <div className="flex flex-col gap-8">
      <ProductDetailCard product={product} onEdit={() => alert('Edit Product')} />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 bg-[#f4f5f7] p-8">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/inventory" element={<Inventory />} />
              <Route path="/products" element={<ProductGrid />} />
              <Route path="/products/:id" element={<ProductDetails />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
