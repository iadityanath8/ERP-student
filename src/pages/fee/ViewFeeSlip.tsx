import React, { useState, useEffect } from 'react';
import { ArrowLeft, Download, DollarSign, Calendar, CheckCircle2 } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import type { FeeSlip } from '../../types/Fee';

const ViewFeeSlip: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [feeSlip, setFeeSlip] = useState<FeeSlip | null>(null);

  useEffect(() => {
    setFeeSlip({
      id: id || '1',
      studentId: '1',
      studentName: 'Rajesh Kumar',
      rollNumber: 'BCA2024001',
      courseId: '1',
      courseName: 'BCA',
      batchId: '1',
      batchCode: 'BCA-2024-01',
      feeType: 'monthly',
      amount: 5000,
      dueDate: '2024-11-15',
      paidDate: '2024-11-10',
      status: 'paid',
      paymentMethod: 'online',
      transactionId: 'TXN001',
      createdAt: '2024-11-01',
      updatedAt: '2024-11-10'
    });
  }, [id]);

  if (!feeSlip) {
    return <div className="min-h-screen bg-gray-50 p-6 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading fee slip...</p>
      </div>
    </div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate('/admin/fee/slips')}
                className="p-2 hover:bg-gray-100 rounded-lg transition"
              >
                <ArrowLeft size={24} className="text-gray-600" />
              </button>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">View Fee Slip</h1>
                <p className="text-gray-600 mt-2">Full detail</p>
              </div>
            </div>
            <button className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition">
              <Download size={20} />
              Download
            </button>
          </div>

          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-8 mb-6 border border-indigo-200">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Fee Slip #{feeSlip.id}</h2>
              <p className="text-gray-600">Generated on {new Date(feeSlip.createdAt).toLocaleDateString()}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-gray-600 mb-1">Student Name</p>
                <p className="text-xl font-bold text-gray-900">{feeSlip.studentName}</p>
                <p className="text-sm text-gray-600 mt-1">Roll: {feeSlip.rollNumber}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Amount</p>
                <p className="text-3xl font-bold text-indigo-600">₹{feeSlip.amount.toLocaleString()}</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-1">Course</p>
                <p className="font-semibold text-gray-900">{feeSlip.courseName}</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-1">Batch</p>
                <p className="font-semibold text-gray-900">{feeSlip.batchCode}</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-1">Fee Type</p>
                <p className="font-semibold text-gray-900 capitalize">{feeSlip.feeType}</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-1">Due Date</p>
                <p className="font-semibold text-gray-900">{new Date(feeSlip.dueDate).toLocaleDateString()}</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-1">Status</p>
                <span className={`px-3 py-1 text-sm font-semibold rounded-full ${
                  feeSlip.status === 'paid' ? 'bg-green-100 text-green-800' :
                  feeSlip.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {feeSlip.status}
                </span>
              </div>
              {feeSlip.paidDate && (
                <div className="border border-gray-200 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Paid Date</p>
                  <p className="font-semibold text-gray-900">{new Date(feeSlip.paidDate).toLocaleDateString()}</p>
                </div>
              )}
              {feeSlip.paymentMethod && (
                <div className="border border-gray-200 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Payment Method</p>
                  <p className="font-semibold text-gray-900 capitalize">{feeSlip.paymentMethod}</p>
                </div>
              )}
              {feeSlip.transactionId && (
                <div className="border border-gray-200 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Transaction ID</p>
                  <p className="font-semibold text-gray-900">{feeSlip.transactionId}</p>
                </div>
              )}
            </div>

            {feeSlip.notes && (
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-1">Notes</p>
                <p className="text-gray-900">{feeSlip.notes}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewFeeSlip;



