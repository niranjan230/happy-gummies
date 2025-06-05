
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from "recharts";
  
  const data = [
    { month: "Jan", current: 50, low: 20, out: 30 },
    { month: "Feb", current: 60, low: 20, out: 40 },
    { month: "Mar", current: 40, low: 20, out: 60 },
    { month: "Apr", current: 70, low: 25, out: 50 },
    { month: "May", current: 90, low: 30, out: 40 },
    { month: "Jun", current: 110, low: 35, out: 60 },
    { month: "Jul", current: 80, low: 25, out: 90 },
    { month: "Aug", current: 30, low: 20, out: 120 },
    { month: "Sep", current: 20, low: 20, out: 100 },
    { month: "Oct", current: 70, low: 25, out: 60 },
    { month: "Nov", current: 100, low: 30, out: 80 },
    { month: "Dec", current: 90, low: 25, out: 60 },
  ];
  
  export default function StockInsights() {
    return (
      <div className="bg-black text-white shadow rounded-2xl p-6 mt-8 max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Stock Status & Inventory Insights</h2>
          <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-300">
            Update Stock
          </button>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> 
          
  
          <div>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={data}>
                <CartesianGrid stroke="#444" strokeDasharray="3 3" />
                <XAxis dataKey="month" stroke="#ccc" />
                <YAxis stroke="#ccc" />
                <Tooltip
                  contentStyle={{ backgroundColor: "#111", borderColor: "#444" }}
                  labelStyle={{ color: "#fff" }}
                  itemStyle={{ color: "#ccc" }}
                />
                <Legend wrapperStyle={{ color: "#fff" }} />
                <Line
                  type="monotone"
                  dataKey="current"
                  stroke="#4ade80" 
                  strokeWidth={2}
                  name="Current Stock"
                />
                <Line
                  type="monotone"
                  dataKey="low"
                  stroke="#fde047"
                  strokeWidth={2}
                  name="Low Stock"
                />
                <Line
                  type="monotone"
                  dataKey="out"
                  stroke="#f87171" 
                  strokeDasharray="5 5"
                  strokeWidth={2}
                  name="Out of Stock"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    );
  }
  