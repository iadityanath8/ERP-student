import React, { useState } from 'react';
import { FileText, TrendingUp, Award, Download } from 'lucide-react';
import type { StudentExam } from '../../types/StudentPanel';

const StudentResults: React.FC = () => {
  const [selectedExam, setSelectedExam] = useState<string | null>(null);

  // Mock data
  const [results] = useState<StudentExam[]>([
    {
      id: '1',
      title: 'Mathematics Mid-Term',
      subject: 'Mathematics',
      examDate: '2024-01-15',
      startTime: '10:00:00',
      endTime: '12:00:00',
      duration: 120,
      totalMarks: 100,
      status: 'completed',
      obtainedMarks: 85,
      percentage: 85,
      grade: 'A',
    },
    {
      id: '2',
      title: 'Physics Quiz',
      subject: 'Physics',
      examDate: '2024-01-10',
      startTime: '14:00:00',
      endTime: '15:00:00',
      duration: 60,
      totalMarks: 50,
      status: 'completed',
      obtainedMarks: 42,
      percentage: 84,
      grade: 'A',
    },
    {
      id: '3',
      title: 'Chemistry Test',
      subject: 'Chemistry',
      examDate: '2024-01-05',
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

  const overallStats = {
    totalExams: results.length,
    averagePercentage: results.reduce((sum, r) => sum + (r.percentage || 0), 0) / results.length,
    totalMarks: results.reduce((sum, r) => sum + (r.obtainedMarks || 0), 0),
    maxMarks: results.reduce((sum, r) => sum + r.totalMarks, 0),
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Exam Results</h1>

      {/* Overall Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Exams</p>
              <p className="text-2xl font-bold text-gray-800">{overallStats.totalExams}</p>
            </div>
            <FileText className="w-8 h-8 text-blue-500" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Average Score</p>
              <p className="text-2xl font-bold text-gray-800">{overallStats.averagePercentage.toFixed(1)}%</p>
            </div>
            <TrendingUp className="w-8 h-8 text-green-500" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Marks</p>
              <p className="text-2xl font-bold text-gray-800">
                {overallStats.totalMarks} / {overallStats.maxMarks}
              </p>
            </div>
            <Award className="w-8 h-8 text-orange-500" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Overall Grade</p>
              <p className="text-2xl font-bold text-gray-800">A</p>
            </div>
            <Award className="w-8 h-8 text-yellow-500" />
          </div>
        </div>
      </div>

      {/* Results List */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Exam</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Subject</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Marks</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Percentage</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Grade</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {results.map((result) => (
                <tr key={result.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">{result.title}</div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">{result.subject}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {new Date(result.examDate).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {result.obtainedMarks} / {result.totalMarks}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">{result.percentage}%</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                      {result.grade}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <button className="flex items-center gap-2 text-blue-600 hover:text-blue-900">
                      <Download className="w-4 h-4" />
                      Download
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentResults;

