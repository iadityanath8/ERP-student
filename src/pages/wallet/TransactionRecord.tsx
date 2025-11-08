import React, { useState } from 'react';
import { Search, Filter, Download, ArrowUp, ArrowDown } from 'lucide-react';
import type { WalletTransaction } from '../../types/Wallet';

const TransactionRecord: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'credit' | 'debit'>('all');
  
  // Mock data
  const [transactions] = useState<WalletTransaction[]>([
    {
      id: '1',
      franchiseId: '1',
      franchiseName: 'Mumbai Central Branch',
      type: 'credit',
      amount: 50000,
      description: 'Monthly allocation',
      transactionDate: '2024-11-05',
      status: 'completed',
      referenceNumber: 'REF001',
      initiatedBy: 'Admin User',
      initiatedByRole: 'admin'
    },
    {
      id: '2',
      franchiseId: '1',
      franchiseName: 'Mumbai Central Branch',
      type: 'debit',
      amount: 25000,
      description: 'Fee payment',
      transactionDate: '2024-11-03',
      status: 'completed',
      referenceNumber: 'REF002',
      initiatedBy: 'Rajesh Kumar',
      initiatedByRole: 'franchise'
    }
  ]);

  const filteredTransactions = transactions.filter(t => {
    const matchesSearch = t.franchiseName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.referenceNumber.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterType === 'all' || t.type === filterType;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Transaction Record</h1>
              <p className="text-gray-600 mt-2">Table of transactions</p>
            </div>
            <button className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition">
              <Download size={20} />
              Export
            </button>
          </div>

          {/* Filters */}
          <div className="flex gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search transactions..."
                className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value as any)}
                className="pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option value="all">All Types</option>
                <option value="credit">Credits</option>
                <option value="debit">Debits</option>
              </select>
            </div>
          </div>

          {/* Transactions Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Franchise</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Reference</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredTransactions.map((transaction) => (
                  <tr key={transaction.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {new Date(transaction.transactionDate).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                      {transaction.franchiseName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {transaction.type === 'credit' ? (
                        <span className="flex items-center gap-1 text-green-600">
                          <ArrowUp size={16} />
                          <span className="font-semibold">Credit</span>
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-red-600">
                          <ArrowDown size={16} />
                          <span className="font-semibold">Debit</span>
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                      ₹{transaction.amount.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{transaction.description}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        transaction.status === 'completed' ? 'bg-green-100 text-green-800' :
                        transaction.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {transaction.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {transaction.referenceNumber}
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

export default TransactionRecord;

