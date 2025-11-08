import React, { useState } from 'react';
import { Plus, Edit, Trash2, Search, Filter, FileText, Upload } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { Question } from '../../types/Exam';

const QuestionBank: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [subjectFilter, setSubjectFilter] = useState('all');
  
  const [questions] = useState<Question[]>([
    {
      id: '1',
      question: 'What is the time complexity of accessing an element in an array?',
      questionHindi: 'एरे में एक तत्व तक पहुंचने की समय जटिलता क्या है?',
      options: {
        A: 'O(1)',
        B: 'O(n)',
        C: 'O(log n)',
        D: 'O(n²)'
      },
      correctAnswer: 'A',
      marks: 1,
      negativeMarks: 0.25,
      subjectId: '1',
      subjectName: 'Data Structures',
      courseId: '1',
      courseName: 'BCA',
      difficulty: 'easy',
      createdAt: '2024-11-05',
      updatedAt: '2024-11-05'
    }
  ]);

  const filteredQuestions = questions.filter(q =>
    q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    q.subjectName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Question Bank</h1>
              <p className="text-gray-600 mt-2">All stored questions</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => navigate('/admin/exam/question/import')}
                className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
              >
                <Upload size={20} />
                Import Questions
              </button>
              <button
                onClick={() => navigate('/admin/exam/question/add')}
                className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition shadow-lg"
              >
                <Plus size={20} />
                Add Question
              </button>
            </div>
          </div>

          <div className="flex gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions..."
                className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            <select
              value={subjectFilter}
              onChange={(e) => setSubjectFilter(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              <option value="all">All Subjects</option>
              <option value="1">Data Structures</option>
            </select>
          </div>

          <div className="space-y-4">
            {filteredQuestions.map((question) => (
              <div key={question.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <FileText className="text-indigo-600" size={20} />
                      <span className="px-3 py-1 text-xs font-semibold bg-indigo-100 text-indigo-800 rounded-full">
                        {question.subjectName}
                      </span>
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        question.difficulty === 'easy' ? 'bg-green-100 text-green-800' :
                        question.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {question.difficulty}
                      </span>
                    </div>
                    <p className="font-semibold text-gray-900 mb-2">{question.question}</p>
                    {question.questionHindi && (
                      <p className="text-gray-600 mb-4">{question.questionHindi}</p>
                    )}
                    <div className="grid md:grid-cols-2 gap-3 mt-4">
                      {Object.entries(question.options).map(([key, value]) => (
                        <div
                          key={key}
                          className={`p-3 rounded-lg border-2 ${
                            question.correctAnswer === key
                              ? 'border-green-500 bg-green-50'
                              : 'border-gray-200'
                          }`}
                        >
                          <span className="font-semibold text-gray-900">{key}:</span> {value}
                          {question.correctAnswer === key && (
                            <span className="ml-2 text-green-600 font-semibold">✓ Correct</span>
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 flex items-center gap-4 text-sm text-gray-600">
                      <span>Marks: {question.marks}</span>
                      {question.negativeMarks && <span>Negative: -{question.negativeMarks}</span>}
                    </div>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <button
                      onClick={() => navigate(`/admin/exam/question/edit/${question.id}`)}
                      className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition"
                    >
                      <Edit size={18} />
                    </button>
                    <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionBank;



