import React, { useState, useEffect } from 'react';
import { ArrowLeft, Plus, Calendar, Save } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import type { FollowUp } from '../../types/Enquiry';

const FollowUpTracker: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [followUps, setFollowUps] = useState<FollowUp[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    followUpDate: '',
    notes: '',
    nextFollowUpDate: ''
  });

  useEffect(() => {
    // Mock data
    setFollowUps([
      {
        id: '1',
        enquiryId: id || '1',
        followUpDate: '2024-11-08',
        notes: 'Called student, interested in admission',
        nextFollowUpDate: '2024-11-15',
        status: 'completed',
        createdBy: 'Admin User',
        createdAt: '2024-11-08'
      }
    ]);
  }, [id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Adding follow-up:', formData);
    setShowForm(false);
    setFormData({ followUpDate: '', notes: '', nextFollowUpDate: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate(`/admin/enquiry/view/${id}`)}
                className="p-2 hover:bg-gray-100 rounded-lg transition"
              >
                <ArrowLeft size={24} className="text-gray-600" />
              </button>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Follow-up Tracker</h1>
                <p className="text-gray-600 mt-2">Date & notes</p>
              </div>
            </div>
            <button
              onClick={() => setShowForm(!showForm)}
              className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition"
            >
              <Plus size={20} />
              Add Follow-up
            </button>
          </div>

          {showForm && (
            <form onSubmit={handleSubmit} className="mb-6 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Follow-up Date *</label>
                  <input
                    type="date"
                    value={formData.followUpDate}
                    onChange={(e) => setFormData({ ...formData, followUpDate: e.target.value })}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Notes *</label>
                  <textarea
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Enter follow-up notes..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Next Follow-up Date</label>
                  <input
                    type="date"
                    value={formData.nextFollowUpDate}
                    onChange={(e) => setFormData({ ...formData, nextFollowUpDate: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => {
                      setShowForm(false);
                      setFormData({ followUpDate: '', notes: '', nextFollowUpDate: '' });
                    }}
                    className="flex-1 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition"
                  >
                    <Save size={20} />
                    Save Follow-up
                  </button>
                </div>
              </div>
            </form>
          )}

          <div className="space-y-4">
            {followUps.map((followUp) => (
              <div key={followUp.id} className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <Calendar className="text-indigo-600" size={24} />
                    <div>
                      <p className="font-semibold text-gray-900">
                        {new Date(followUp.followUpDate).toLocaleDateString()}
                      </p>
                      {followUp.nextFollowUpDate && (
                        <p className="text-sm text-gray-600">
                          Next: {new Date(followUp.nextFollowUpDate).toLocaleDateString()}
                        </p>
                      )}
                    </div>
                  </div>
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    followUp.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {followUp.status}
                  </span>
                </div>
                <p className="text-gray-700 mb-2">{followUp.notes}</p>
                <p className="text-xs text-gray-500">By {followUp.createdBy} on {new Date(followUp.createdAt).toLocaleDateString()}</p>
              </div>
            ))}
          </div>

          {followUps.length === 0 && !showForm && (
            <div className="text-center py-12">
              <Calendar className="mx-auto text-gray-400" size={48} />
              <p className="mt-4 text-gray-600">No follow-ups recorded yet</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FollowUpTracker;



