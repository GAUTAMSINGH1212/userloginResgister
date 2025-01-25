import React from 'react';

function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-blue-800 text-white p-4">
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <ul className="mt-6 space-y-4">
          <li><a href="#" className="hover:bg-blue-700 p-2 rounded">Home</a></li>
          <li><a href="#" className="hover:bg-blue-700 p-2 rounded">Users</a></li>
          <li><a href="#" className="hover:bg-blue-700 p-2 rounded">Orders</a></li>
          <li><a href="#" className="hover:bg-blue-700 p-2 rounded">Settings</a></li>
        </ul>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-semibold">Dashboard Overview</h1>
          <button className="bg-blue-600 text-white p-2 rounded">Logout</button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Total Users</h3>
            <p className="text-2xl text-blue-600">1,240</p>
          </div>
          
          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Orders Today</h3>
            <p className="text-2xl text-green-600">45</p>
          </div>
          
          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Revenue</h3>
            <p className="text-2xl text-yellow-600">$8,500</p>
          </div>
          
          {/* Card 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Pending Tasks</h3>
            <p className="text-2xl text-red-600">12</p>
          </div>
        </div>

        {/* Data Table */}
        <div className="bg-white p-6 mt-8 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b">Date</th>
                <th className="px-4 py-2 border-b">Activity</th>
                <th className="px-4 py-2 border-b">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border-b">2025-01-25</td>
                <td className="px-4 py-2 border-b">New User Signup</td>
                <td className="px-4 py-2 border-b text-green-500">Completed</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">2025-01-24</td>
                <td className="px-4 py-2 border-b">Order #1245</td>
                <td className="px-4 py-2 border-b text-yellow-500">Pending</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
