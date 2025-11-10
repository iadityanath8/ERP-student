import React, { useState } from 'react';
import { Calendar, Download, BarChart3, TrendingUp } from 'lucide-react';
import type { StudentAttendance } from '../../types/Attendance';

const AttendanceReport: React.FC = () => {
  const [startDate, setStartDate] = useState('2024-11-01');
  const [endDate, setEndDate] = useState('2024-11-07');
  const [studentFilter, setStudentFilter] = useState('all');

  const [reportData] = useState({
    totalDays: 30,
    presentDays: 25,
    absentDays: 3,
    lateDays: 2,
    attendancePercentage: 83.33
  });

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Attendance Report</h1>
              <p className="text-gray-600 mt-2">Student-wise</p>
            </div>
            <button className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition">
              <Download size={20} />
              Export Report
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-6 p-6 bg-gray-50 rounded-lg">
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
              <label className="block text-sm font-medium text-gray-700 mb-2">Student</label>
              <select
                value={studentFilter}
                onChange={(e) => setStudentFilter(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option value="all">All Students</option>
                <option value="1">Rajesh Kumar</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-6">
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <div className="flex items-center gap-3 mb-2">
                <BarChart3 className="text-blue-600" size={24} />
                <span className="text-sm text-gray-600">Total Days</span>
              </div>
              <p className="text-3xl font-bold text-gray-900">{reportData.totalDays}</p>
            </div>
            <div className="bg-green-50 rounded-lg p-6 border border-green-200">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="text-green-600" size={24} />
                <span className="text-sm text-gray-600">Present</span>
              </div>
              <p className="text-3xl font-bold text-gray-900">{reportData.presentDays}</p>
            </div>
            <div className="bg-red-50 rounded-lg p-6 border border-red-200">
              <div className="flex items-center gap-3 mb-2">
                <BarChart3 className="text-red-600" size={24} />
                <span className="text-sm text-gray-600">Absent</span>
              </div>
              <p className="text-3xl font-bold text-gray-900">{reportData.absentDays}</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="text-purple-600" size={24} />
                <span className="text-sm text-gray-600">Percentage</span>
              </div>
              <p className="text-3xl font-bold text-gray-900">{reportData.attendancePercentage}%</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-12 text-center border border-gray-200">
            <BarChart3 className="mx-auto text-gray-400 mb-4" size={48} />
            <p className="text-gray-500">Detailed attendance charts and statistics will appear here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceReport;



