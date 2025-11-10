import React, { useState } from 'react';
import { Calendar, Download, Filter, BarChart3 } from 'lucide-react';

const FeeReport: React.FC = () => {
  const [startDate, setStartDate] = useState('2024-01-01');
  const [endDate, setEndDate] = useState('2024-11-07');
  const [courseFilter, setCourseFilter] = useState('all');
  const [studentFilter, setStudentFilter] = useState('all');

  const handleGenerate = () => {
    console.log('Generating fee report:', { startDate, endDate, courseFilter, studentFilter });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Fee Report</h1>
              <p className="text-gray-600 mt-2">Student/course-wise</p>
            </div>
            <button className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition">
              <Download size={20} />
              Export Report
            </button>
          </div>

          <div className="grid md:grid-cols-4 gap-4 mb-6 p-6 bg-gray-50 rounded-lg">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">End Date</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Course</label>
              <select
                value={courseFilter}
                onChange={(e) => setCourseFilter(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option value="all">All Courses</option>
                <option value="1">BCA</option>
                <option value="2">MCA</option>
              </select>
            </div>
            <div className="flex items-end">
              <button
                onClick={handleGenerate}
                className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition flex items-center justify-center gap-2"
              >
                <Filter size={20} />
                Generate
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <div className="flex items-center gap-3 mb-2">
                <BarChart3 className="text-blue-600" size={24} />
                <span className="text-sm text-gray-600">Total Collected</span>
              </div>
              <p className="text-3xl font-bold text-gray-900">₹2,500,000</p>
            </div>
            <div className="bg-green-50 rounded-lg p-6 border border-green-200">
              <div className="flex items-center gap-3 mb-2">
                <BarChart3 className="text-green-600" size={24} />
                <span className="text-sm text-gray-600">Total Pending</span>
              </div>
              <p className="text-3xl font-bold text-gray-900">₹150,000</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
              <div className="flex items-center gap-3 mb-2">
                <BarChart3 className="text-purple-600" size={24} />
                <span className="text-sm text-gray-600">Collection Rate</span>
              </div>
              <p className="text-3xl font-bold text-gray-900">94%</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-12 text-center border border-gray-200">
            <BarChart3 className="mx-auto text-gray-400 mb-4" size={48} />
            <p className="text-gray-500">Detailed fee report charts and statistics will appear here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeeReport;



