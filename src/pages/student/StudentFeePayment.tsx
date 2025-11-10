import React, { useState } from 'react';
import { DollarSign, Calendar, CreditCard, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import type { StudentFee } from '../../types/StudentPanel';

const StudentFeePayment: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'pending' | 'paid' | 'overdue'>('all');

  // Mock data
  const [fees] = useState<StudentFee[]>([
    {
      id: '1',
      feeSlipId: 'fs1',
      title: 'Tuition Fee - January 2024',
      amount: 5000,
      dueDate: '2024-01-31',
      status: 'pending',
    },
    {
      id: '2',
      feeSlipId: 'fs2',
      title: 'Tuition Fee - December 2023',
      amount: 5000,
      dueDate: '2023-12-31',
      status: 'overdue',
    },
    {
      id: '3',
      feeSlipId: 'fs3',
      title: 'Tuition Fee - November 2023',
      amount: 5000,
      dueDate: '2023-11-30',
      status: 'paid',
      paidAmount: 5000,
      paidDate: '2023-11-25',
      paymentMethod: 'Online',
    },
  ]);

  const filteredFees = filter === 'all'
    ? fees
    : fees.filter(f => f.status === filter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'paid': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'overdue': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'paid': return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'pending': return <Clock className="w-5 h-5 text-yellow-500" />;
      case 'overdue': return <AlertCircle className="w-5 h-5 text-red-500" />;
      default: return null;
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Fee Payment</h1>

      {/* Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Pending</p>
              <p className="text-2xl font-bold text-gray-800">
                ₹{fees.filter(f => f.status === 'pending' || f.status === 'overdue').reduce((sum, f) => sum + f.amount, 0)}
              </p>
            </div>
            <DollarSign className="w-8 h-8 text-yellow-500" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Overdue</p>
              <p className="text-2xl font-bold text-red-600">
                ₹{fees.filter(f => f.status === 'overdue').reduce((sum, f) => sum + f.amount, 0)}
              </p>
            </div>
            <AlertCircle className="w-8 h-8 text-red-500" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Paid This Month</p>
              <p className="text-2xl font-bold text-green-600">
                ₹{fees.filter(f => f.status === 'paid' && f.paidDate && new Date(f.paidDate).getMonth() === new Date().getMonth()).reduce((sum, f) => sum + (f.paidAmount || 0), 0)}
              </p>
            </div>
            <CheckCircle className="w-8 h-8 text-green-500" />
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <div className="flex gap-2">
          {(['all', 'pending', 'paid', 'overdue'] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-lg capitalize ${
                filter === f
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Fees List */}
      <div className="space-y-4">
        {filteredFees.map((fee) => (
          <div key={fee.id} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{fee.title}</h3>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4" />
                    <span>Amount: ₹{fee.amount}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Due: {new Date(fee.dueDate).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {getStatusIcon(fee.status)}
                <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(fee.status)}`}>
                  {fee.status}
                </span>
              </div>
            </div>

            {fee.status === 'paid' && fee.paidDate && (
              <div className="mb-4 p-3 bg-green-50 rounded-lg">
                <div className="text-sm text-gray-600">
                  <p>Paid: ₹{fee.paidAmount} on {new Date(fee.paidDate).toLocaleDateString()}</p>
                  <p>Payment Method: {fee.paymentMethod}</p>
                </div>
              </div>
            )}

            {fee.status !== 'paid' && (
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                <CreditCard className="w-4 h-4" />
                Pay Now
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentFeePayment;

