import React, { useState } from 'react';
import { Search, AlertCircle, DollarSign, Calendar } from 'lucide-react';
import type { FeeSlip } from '../../types/Fee';

const DueFeeList: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const [dueFees] = useState<FeeSlip[]>([
    {
      id: '1',
      studentId: '1',
      studentName: 'John Doe',
      rollNumber: 'BCA2024002',
      courseId: '1',
      courseName: 'BCA',
      batchId: '1',
      batchCode: 'BCA-2024-01',
      feeType: 'monthly',
      amount: 5000,
      dueDate: '2024-11-05',
      status: 'overdue',
      createdAt: '2024-11-01',
      updatedAt: '2024-11-01'
    }
  ]);

  const filteredFees = dueFees.filter(fee =>
    fee.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    fee.rollNumber.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalDue = filteredFees.reduce((sum, fee) => sum + fee.amount, 0);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center gap-3 mb-6">
            <AlertCircle className="text-red-600" size={32} />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Due Fee List</h1>
              <p className="text-gray-600 mt-2">Pending dues</p>
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Pending Dues</p>
                <p className="text-3xl font-bold text-red-600">₹{totalDue.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Number of Students</p>
                <p className="text-3xl font-bold text-gray-900">{filteredFees.length}</p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by student name or roll number..."
                className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Student</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Course</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Fee Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Due Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Days Overdue</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredFees.map((fee) => {
                  const daysOverdue = Math.floor((new Date().getTime() - new Date(fee.dueDate).getTime()) / (1000 * 60 * 60 * 24));
                  return (
                    <tr key={fee.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-semibold text-gray-900">{fee.studentName}</div>
                        <div className="text-sm text-gray-500">{fee.rollNumber}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{fee.courseName}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 capitalize">{fee.feeType}</td>
                      <td className="px-6 py-4 whitespace-nowrap font-bold text-red-600">₹{fee.amount.toLocaleString()}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {new Date(fee.dueDate).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-3 py-1 text-xs font-semibold bg-red-100 text-red-800 rounded-full">
                          {daysOverdue} days
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DueFeeList;



