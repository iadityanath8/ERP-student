import React, { useState } from 'react';
import { Calendar, CheckCircle2, XCircle, Search, Filter, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { StudentAttendance } from '../../types/Attendance';

const StudentAttendancePage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [batchFilter, setBatchFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const [attendance] = useState<StudentAttendance[]>([
    {
      id: '1',
      studentId: '1',
      studentName: 'Rajesh Kumar',
      rollNumber: 'BCA2024001',
      batchId: '1',
      batchCode: 'BCA-2024-01',
      date: '2024-11-07',
      status: 'present',
      checkInTime: '09:00:00',
      checkOutTime: '17:00:00',
      remarks: '',
      markedBy: '1',
      markedByName: 'Dr. John Smith',
      createdAt: '2024-11-07'
    }
  ]);

  const filteredAttendance = attendance.filter(a =>
    a.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    a.rollNumber.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleMarkAttendance = () => {
    navigate('/admin/attendance/mark');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Student Attendance</h1>
              <p className="text-gray-600 mt-2">Daily tracking</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleMarkAttendance}
                className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition shadow-lg"
              >
                <CheckCircle2 size={20} />
                Mark Attendance
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition">
                <Download size={20} />
                Export
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Batch</label>
              <select
                value={batchFilter}
                onChange={(e) => setBatchFilter(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option value="all">All Batches</option>
                <option value="1">BCA-2024-01</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search students..."
                  className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Roll Number</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Student Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Batch</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Check In</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Check Out</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredAttendance.map((record) => (
                  <tr key={record.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap font-semibold text-gray-900">{record.rollNumber}</td>
                    <td className="px-6 py-4 whitespace-nowrap font-semibold text-gray-900">{record.studentName}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{record.batchCode}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {record.status === 'present' ? (
                        <span className="flex items-center gap-1 px-3 py-1 text-xs font-semibold bg-green-100 text-green-800 rounded-full">
                          <CheckCircle2 size={14} />
                          Present
                        </span>
                      ) : record.status === 'absent' ? (
                        <span className="flex items-center gap-1 px-3 py-1 text-xs font-semibold bg-red-100 text-red-800 rounded-full">
                          <XCircle size={14} />
                          Absent
                        </span>
                      ) : (
                        <span className="px-3 py-1 text-xs font-semibold bg-yellow-100 text-yellow-800 rounded-full">
                          Late
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {record.checkInTime || 'N/A'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {record.checkOutTime || 'N/A'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentAttendancePage;

