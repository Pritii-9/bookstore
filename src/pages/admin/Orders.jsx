import React from "react";
import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminNavbar from "../../components/admin/AdminNavbar";

export default function Orders({ setUser }) {
  // Static order data
  const orders = [
    { 
      id: "#ORD-9901", 
      customer: "Snehal Shinde", 
      date: "Jan 28, 2026", 
      total: "$54.00", 
      status: "Paid" 
    },
    { 
      id: "#ORD-9902", 
      customer: "Rahul Patil", 
      date: "Jan 27, 2026", 
      total: "$12.50", 
      status: "Pending" 
    },
    { 
      id: "#ORD-9903", 
      customer: "Priya Singh", 
      date: "Jan 25, 2026", 
      total: "$89.00", 
      status: "Shipped" 
    },
    { 
      id: "#ORD-9904", 
      customer: "Amit Verma", 
      date: "Jan 24, 2026", 
      total: "$32.00", 
      status: "Cancelled" 
    },
  ];

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* 1. Left Sidebar Navigation */}
      <AdminSidebar setUser={setUser} />

      <div className="flex-grow flex flex-col">
        {/* 2. Top Admin Header */}
        <AdminNavbar title="Order Management" />

        <main className="p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-800">Customer Orders</h2>
            <p className="text-slate-500 text-sm">Track and manage your bookstore sales</p>
          </div>

          {/* 3. Orders Table */}
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-slate-50 border-b border-slate-100">
                <tr className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">
                  <th className="px-6 py-4">Order ID</th>
                  <th className="px-6 py-4">Customer</th>
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Total</th>
                  <th className="px-6 py-4">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50 text-sm">
                {orders.map((order) => (
                  <tr key={order.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4 font-bold text-slate-900">{order.id}</td>
                    <td className="px-6 py-4 text-slate-600">{order.customer}</td>
                    <td className="px-6 py-4 text-slate-500">{order.date}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${
                        order.status === 'Paid' ? 'bg-green-100 text-green-600' :
                        order.status === 'Pending' ? 'bg-amber-100 text-amber-600' :
                        order.status === 'Cancelled' ? 'bg-red-100 text-red-600' :
                        'bg-blue-100 text-blue-600'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-bold text-slate-800">{order.total}</td>
                    <td className="px-6 py-4">
                      <button className="text-blue-600 hover:text-blue-800 font-medium">View Details</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}