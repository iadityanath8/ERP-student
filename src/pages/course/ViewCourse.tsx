import React, { useState, useEffect } from 'react';
import { ArrowLeft, Edit, BookOpen, DollarSign, Calendar } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import type { Course } from '../../types/Course';

const ViewCourse: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [course, setCourse] = useState<Course | null>(null);

  useEffect(() => {
    // Mock data
    setCourse({
      id: id || '1',
      programId: '1',
      programName: 'BCA',
      name: 'Data Structures',
      code: 'BCA-DS101',
      description: 'Introduction to data structures and algorithms',
      fee: 15000,
      duration: 6,
      credits: 4,
      isActive: true,
      createdAt: '2024-01-15',
      updatedAt: '2024-01-15'
    });
  }, [id]);

  if (!course) {
    return <div className="min-h-screen bg-gray-50 p-6 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading course...</p>
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
                onClick={() => navigate('/admin/course')}
                className="p-2 hover:bg-gray-100 rounded-lg transition"
              >
                <ArrowLeft size={24} className="text-gray-600" />
              </button>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                  <BookOpen className="text-indigo-600" size={32} />
                  {course.name}
                </h1>
                <p className="text-gray-600 mt-2">Course Details</p>
              </div>
            </div>
            <button
              onClick={() => navigate(`/admin/course/edit/${id}`)}
              className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition"
            >
              <Edit size={20} />
              Edit
            </button>
          </div>

          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <p className="text-sm text-gray-600 mb-1">Course Code</p>
                <p className="text-2xl font-bold text-gray-900">{course.code}</p>
              </div>
              <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                <p className="text-sm text-gray-600 mb-1">Program</p>
                <p className="text-2xl font-bold text-gray-900">{course.programName}</p>
              </div>
              <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
                <div className="flex items-center gap-2 mb-1">
                  <DollarSign className="text-yellow-600" size={20} />
                  <p className="text-sm text-gray-600">Fee</p>
                </div>
                <p className="text-2xl font-bold text-gray-900">₹{course.fee.toLocaleString()}</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
                <div className="flex items-center gap-2 mb-1">
                  <Calendar className="text-purple-600" size={20} />
                  <p className="text-sm text-gray-600">Duration</p>
                </div>
                <p className="text-2xl font-bold text-gray-900">{course.duration} months</p>
              </div>
              <div className="bg-indigo-50 rounded-lg p-6 border border-indigo-200">
                <p className="text-sm text-gray-600 mb-1">Credits</p>
                <p className="text-2xl font-bold text-gray-900">{course.credits}</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <p className="text-sm text-gray-600 mb-1">Status</p>
                <span className={`px-3 py-1 text-sm font-semibold rounded-full ${
                  course.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {course.isActive ? 'Active' : 'Inactive'}
                </span>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Description</h2>
              <p className="text-gray-700">{course.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCourse;

