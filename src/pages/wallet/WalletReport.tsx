import React, { useState } from 'react';
import { Calendar, Download, Filter, TrendingUp, TrendingDown } from 'lucide-react';
import type { WalletReport } from '../../types/Wallet';

const WalletReportPage: React.FC = () => {
  const [startDate, setStartDate] = useState('2024-01-01');
  const [endDate, setEndDate] = useState('2024-11-07');
  const [selectedFranchise, setSelectedFranchise] = useState('all');
  
  // Mock report data
  const [report] = useState<WalletReport>({
    startDate: '2024-01-01',
    endDate: '2024-11-07',
    totalCredits: 500000,
    totalDebits: 300000,
    netAmount: 200000,
    transactions: []
  });

  const handleGenerate = () => {
    console.log('Generating report:', { startDate, endDate, selectedFranchise });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Wallet Report</h1>
              <p className="text-gray-600 mt-2">Date & branch filters</p>
            </div>
            <button className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition">
              <Download size={20} />
              Export Report
            </button>
          </div>

          {/* Filters */}
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
              <label className="block text-sm font-medium text-gray-700 mb-2">Branch</label>
              <select
                value={selectedFranchise}
                onChange={(e) => setSelectedFranchise(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option value="all">All Branches</option>
                <option value="1">Mumbai Central Branch</option>
                <option value="2">Delhi North Branch</option>
              </select>
            </div>
            <div className="flex items-end">
              <button
                onClick={handleGenerate}
                className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition flex items-center justify-center gap-2"
              >
                <Filter size={20} />
                Generate Report
              </button>
            </div>
          </div>

          {/* Report Summary */}
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-green-50 rounded-lg p-6 border border-green-200">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="text-green-600" size={24} />
                <span className="text-sm text-gray-600">Total Credits</span>
              </div>
              <p className="text-3xl font-bold text-gray-900">₹{report.totalCredits.toLocaleString()}</p>
            </div>
            <div className="bg-red-50 rounded-lg p-6 border border-red-200">
              <div className="flex items-center gap-3 mb-2">
                <TrendingDown className="text-red-600" size={24} />
                <span className="text-sm text-gray-600">Total Debits</span>
              </div>
              <p className="text-3xl font-bold text-gray-900">₹{report.totalDebits.toLocaleString()}</p>
            </div>
            <div className="bg-indigo-50 rounded-lg p-6 border border-indigo-200">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="text-indigo-600" size={24} />
                <span className="text-sm text-gray-600">Net Amount</span>
              </div>
              <p className="text-3xl font-bold text-gray-900">₹{report.netAmount.toLocaleString()}</p>
            </div>
          </div>

          {/* Report Chart Placeholder */}
          <div className="bg-gray-50 rounded-lg p-12 text-center border border-gray-200">
            <p className="text-gray-500">Report chart visualization will appear here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletReportPage;

