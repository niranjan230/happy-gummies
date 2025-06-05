import React from "react";
import { NavLink } from "react-router-dom";
import { Grid3X3, List, Package, ClipboardList } from "lucide-react";

const navLinks = [
  { name: "Dashboard", icon: List, path: "/" },
  { name: "Order Details", icon: ClipboardList, path: "/orders" },
  { name: "Inventory", icon: Package, path: "/inventory" },
  { name: "Products", icon: Grid3X3, path: "/products" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-lg flex flex-col min-h-screen">
      <div className="mt-10 px-4">
        <nav className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `flex items-center gap-2 text-left px-3 py-2 rounded transition-all w-full text-lg ${
                  isActive
                    ? "bg-yellow-300 font-semibold text-black"
                    : "hover:bg-gray-100 text-gray-700"
                }`
              }
            >
              <link.icon size={20} /> 
              {link.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  );
}
