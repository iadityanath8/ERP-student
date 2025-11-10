import React, { useState } from 'react';
import { Download, Filter, Users, BarChart3 } from 'lucide-react';

const StaffReport: React.FC = () => {
  const [statusFilter, setStatusFilter] = useState('all');
  const [departmentFilter, setDepartmentFilter] = useState('all');

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Staff Report</h1>
              <p className="text-gray-600 mt-2">Active/inactive view</p>
            </div>
            <button className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition">
              <Download size={20} />
              Export Report
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-6 p-6 bg-gray-50 rounded-lg">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
              <select
                value={departmentFilter}
                onChange={(e) => setDepartmentFilter(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option value="all">All Departments</option>
                <option value="cs">Computer Science</option>
                <option value="math">Mathematics</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-6">
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <div className="flex items-center gap-3 mb-2">
                <Users className="text-blue-600" size={24} />
                <span className="text-sm text-gray-600">Total Staff</span>
              </div>
              <p className="text-3xl font-bold text-gray-900">45</p>
            </div>
            <div className="bg-green-50 rounded-lg p-6 border border-green-200">
              <div className="flex items-center gap-3 mb-2">
                <Users className="text-green-600" size={24} />
                <span className="text-sm text-gray-600">Active</span>
              </div>
              <p className="text-3xl font-bold text-gray-900">42</p>
            </div>
            <div className="bg-red-50 rounded-lg p-6 border border-red-200">
              <div className="flex items-center gap-3 mb-2">
                <Users className="text-red-600" size={24} />
                <span className="text-sm text-gray-600">Inactive</span>
              </div>
              <p className="text-3xl font-bold text-gray-900">3</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
              <div className="flex items-center gap-3 mb-2">
                <BarChart3 className="text-purple-600" size={24} />
                <span className="text-sm text-gray-600">Departments</span>
              </div>
              <p className="text-3xl font-bold text-gray-900">8</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-12 text-center border border-gray-200">
            <BarChart3 className="mx-auto text-gray-400 mb-4" size={48} />
            <p className="text-gray-500">Detailed staff report charts and statistics will appear here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffReport;



