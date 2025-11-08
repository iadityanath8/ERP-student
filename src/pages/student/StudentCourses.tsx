import React, { useState } from 'react';
import { BookOpen, Clock, Users, Eye, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { StudentEnrollment } from '../../types/StudentPanel';

const StudentCourses: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data
  const [enrollments] = useState<StudentEnrollment[]>([
    {
      id: '1',
      courseId: 'c1',
      courseName: 'Mathematics Fundamentals',
      batchId: 'b1',
      batchCode: 'BS-2024-A',
      enrollmentDate: '2024-01-01',
      status: 'active',
      progress: 65,
      startDate: '2024-01-01',
      endDate: '2024-12-31',
    },
    {
      id: '2',
      courseId: 'c2',
      courseName: 'Physics Advanced',
      batchId: 'b2',
      batchCode: 'BS-2024-B',
      enrollmentDate: '2024-01-05',
      status: 'active',
      progress: 45,
      startDate: '2024-01-05',
      endDate: '2024-12-31',
    },
    {
      id: '3',
      courseId: 'c3',
      courseName: 'Chemistry Basics',
      batchId: 'b3',
      batchCode: 'BS-2023-A',
      enrollmentDate: '2023-12-01',
      status: 'completed',
      progress: 100,
      startDate: '2023-12-01',
      endDate: '2023-12-31',
    },
  ]);

  const filteredEnrollments = enrollments.filter(enrollment =>
    enrollment.courseName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">My Courses</h1>

      {/* Search */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <input
          type="text"
          placeholder="Search courses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEnrollments.map((enrollment) => (
          <div key={enrollment.id} className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <BookOpen className="w-8 h-8 text-blue-500" />
                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                  enrollment.status === 'active' ? 'bg-green-100 text-green-800' :
                  enrollment.status === 'completed' ? 'bg-blue-100 text-blue-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {enrollment.status}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{enrollment.courseName}</h3>
              <p className="text-sm text-gray-500 mb-4">Batch: {enrollment.batchCode}</p>

              {/* Progress */}
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Progress</span>
                  <span className="font-semibold text-gray-800">{enrollment.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${enrollment.progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Course Info */}
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Started: {new Date(enrollment.startDate).toLocaleDateString()}</span>
                </div>
                {enrollment.endDate && (
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>Ends: {new Date(enrollment.endDate).toLocaleDateString()}</span>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <button
                  onClick={() => navigate(`/student/course/${enrollment.courseId}`)}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  <Eye className="w-4 h-4" />
                  View Course
                </button>
                <button
                  onClick={() => navigate(`/student/materials/${enrollment.courseId}`)}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentCourses;

