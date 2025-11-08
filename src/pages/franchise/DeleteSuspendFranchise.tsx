import React, { useState, useEffect } from 'react';
import { ArrowLeft, AlertTriangle, Trash2, Ban } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

const DeleteSuspendFranchise: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [action, setAction] = useState<'suspend' | 'delete' | null>(null);
  const [reason, setReason] = useState('');

  const handleAction = () => {
    if (!action || !reason) return;
    console.log(`${action} franchise ${id} with reason: ${reason}`);
    navigate('/admin/franchise');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={() => navigate(`/admin/franchise/view/${id}`)}
              className="p-2 hover:bg-gray-100 rounded-lg transition"
            >
              <ArrowLeft size={24} className="text-gray-600" />
            </button>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Status Control</h1>
              <p className="text-gray-600 mt-2">Delete / Suspend Franchise</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-start gap-3">
              <AlertTriangle className="text-yellow-600 mt-1" size={24} />
              <div>
                <p className="font-semibold text-yellow-900">Warning</p>
                <p className="text-sm text-yellow-800 mt-1">
                  This action will affect the franchise status. Please provide a reason for this action.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Select Action</label>
                <div className="grid md:grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setAction('suspend')}
                    className={`p-4 border-2 rounded-lg transition ${
                      action === 'suspend'
                        ? 'border-yellow-500 bg-yellow-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <Ban className="mx-auto mb-2 text-yellow-600" size={32} />
                    <p className="font-semibold text-gray-900">Suspend Franchise</p>
                    <p className="text-sm text-gray-600 mt-1">Temporarily disable access</p>
                  </button>
                  <button
                    type="button"
                    onClick={() => setAction('delete')}
                    className={`p-4 border-2 rounded-lg transition ${
                      action === 'delete'
                        ? 'border-red-500 bg-red-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <Trash2 className="mx-auto mb-2 text-red-600" size={32} />
                    <p className="font-semibold text-gray-900">Delete Franchise</p>
                    <p className="text-sm text-gray-600 mt-1">Permanently remove</p>
                  </button>
                </div>
              </div>

              {action && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Reason *</label>
                  <textarea
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Provide a detailed reason for this action..."
                  />
                </div>
              )}
            </div>

            <div className="flex gap-4 pt-4 border-t border-gray-200">
              <button
                onClick={() => navigate(`/admin/franchise/view/${id}`)}
                className="flex-1 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleAction}
                disabled={!action || !reason}
                className={`flex-1 px-6 py-3 rounded-lg font-semibold transition shadow-lg ${
                  action === 'delete'
                    ? 'bg-red-600 text-white hover:bg-red-700'
                    : 'bg-yellow-600 text-white hover:bg-yellow-700'
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {action === 'delete' ? 'Confirm Delete' : 'Confirm Suspend'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteSuspendFranchise;

