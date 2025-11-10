import React, { useState } from 'react';
import { Eye, Award, Calendar, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { ExamAttempt } from '../../types/Exam';

const CompletedExams: React.FC = () => {
  const navigate = useNavigate();
  const [attempts] = useState<ExamAttempt[]>([
    {
      id: '1',
      examId: '1',
      examTitle: 'BCA Semester 1 - Data Structures',
      studentId: '1',
      studentName: 'Rajesh Kumar',
      rollNumber: 'BCA2024001',
      startTime: '2024-11-10T10:00:00',
      submitTime: '2024-11-10T11:45:00',
      answers: {},
      score: 85,
      percentage: 85,
      status: 'submitted',
      createdAt: '2024-11-10'
    }
  ]);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Completed Exams</h1>
            <p className="text-gray-600 mt-2">Result view</p>
          </div>

          <div className="space-y-4">
            {attempts.map((attempt) => (
              <div key={attempt.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{attempt.examTitle}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>Completed: {new Date(attempt.submitTime || attempt.startTime).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="text-indigo-600" size={24} />
                      <span className="text-2xl font-bold text-gray-900">{attempt.score || 'N/A'}</span>
                    </div>
                    <span className={`px-3 py-1 text-sm font-semibold rounded-full ${
                      (attempt.percentage || 0) >= 60 ? 'bg-green-100 text-green-800' :
                      (attempt.percentage || 0) >= 40 ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {attempt.percentage || 0}%
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-green-600" size={20} />
                  <span className="text-sm text-gray-600">Status: {attempt.status}</span>
                </div>

                <button
                  onClick={() => navigate(`/student/exam/result/${attempt.examId}`)}
                  className="mt-4 flex items-center gap-2 px-6 py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition"
                >
                  <Eye size={18} />
                  View Result
                </button>
              </div>
            ))}
          </div>

          {attempts.length === 0 && (
            <div className="text-center py-12">
              <Award className="mx-auto text-gray-400" size={48} />
              <p className="mt-4 text-gray-600">No completed exams yet</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompletedExams;



