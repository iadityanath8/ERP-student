import React, { useState } from 'react';
import { Plus, Edit, Trash2, Search, DollarSign, Filter, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { IncomeEntry } from '../../types/Finance';

const IncomeList: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [dateFilter, setDateFilter] = useState('all');
  
  const [incomes] = useState<IncomeEntry[]>([
    {
      id: '1',
      incomeHeadId: '1',
      incomeHeadName: 'Student Fees',
      amount: 50000,
      paymentDate: '2024-11-05',
      paymentMethod: 'online',
      description: 'Monthly fees collection',
      receivedBy: '1',
      receivedByName: 'Admin User',
      invoiceNumber: 'INV-001',
      createdAt: '2024-11-05'
    }
  ]);

  const filteredIncomes = incomes.filter(income =>
    income.incomeHeadName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    income.invoiceNumber.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalAmount = filteredIncomes.reduce((sum, income) => sum + income.amount, 0);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <DollarSign className="text-green-600" size={32} />
                Income List
              </h1>
              <p className="text-gray-600 mt-2">All income entries</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => navigate('/admin/finance/income/add')}
                className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition shadow-lg"
              >
                <Plus size={20} />
                Add Income
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition">
                <Download size={20} />
                Export
              </button>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Income</p>
                <p className="text-3xl font-bold text-green-600">₹{totalAmount.toLocaleString()}</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search income entries..."
                className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            <select
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              <option value="all">All Time</option>
              <option value="today">Today</option>
              <option value="month">This Month</option>
            </select>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Income Head</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Payment Method</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Invoice #</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredIncomes.map((income) => (
                  <tr key={income.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {new Date(income.paymentDate).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap font-semibold text-gray-900">{income.incomeHeadName}</td>
                    <td className="px-6 py-4 whitespace-nowrap font-bold text-green-600">₹{income.amount.toLocaleString()}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 capitalize">{income.paymentMethod}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{income.invoiceNumber}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex gap-2">
                        <button
                          onClick={() => navigate(`/admin/finance/income/edit/${income.id}`)}
                          className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition"
                        >
                          <Edit size={18} />
                        </button>
                        <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition">
                          <Trash2 size={18} />
                        </button>
                      </div>
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

export default IncomeList;



