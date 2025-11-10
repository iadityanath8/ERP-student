import React, { useState, useEffect } from 'react';
import { DollarSign, TrendingUp, TrendingDown, BarChart3 } from 'lucide-react';
import type { IncomeEntry, ExpenseEntry } from '../../types/Finance';

const FinanceDashboard: React.FC = () => {
  const [totalIncome, setTotalIncome] = useState(2500000);
  const [totalExpense, setTotalExpense] = useState(1500000);
  const [profit, setProfit] = useState(1000000);

  useEffect(() => {
    // In real app, fetch from API
    setProfit(totalIncome - totalExpense);
  }, [totalIncome, totalExpense]);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Finance Dashboard</h1>
            <p className="text-gray-600 mt-2">Income vs expenses</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-green-50 rounded-lg p-6 border border-green-200">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="text-green-600" size={24} />
                <span className="text-sm text-gray-600">Total Income</span>
              </div>
              <p className="text-3xl font-bold text-gray-900">₹{totalIncome.toLocaleString()}</p>
            </div>
            <div className="bg-red-50 rounded-lg p-6 border border-red-200">
              <div className="flex items-center gap-3 mb-2">
                <TrendingDown className="text-red-600" size={24} />
                <span className="text-sm text-gray-600">Total Expenses</span>
              </div>
              <p className="text-3xl font-bold text-gray-900">₹{totalExpense.toLocaleString()}</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <div className="flex items-center gap-3 mb-2">
                <DollarSign className="text-blue-600" size={24} />
                <span className="text-sm text-gray-600">Net Profit</span>
              </div>
              <p className="text-3xl font-bold text-gray-900">₹{profit.toLocaleString()}</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-12 text-center border border-gray-200">
            <BarChart3 className="mx-auto text-gray-400 mb-4" size={48} />
            <p className="text-gray-500">Detailed finance charts and graphs will appear here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinanceDashboard;



