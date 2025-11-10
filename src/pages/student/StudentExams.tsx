import React, { useState } from 'react';
import { FileText, Clock, Calendar, CheckCircle, XCircle, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { StudentExam } from '../../types/StudentPanel';

const StudentExams: React.FC = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'ongoing' | 'completed' | 'missed'>('all');

  // Mock data
  const [exams] = useState<StudentExam[]>([
    {
      id: '1',
      title: 'Mathematics Mid-Term',
      subject: 'Mathematics',
      examDate: '2024-01-20',
      startTime: '10:00:00',
      endTime: '12:00:00',
      duration: 120,
      totalMarks: 100,
      status: 'upcoming',
    },
    {
      id: '2',
      title: 'Physics Quiz',
      subject: 'Physics',
      examDate: '2024-01-18',
      startTime: '14:00:00',
      endTime: '15:00:00',
      duration: 60,
      totalMarks: 50,
      status: 'upcoming',
    },
    {
      id: '3',
      title: 'Chemistry Test',
      subject: 'Chemistry',
      examDate: '2024-01-10',
      startTime: '10:00:00',
      endTime: '11:30:00',
      duration: 90,
      totalMarks: 75,
      status: 'completed',
      obtainedMarks: 65,
      percentage: 86.67,
      grade: 'A',
    },
  ]);

  const filteredExams = filter === 'all'
    ? exams
    : exams.filter(e => e.status === filter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming': return 'bg-blue-100 text-blue-800';
      case 'ongoing': return 'bg-green-100 text-green-800';
      case 'completed': return 'bg-gray-100 text-gray-800';
      case 'missed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">My Exams</h1>

      {/* Filters */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <div className="flex gap-2">
          {(['all', 'upcoming', 'ongoing', 'completed', 'missed'] as const).map((f) => (
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

      {/* Exams List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredExams.map((exam) => (
          <div key={exam.id} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{exam.title}</h3>
                <p className="text-sm text-gray-600">Subject: {exam.subject}</p>
              </div>
              <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(exam.status)}`}>
                {exam.status}
              </span>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Calendar className="w-4 h-4" />
                <span>{new Date(exam.examDate).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Clock className="w-4 h-4" />
                <span>{exam.startTime} - {exam.endTime} ({exam.duration} mins)</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <FileText className="w-4 h-4" />
                <span>Total Marks: {exam.totalMarks}</span>
              </div>
              {exam.status === 'completed' && exam.obtainedMarks !== undefined && (
                <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Obtained Marks:</span>
                    <span className="font-semibold text-gray-800">{exam.obtainedMarks} / {exam.totalMarks}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Percentage:</span>
                    <span className="font-semibold text-gray-800">{exam.percentage}%</span>
                  </div>
                  {exam.grade && (
                    <div className="flex justify-between text-sm mt-1">
                      <span className="text-gray-600">Grade:</span>
                      <span className="font-semibold text-blue-600">{exam.grade}</span>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="flex gap-2">
              {exam.status === 'upcoming' && (
                <button
                  onClick={() => navigate(`/student/exam/${exam.id}`)}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  <Play className="w-4 h-4" />
                  Start Exam
                </button>
              )}
              {exam.status === 'completed' && (
                <button
                  onClick={() => navigate(`/student/exam/result/${exam.id}`)}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  <CheckCircle className="w-4 h-4" />
                  View Result
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentExams;

