import React, { useState, useEffect } from 'react';
import { Plus, ArrowUp, ArrowDown, Wallet, TrendingUp, DollarSign } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { WalletOverview } from '../../types/Wallet';

const WalletOverviewPage: React.FC = () => {
  const navigate = useNavigate();
  const [overview, setOverview] = useState<WalletOverview | null>(null);

  useEffect(() => {
    // Mock data
    setOverview({
      franchiseId: '1',
      franchiseName: 'Mumbai Central Branch',
      currentBalance: 50000,
      totalCredits: 100000,
      totalDebits: 50000,
      pendingTransactions: 2,
      lastTransactionDate: '2024-11-05'
    });
  }, []);

  if (!overview) {
    return <div className="min-h-screen bg-gray-50 p-6 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading wallet...</p>
      </div>
    </div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <Wallet className="text-indigo-600" size={32} />
                Wallet Overview
              </h1>
              <p className="text-gray-600 mt-2">Balance, top-up option</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => navigate('/admin/wallet/add-amount')}
                className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition shadow-lg"
              >
                <Plus size={20} />
                Add Amount
              </button>
            </div>
          </div>

          {/* Balance Card */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-8 mb-6 text-white">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-indigo-100 mb-2">Current Balance</p>
                <p className="text-5xl font-bold">₹{overview.currentBalance.toLocaleString()}</p>
              </div>
              <Wallet size={48} className="opacity-50" />
            </div>
            <div className="flex gap-6 mt-6">
              <div>
                <p className="text-indigo-100 text-sm">Total Credits</p>
                <p className="text-2xl font-bold">₹{overview.totalCredits.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-indigo-100 text-sm">Total Debits</p>
                <p className="text-2xl font-bold">₹{overview.totalDebits.toLocaleString()}</p>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <div className="flex items-center gap-3 mb-2">
                <ArrowUp className="text-blue-600" size={24} />
                <span className="text-sm text-gray-600">Pending Credits</span>
              </div>
              <p className="text-3xl font-bold text-gray-900">{overview.pendingTransactions}</p>
            </div>
            <div className="bg-green-50 rounded-lg p-6 border border-green-200">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="text-green-600" size={24} />
                <span className="text-sm text-gray-600">Net Balance</span>
              </div>
              <p className="text-3xl font-bold text-gray-900">
                ₹{(overview.totalCredits - overview.totalDebits).toLocaleString()}
              </p>
            </div>
            <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
              <div className="flex items-center gap-3 mb-2">
                <DollarSign className="text-purple-600" size={24} />
                <span className="text-sm text-gray-600">Last Transaction</span>
              </div>
              <p className="text-lg font-bold text-gray-900">
                {new Date(overview.lastTransactionDate).toLocaleDateString()}
              </p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-2 gap-4">
            <button
              onClick={() => navigate('/admin/wallet/add-amount')}
              className="p-6 bg-indigo-50 border-2 border-indigo-200 rounded-lg hover:border-indigo-400 transition text-left"
            >
              <ArrowUp className="text-indigo-600 mb-2" size={32} />
              <h3 className="font-semibold text-gray-900 mb-1">Credit to Wallet</h3>
              <p className="text-sm text-gray-600">Add amount from admin to franchise</p>
            </button>
            <button
              onClick={() => navigate('/admin/wallet/payment-to-admin')}
              className="p-6 bg-green-50 border-2 border-green-200 rounded-lg hover:border-green-400 transition text-left"
            >
              <ArrowDown className="text-green-600 mb-2" size={32} />
              <h3 className="font-semibold text-gray-900 mb-1">Payment to Admin</h3>
              <p className="text-sm text-gray-600">Franchise payment to admin</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletOverviewPage;

