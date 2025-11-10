import React, { useState } from 'react';
import { Plus, Eye, Edit, Search, Filter, Calendar, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { Exam } from '../../types/Exam';

const ExamList: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  
  const [exams] = useState<Exam[]>([
    {
      id: '1',
      title: 'BCA Semester 1 - Data Structures',
      description: 'Mid-term examination',
      courseId: '1',
      courseName: 'BCA',
      batchId: '1',
      batchCode: 'BCA-2024-01',
      subjectId: '1',
      subjectName: 'Data Structures',
      startDate: '2024-11-15T10:00:00',
      endDate: '2024-11-15T12:00:00',
      duration: 120,
      totalMarks: 100,
      passingMarks: 40,
      questions: ['q1', 'q2', 'q3'],
      status: 'scheduled',
      negativeMarking: true,
      showResult: true,
      createdAt: '2024-11-05',
      updatedAt: '2024-11-05'
    }
  ]);

  const filteredExams = exams.filter(exam =>
    exam.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    exam.courseName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'scheduled': return 'bg-blue-100 text-blue-800';
      case 'ongoing': return 'bg-green-100 text-green-800';
      case 'completed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-yellow-100 text-yellow-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Exam List</h1>
              <p className="text-gray-600 mt-2">All exams</p>
            </div>
            <button
              onClick={() => navigate('/admin/exam/add')}
              className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition shadow-lg"
            >
              <Plus size={20} />
              Add Exam
            </button>
          </div>

          <div className="flex gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search exams..."
                className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              <option value="all">All Status</option>
              <option value="draft">Draft</option>
              <option value="scheduled">Scheduled</option>
              <option value="ongoing">Ongoing</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredExams.map((exam) => (
              <div key={exam.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{exam.title}</h3>
                    <p className="text-sm text-gray-600">{exam.courseName} - {exam.batchCode}</p>
                  </div>
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(exam.status)}`}>
                    {exam.status}
                  </span>
                </div>

                <div className="space-y-2 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{new Date(exam.startDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>{exam.duration} minutes | {exam.totalMarks} marks</span>
                  </div>
                  <div>
                    <span>Questions: {exam.questions.length}</span>
                    {exam.negativeMarking && <span className="ml-2 text-red-600">• Negative Marking</span>}
                  </div>
                </div>

                <div className="flex gap-2 pt-4 border-t border-gray-200">
                  <button
                    onClick={() => navigate(`/admin/exam/view/${exam.id}`)}
                    className="flex-1 p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
                  >
                    <Eye size={18} />
                  </button>
                  <button
                    onClick={() => navigate(`/admin/exam/edit/${exam.id}`)}
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

export default ExamList;



