import React, { useState, useEffect } from 'react';
import { BarChart3, TrendingUp, Users, Award } from 'lucide-react';
import { useParams } from 'react-router-dom';
import type { ExamAnalytics } from '../../types/Exam';

const ExamAnalyticsPage: React.FC = () => {
  const { examId } = useParams<{ examId: string }>();
  const [analytics, setAnalytics] = useState<ExamAnalytics | null>(null);

  useEffect(() => {
    setAnalytics({
      examId: examId || '1',
      examTitle: 'BCA Semester 1 - Data Structures',
      totalStudents: 50,
      attemptedStudents: 45,
      averageScore: 72.5,
      passPercentage: 80,
      topPerformers: [
        { studentName: 'Rajesh Kumar', rollNumber: 'BCA2024001', score: 95, percentage: 95 },
        { studentName: 'Priya Sharma', rollNumber: 'BCA2024002', score: 92, percentage: 92 }
      ],
      questionWiseAnalysis: [
        { questionId: 'q1', correctAnswers: 40, wrongAnswers: 5, notAttempted: 5 },
        { questionId: 'q2', correctAnswers: 35, wrongAnswers: 10, notAttempted: 5 }
      ]
    });
  }, [examId]);

  if (!analytics) {
    return <div className="min-h-screen bg-gray-50 p-6 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading analytics...</p>
      </div>
    </div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <BarChart3 className="text-indigo-600" size={32} />
              Exam Analytics
            </h1>
            <p className="text-gray-600 mt-2">Performance reports</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-6">
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <div className="flex items-center gap-3 mb-2">
                <Users className="text-blue-600" size={24} />
                <span className="text-sm text-gray-600">Total Students</span>
              </div>
              <p className="text-3xl font-bold text-gray-900">{analytics.totalStudents}</p>
            </div>
            <div className="bg-green-50 rounded-lg p-6 border border-green-200">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="text-green-600" size={24} />
                <span className="text-sm text-gray-600">Attempted</span>
              </div>
              <p className="text-3xl font-bold text-gray-900">{analytics.attemptedStudents}</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
              <div className="flex items-center gap-3 mb-2">
                <Award className="text-purple-600" size={24} />
                <span className="text-sm text-gray-600">Avg Score</span>
              </div>
              <p className="text-3xl font-bold text-gray-900">{analytics.averageScore}</p>
            </div>
            <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
              <div className="flex items-center gap-3 mb-2">
                <BarChart3 className="text-yellow-600" size={24} />
                <span className="text-sm text-gray-600">Pass %</span>
              </div>
              <p className="text-3xl font-bold text-gray-900">{analytics.passPercentage}%</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Top Performers</h2>
              <div className="space-y-3">
                {analytics.topPerformers.map((performer, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-semibold text-gray-900">{performer.studentName}</p>
                      <p className="text-sm text-gray-600">{performer.rollNumber}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-gray-900">{performer.score} / 100</p>
                      <p className="text-sm text-green-600">{performer.percentage}%</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Question-wise Analysis</h2>
              <div className="space-y-3">
                {analytics.questionWiseAnalysis.map((analysis, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg">
                    <p className="font-semibold text-gray-900 mb-2">Question {index + 1}</p>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span className="text-green-600">Correct: {analysis.correctAnswers}</span>
                        <span className="text-red-600">Wrong: {analysis.wrongAnswers}</span>
                        <span className="text-gray-600">Not Attempted: {analysis.notAttempted}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-12 text-center border border-gray-200">
            <BarChart3 className="mx-auto text-gray-400 mb-4" size={48} />
            <p className="text-gray-500">Detailed charts and graphs will appear here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamAnalyticsPage;

