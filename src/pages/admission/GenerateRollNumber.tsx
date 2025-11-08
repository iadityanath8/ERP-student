import React, { useState, useEffect } from 'react';
import { ArrowLeft, Save, Hash } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

const GenerateRollNumber: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [rollNumber, setRollNumber] = useState('');
  const [autoGenerate, setAutoGenerate] = useState(true);

  useEffect(() => {
    if (autoGenerate) {
      // Auto-generate roll number
      setRollNumber(`BCA2024${String(Math.floor(Math.random() * 1000)).padStart(3, '0')}`);
    }
  }, [autoGenerate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Generating roll number:', rollNumber);
    navigate(`/admin/admission/view/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={() => navigate(`/admin/admission/view/${id}`)}
              className="p-2 hover:bg-gray-100 rounded-lg transition"
            >
              <ArrowLeft size={24} className="text-gray-600" />
            </button>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <Hash className="text-indigo-600" size={32} />
                Generate Roll Number
              </h1>
              <p className="text-gray-600 mt-2">Auto/manual option</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex items-center space-x-3 p-4 bg-indigo-50 rounded-lg">
              <input
                type="checkbox"
                checked={autoGenerate}
                onChange={(e) => setAutoGenerate(e.target.checked)}
                className="w-5 h-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <span className="text-sm font-medium text-gray-700">Auto-generate Roll Number</span>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Roll Number *</label>
              <input
                type="text"
                value={rollNumber}
                onChange={(e) => setRollNumber(e.target.value)}
                required
                disabled={autoGenerate}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent disabled:bg-gray-100"
                placeholder="Enter or auto-generate roll number"
              />
              {autoGenerate && (
                <p className="mt-2 text-sm text-gray-600">Roll number will be auto-generated based on course and year</p>
              )}
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-900">
                <strong>Preview:</strong> {rollNumber || 'No roll number generated yet'}
              </p>
            </div>

            <div className="flex gap-4 pt-4">
              <button
                type="button"
                onClick={() => navigate(`/admin/admission/view/${id}`)}
                className="flex-1 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition shadow-lg"
              >
                <Save size={20} />
                Generate & Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GenerateRollNumber;



