import React, { useState } from "react";
import { Trash2, Pencil } from "lucide-react";
import InventoryDashboard from "./InventoryDashboard";

import EditStockModal from "./EditStockModal";
import EditProductModal from "./EditProductModal";


export default function ProductDetailCard({ product, onEdit, onDelete }) {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [status, setStatus] = useState(product.status);
  const [showEditProduct, setShowEditProduct] = useState(false); 
  const [showEditStock, setShowStockEdit] = useState(false);   
  const handleStatusChange = (e) => {
    const newStatus = e.target.value;
    setStatus(newStatus);
    onEdit({ ...product, status: newStatus });
  };

  const handleProductUpdate = (updatedProduct) => {
    onEdit(updatedProduct);
    setShowEditProduct(false);
  };

  const handleStockUpdate = (updatedStockData) => {
    
    onEdit({ ...product, ...updatedStockData });  
    setShowStockEdit(false);
  };

  return (
    <div className="min-h-screen bg-yellow-50 p-8">
      {/* Top Left Heading */}
      <div className="mb-6">
        <h1 className="text-xl font-bold text-black mb-1">Products</h1>
        <p className="text-sm text-gray-500">Products &gt; Kids Candies</p>
      </div>

      {/* Product Card */}
      <div className="bg-white rounded-2xl shadow-lg p-6 flex gap-6 items-start w-full max-w-4xl">
        {/* Left: Product Image */}
        <div className="bg-gray-100 rounded-xl flex items-center justify-center w-60 h-60">
          <img
            src={product.image}
            alt={product.title}
            className="h-40 object-contain"
          />
        </div>

        {/* Right: Info */}
        <div className="flex-1">
          {/* Title and Buttons (Edit and Delete remain here) */}
          <div className="flex justify-between items-start mb-4">
          <div>
            <span className="text-sm text-gray-500">Product name:</span>
            <h2 className="text-2xl font-bold">{product.title}</h2>
          </div>
            <div className="flex gap-2">
              {/* Edit button remains here */}
              <button
                onClick={() => setShowEditProduct(true)} 
                className="flex items-center px-3 py-1 bg-yellow-300 rounded text-sm font-semibold hover:bg-yellow-400"
              >
                <Pencil size={16} className="mr-1" />
                Edit
              </button>
              <button
                onClick={() => setShowDeleteConfirm(true)}
                className="flex items-center px-3 py-1 bg-red-100 text-red-600 border border-red-400 rounded text-sm font-semibold hover:bg-red-200"
              >
                <Trash2 size={16} className="mr-1" />
                Delete
              </button>
            </div>
          </div>

          {/* Product Details Box */}
          <div className="border rounded-xl bg-gray-50 divide-y">
            <div className="flex justify-between items-center px-4 py-3">
              <span className="font-semibold">Product Details</span>
              <select
                className="border border-gray-300 rounded px-2 py-1 text-sm"
                value={status}
                onChange={handleStatusChange}
              >
                <option value="Active">Availability</option>
                <option value="Inactive">Inactive </option>
                 
              </select>
            </div>
            <div className="flex justify-between px-4 py-3 text-sm">
              <span className="text-gray-500">SKU</span>
              <span className="font-mono">{product.sku}</span>
            </div>
            <div className="flex justify-between px-4 py-3 text-sm">
              <span className="text-gray-500">Availability</span>
              <span className={`font-semibold ${status === "Active" ? "text-green-600" : "text-red-500"}`}>
                {status}
              </span>
            </div>
            <div className="flex justify-between px-4 py-3 text-sm">
              <span className="text-gray-500">Price</span>
              <span className="font-semibold">{product.price}</span>
            </div>
            <div className="flex justify-between px-4 py-3 text-sm">
              <span className="text-gray-500">Tags</span>
              <span className="text-xs bg-gray-200 rounded px-2 py-0.5">
                {product.tags || "#Kids"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Inventory Dashboard and Sales Insights */}
      <InventoryDashboard
        onEditProduct={() => setShowEditProduct(true)}
        onEditStock={() => setShowStockEdit(true)}
        product={product} // Pass product data if InventoryDashboard needs it
      />

      {/* Edit Product Modal */}
      {showEditProduct && (
        <EditProductModal
          isOpen={showEditProduct}
          onClose={() => setShowEditProduct(false)}
          productData={product}
          onUpdate={handleProductUpdate}
        />
      )}

      {/* Edit Stock Modal */}
      {showEditStock && (
        <EditStockModal
          isOpen={showEditStock}
          onClose={() => setShowStockEdit(false)}
          stockData={{ stockQty: product.stockQty }} // Pass relevant stock data
          onUpdate={handleStockUpdate}
        />
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-2xl text-center shadow-lg max-w-sm w-full">
            <div className="flex justify-center mb-4">
              <div className="bg-red-500 p-3 rounded-full">
                <Trash2 className="text-white" />
              </div>
            </div>
            <p className="text-lg font-semibold mb-2">
              Are you sure you want to delete this product?
            </p>
            <div className="flex justify-center gap-4 mt-4">
              <button
                className="bg-yellow-300 px-4 py-2 rounded font-semibold hover:bg-yellow-400"
                onClick={() => setShowDeleteConfirm(false)}
              >
                No
              </button>
              <button
                className="px-4 py-2 border border-yellow-400 text-yellow-600 rounded font-semibold hover:bg-yellow-100"
                onClick={onDelete}
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}

    </div>

  );
}
