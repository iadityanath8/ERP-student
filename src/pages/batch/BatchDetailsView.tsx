import React, { useState, useEffect } from 'react';
import { ArrowLeft, Edit, Users, Calendar, Clock, BookOpen } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import type { Batch } from '../../types/Batch';

const BatchDetailsView: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [batch, setBatch] = useState<Batch | null>(null);

  useEffect(() => {
    // Mock data
    setBatch({
      id: id || '1',
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
    });
  }, [id]);

  if (!batch) {
    return <div className="min-h-screen bg-gray-50 p-6 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading batch details...</p>
      </div>
    </div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate('/admin/batch')}
                className="p-2 hover:bg-gray-100 rounded-lg transition"
              >
                <ArrowLeft size={24} className="text-gray-600" />
              </button>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{batch.name}</h1>
                <p className="text-gray-600 mt-2">Students, course links</p>
              </div>
            </div>
            <button
              onClick={() => navigate(`/admin/batch/edit/${id}`)}
              className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition"
            >
              <Edit size={20} />
              Edit
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <div className="flex items-center gap-3 mb-2">
                <BookOpen className="text-blue-600" size={24} />
                <span className="text-sm text-gray-600">Course</span>
              </div>
              <p className="text-2xl font-bold text-gray-900">{batch.courseName}</p>
            </div>
            <div className="bg-green-50 rounded-lg p-6 border border-green-200">
              <div className="flex items-center gap-3 mb-2">
                <Users className="text-green-600" size={24} />
                <span className="text-sm text-gray-600">Students</span>
              </div>
              <p className="text-2xl font-bold text-gray-900">{batch.currentStudents} / {batch.maxStudents}</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
              <div className="flex items-center gap-3 mb-2">
                <Calendar className="text-purple-600" size={24} />
                <span className="text-sm text-gray-600">Duration</span>
              </div>
              <p className="text-2xl font-bold text-gray-900">{batch.duration} months</p>
            </div>
            <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
              <div className="flex items-center gap-3 mb-2">
                <Clock className="text-yellow-600" size={24} />
                <span className="text-sm text-gray-600">Timing</span>
              </div>
              <p className="text-2xl font-bold text-gray-900">{batch.timing}</p>
            </div>
          </div>

          <div className="mt-6">
            <button
              onClick={() => navigate(`/admin/batch/assign/${id}`)}
              className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition"
            >
              Assign Students
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BatchDetailsView;



