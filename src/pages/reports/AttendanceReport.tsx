import React, { useState } from 'react';
import { Download, Calendar, BarChart3 } from 'lucide-react';

const AttendanceReport: React.FC = () => {
  const [filters, setFilters] = useState({
    student: 'all',
    batch: 'all',
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
                <Calendar className="text-indigo-600" size={32} />
                Attendance Report
              </h1>
              <p className="text-gray-600 mt-2">Student attendance analysis</p>
            </div>
            <button className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition">
              <Download size={20} />
              Export Report
            </button>
          </div>

          <div className="grid md:grid-cols-4 gap-4 mb-6 p-6 bg-gray-50 rounded-lg">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Student</label>
              <select
                value={filters.student}
                onChange={(e) => setFilters({ ...filters, student: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option value="all">All Students</option>
                <option value="1">Rajesh Kumar</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Batch</label>
              <select
                value={filters.batch}
                onChange={(e) => setFilters({ ...filters, batch: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option value="all">All Batches</option>
                <option value="1">BCA-2024-01</option>
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

          <div className="bg-gray-50 rounded-lg p-12 text-center border border-gray-200">
            <BarChart3 className="mx-auto text-gray-400 mb-4" size={48} />
            <p className="text-gray-500">Attendance report data and charts will appear here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceReport;



