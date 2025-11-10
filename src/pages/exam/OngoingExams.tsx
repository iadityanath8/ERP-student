import React, { useState } from 'react';
import { Play, Clock, Calendar, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { Exam } from '../../types/Exam';

const OngoingExams: React.FC = () => {
  const navigate = useNavigate();
  const [exams] = useState<Exam[]>([
    {
      id: '1',
      title: 'BCA Semester 1 - Data Structures',
      description: 'Mid-term examination',
      courseId: '1',
      courseName: 'BCA',
      batchId: '1',
      batchCode: 'BCA-2024-01',
      startDate: '2024-11-15T10:00:00',
      endDate: '2024-11-15T12:00:00',
      duration: 120,
      totalMarks: 100,
      passingMarks: 40,
      questions: [],
      status: 'ongoing',
      negativeMarking: true,
      showResult: true,
      createdAt: '2024-11-05',
      updatedAt: '2024-11-05'
    }
  ]);

  const getRemainingTime = (endDate: string) => {
    const end = new Date(endDate);
    const now = new Date();
    const diff = end.getTime() - now.getTime();
    if (diff <= 0) return 'Time Up';
    const minutes = Math.floor(diff / (1000 * 60));
    return `${minutes} minutes remaining`;
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Ongoing Exams</h1>
            <p className="text-gray-600 mt-2">Attempt screen</p>
          </div>

          <div className="space-y-6">
            {exams.map((exam) => (
              <div key={exam.id} className="border-2 border-indigo-200 rounded-lg p-6 bg-indigo-50">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{exam.title}</h2>
                    <p className="text-gray-600">{exam.courseName} - {exam.batchCode}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-red-600 font-semibold mb-2">
                      <Clock size={20} />
                      <span>{getRemainingTime(exam.endDate)}</span>
                    </div>
                    <span className="px-3 py-1 text-xs font-semibold bg-green-100 text-green-800 rounded-full">
                      Ongoing
                    </span>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-1">Duration</p>
                    <p className="font-bold text-gray-900">{exam.duration} minutes</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-1">Total Marks</p>
                    <p className="font-bold text-gray-900">{exam.totalMarks}</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-1">Questions</p>
                    <p className="font-bold text-gray-900">{exam.questions.length}</p>
                  </div>
                </div>

                {exam.negativeMarking && (
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
                    <p className="text-sm text-yellow-900">
                      <strong>Note:</strong> Negative marking is enabled. Be careful with your answers.
                    </p>
                  </div>
                )}

                <button
                  onClick={() => navigate(`/student/exam/attempt/${exam.id}`)}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition shadow-lg"
                >
                  <Play size={24} />
                  Start Exam
                </button>
              </div>
            ))}

            {exams.length === 0 && (
              <div className="text-center py-12">
                <FileText className="mx-auto text-gray-400" size={48} />
                <p className="mt-4 text-gray-600">No ongoing exams</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OngoingExams;



