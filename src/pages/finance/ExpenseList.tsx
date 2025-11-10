import React, { useState } from 'react';
import { Plus, Edit, Trash2, Search, DollarSign, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { ExpenseEntry } from '../../types/Finance';

const ExpenseList: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  
  const [expenses] = useState<ExpenseEntry[]>([
    {
      id: '1',
      expenseHeadId: '1',
      expenseHeadName: 'Salaries',
      amount: 200000,
      paymentDate: '2024-11-05',
      paymentMethod: 'bank_transfer',
      description: 'Monthly staff salaries',
      paidBy: '1',
      paidByName: 'Admin User',
      billNumber: 'BILL-001',
      createdAt: '2024-11-05'
    }
  ]);

  const filteredExpenses = expenses.filter(expense =>
    expense.expenseHeadName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    expense.billNumber.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalAmount = filteredExpenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <DollarSign className="text-red-600" size={32} />
                Expense List
              </h1>
              <p className="text-gray-600 mt-2">All expense entries</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => navigate('/admin/finance/expense/add')}
                className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition shadow-lg"
              >
                <Plus size={20} />
                Add Expense
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition">
                <Download size={20} />
                Export
              </button>
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Expenses</p>
                <p className="text-3xl font-bold text-red-600">₹{totalAmount.toLocaleString()}</p>
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
                placeholder="Search expense entries..."
                className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Expense Head</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Payment Method</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Bill #</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredExpenses.map((expense) => (
                  <tr key={expense.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {new Date(expense.paymentDate).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap font-semibold text-gray-900">{expense.expenseHeadName}</td>
                    <td className="px-6 py-4 whitespace-nowrap font-bold text-red-600">₹{expense.amount.toLocaleString()}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 capitalize">{expense.paymentMethod}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{expense.billNumber}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex gap-2">
                        <button
                          onClick={() => navigate(`/admin/finance/expense/edit/${expense.id}`)}
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

export default ExpenseList;



