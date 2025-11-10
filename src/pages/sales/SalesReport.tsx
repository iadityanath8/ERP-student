import React, { useState } from 'react';
import { Download, DollarSign, BarChart3, TrendingUp } from 'lucide-react';

const SalesReport: React.FC = () => {
  const [filters, setFilters] = useState({
    course: 'all',
    startDate: '',
    endDate: ''
  });

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <DollarSign className="text-green-600" size={32} />
                Sales Report
              </h1>
              <p className="text-gray-600 mt-2">Course sales analysis</p>
            </div>
            <button className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition">
              <Download size={20} />
              Export Report
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-6 p-6 bg-gray-50 rounded-lg">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Course</label>
              <select
                value={filters.course}
                onChange={(e) => setFilters({ ...filters, course: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option value="all">All Courses</option>
                <option value="1">BCA</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
              <input
                type="date"
                value={filters.startDate}
                onChange={(e) => setFilters({ ...filters, startDate: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">End Date</label>
              <input
                type="date"
                value={filters.endDate}
                onChange={(e) => setFilters({ ...filters, endDate: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-green-50 rounded-lg p-6 border border-green-200">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="text-green-600" size={24} />
                <span className="text-sm text-gray-600">Total Sales</span>
              </div>
              <p className="text-3xl font-bold text-gray-900">₹2,500,000</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <div className="flex items-center gap-3 mb-2">
                <DollarSign className="text-blue-600" size={24} />
                <span className="text-sm text-gray-600">Total Orders</span>
              </div>
              <p className="text-3xl font-bold text-gray-900">125</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
              <div className="flex items-center gap-3 mb-2">
                <BarChart3 className="text-purple-600" size={24} />
                <span className="text-sm text-gray-600">Avg. Order Value</span>
              </div>
              <p className="text-3xl font-bold text-gray-900">₹20,000</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-12 text-center border border-gray-200">
            <BarChart3 className="mx-auto text-gray-400 mb-4" size={48} />
            <p className="text-gray-500">Sales report charts and statistics will appear here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesReport;



