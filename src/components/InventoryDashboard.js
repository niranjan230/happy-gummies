import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { month: "Jan", current: 40, low: 5, out: 30 },
  { month: "Feb", current: 60, low: 5, out: 25 },
  { month: "Mar", current: 50, low: 10, out: 35 },
  { month: "Apr", current: 70, low: 10, out: 20 },
  { month: "May", current: 90, low: 15, out: 30 },
  { month: "Jun", current: 130, low: 25, out: 45 },
  { month: "Jul", current: 100, low: 20, out: 60 },
  { month: "Aug", current: 50, low: 10, out: 40 },
  { month: "Sep", current: 20, low: 5, out: 30 },
  { month: "Oct", current: 90, low: 15, out: 45 },
  { month: "Nov", current: 140, low: 20, out: 60 },
  { month: "Dec", current: 120, low: 15, out: 50 },
];

const salesData = [
  { date: "01 Apr", sold: 30, returns: 2},
  { date: "03 Apr", sold: 40, returns: 4 },
  { date: "06 Apr", sold: 35, returns: 6 },
  { date: "09 Apr", sold: 25, returns: 7 },
  { date: "12 Apr", sold: 45, returns: 8 },
  { date: "15 Apr", sold: 50, returns: 7},
  { date: "18 Apr", sold: 60, returns: 5 },
  { date: "21 Apr", sold: 55, returns: 4 },
  { date: "24 Apr", sold: 48, returns: 3 },
  { date: "27 Apr", sold: 52, returns: 1 },
  { date: "30 Apr", sold: 47, returns: 1 },
];

export default function InventoryDashboard({ onEditProduct, onEditStock }) {
  const [autoAlert, setAutoAlert] = useState("Enabled");

  const handleAutoAlertChange = (e) => {
    setAutoAlert(e.target.value);
  };

  return (
    <div className="mt-12">
      {/* Stock & Inventory Insights Card */}
      <div className="bg-white rounded-2xl p-6 shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Stock Status & Inventory Insights</h2>
          <div className="flex items-center space-x-3">
            <span className="text-sm text-gray-600">Auto Alert:</span>
            <select
  className={`text-sm border border-gray-300 rounded px-2 py-1 ${
    autoAlert === "Enabled" ? "text-green-600" : "text-red-600"
  }`}
  value={autoAlert}
  onChange={handleAutoAlertChange}
>
  <option value="Enabled">Enabled</option>
  <option value="Disabled">Disabled</option>
</select>

            <button
              className="px-4 py-1 bg-black text-white rounded text-sm"
              onClick={onEditStock}
            >
              Update Stock
            </button>
            <button
              className="px-3 py-1 border border-gray-300 rounded text-sm"
              onClick={onEditProduct}
            >
              Edit
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Stock Info Table */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <table className="w-full text-sm">
              <tbody>
                <tr>
                  <td className="py-1 text-gray-500">Last Stock Updated</td>
                  <td className="text-black-3000">08 Apr 2025</td>
                </tr>
                <tr>
                  <td className="py-1 text-gray-500">Last Ordered On</td>
                  <td className="text-black">2 min ago</td>
                </tr>
                <tr>
                  <td className="py-1 text-gray-500">Current Stock</td>
                  <td className="font-bold">250</td>
                </tr>
                <tr>
                  <td className="py-1 text-gray-500">Low Stock</td>
                  <td className="font-bold">20</td>
                </tr>
                <tr>
                  <td className="py-1 text-gray-500">Max Capacity</td>
                  <td className="font-bold">500</td>
                </tr>
                <tr>
                  <td className="py-1 text-gray-500">Minimum Order Qty</td>
                  <td className="font-bold">1</td>
                </tr>
                <tr>
                  <td className="py-1 text-gray-500">Maximum Order Qty</td>
                  <td className="font-bold">10</td>
                </tr>
              </tbody>
            </table>
            <button className="mt-4 bg-yellow-100 text-yellow-800 font-semibold text-sm py-2 px-4 rounded">
              📄 Download Stock Report
            </button>
          </div>

          {/* Inventory Chart */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex justify-between mb-2">
              <span className="font-bold text-20">Inventory Performance</span>
              <span className="text-sm text-gray-500">Last 365 days</span>
            </div>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={data}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="current"
                  stroke="green"
                  name="Current Stock"
                />
                <Line
                  type="monotone"
                  dataKey="low"
                  stroke="gold"
                  name="Low Stock"
                />
                <Line
                  type="monotone"
                  dataKey="out"
                  stroke="red"
                  strokeDasharray="5 5"
                  name="Out of Stock"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      

     {/* Sales & Performance Insights Card */}
<div className="mt-8 bg-white rounded-2xl p-6 shadow-md">
  <div className="flex justify-between items-center mb-2">
    <h2 className="text-lg font-semibold">Sales & Performance Insights</h2>
    <select
  className="text-sm bg-transparent text-gray-500 outline-none"
  defaultValue="7"
>
  <option value="7">Last 7 days</option>
  <option value="30">Last 30 days</option>
  <option value="90">Last 90 days</option>
  <option value="365">Last 1 year</option>
</select>

  </div>

  {/* Metrics Row */}


  <div className="flex items-center justify-center gap-8 mb-4">

    <span className="flex items-center gap-1 text-sm">
      <span>🏷️</span>
      Units sold: <span className=" flex items-center font-bold">800</span>
    </span>
    <span className="flex items-center gap-1 text-sm">
      <span>↩️</span>
      Returns: <span className="font-bold">10</span>
    </span>
  </div>

  {/* Chart with increased height */}
  <ResponsiveContainer width="100%" height={250}>
    <LineChart data={salesData}>
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="sold" stroke="#FFD600" strokeWidth={2} name="Units Sold" />
      <Line type="monotone" dataKey="returns" stroke="#1E40AF" strokeWidth={2} name="Returns" />
    </LineChart>
  </ResponsiveContainer>
</div>

    </div>
  );
}
