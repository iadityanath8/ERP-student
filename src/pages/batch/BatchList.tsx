import React, { useState } from 'react';
import { Plus, Edit, Eye, Search, Calendar, Users, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { Batch } from '../../types/Batch';

const BatchList: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  
  const [batches] = useState<Batch[]>([
    {
      id: '1',
      code: 'BCA-2024-01',
      name: 'BCA Morning Batch',
      courseId: '1',
      courseName: 'BCA',
      startDate: '2024-01-15',
      endDate: '2024-12-15',
      timing: '10:00 AM - 12:00 PM',
      duration: 12,
      maxStudents: 50,
      currentStudents: 35,
      status: 'ongoing',
      instructorId: '1',
      instructorName: 'Dr. John Smith',
      createdAt: '2024-01-01',
      updatedAt: '2024-01-01'
    }
  ]);

  const filteredBatches = batches.filter(batch =>
    batch.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
    batch.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    batch.courseName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ongoing': return 'bg-green-100 text-green-800';
      case 'upcoming': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-red-100 text-red-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Batch List</h1>
              <p className="text-gray-600 mt-2">All batches with codes</p>
            </div>
            <button
              onClick={() => navigate('/admin/batch/add')}
              className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition shadow-lg"
            >
              <Plus size={20} />
              Add Batch
            </button>
          </div>

          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search batches..."
                className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBatches.map((batch) => (
              <div key={batch.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{batch.name}</h3>
                    <p className="text-sm text-gray-500">Code: {batch.code}</p>
                  </div>
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(batch.status)}`}>
                    {batch.status}
                  </span>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar size={16} />
                    <span>{new Date(batch.startDate).toLocaleDateString()} - {new Date(batch.endDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock size={16} />
                    <span>{batch.timing}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Users size={16} />
                    <span>{batch.currentStudents} / {batch.maxStudents} students</span>
                  </div>
                </div>

                <div className="flex gap-2 pt-4 border-t border-gray-200">
                  <button
                    onClick={() => navigate(`/admin/batch/view/${batch.id}`)}
                    className="flex-1 p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
                  >
                    <Eye size={18} />
                  </button>
                  <button
                    onClick={() => navigate(`/admin/batch/edit/${batch.id}`)}
                    className="flex-1 p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition"
                  >
                    <Edit size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BatchList;



