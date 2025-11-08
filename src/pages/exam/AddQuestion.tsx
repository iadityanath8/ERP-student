import React, { useState } from 'react';
import { ArrowLeft, Save, FileText, Upload } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { Question } from '../../types/Exam';

const AddQuestion: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<Omit<Question, 'id' | 'createdAt' | 'updatedAt'>>({
    question: '',
    questionHindi: '',
    questionImage: '',
    options: {
      A: '',
      B: '',
      C: '',
      D: ''
    },
    optionsHindi: {
      A: '',
      B: '',
      C: '',
      D: ''
    },
    correctAnswer: 'A',
    marks: 1,
    negativeMarks: 0,
    subjectId: '',
    subjectName: '',
    courseId: '',
    courseName: '',
    difficulty: 'medium'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Creating question:', formData);
    navigate('/admin/exam/questions');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={() => navigate('/admin/exam/questions')}
              className="p-2 hover:bg-gray-100 rounded-lg transition"
            >
              <ArrowLeft size={24} className="text-gray-600" />
            </button>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <FileText className="text-indigo-600" size={32} />
                Add Question
              </h1>
              <p className="text-gray-600 mt-2">Hindi/English with image</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                <select
                  value={formData.subjectId}
                  onChange={(e) => {
                    const selected = e.target.options[e.target.selectedIndex];
                    setFormData({ ...formData, subjectId: e.target.value, subjectName: selected.text });
                  }}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                  <option value="">Select Subject</option>
                  <option value="1">Data Structures</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Difficulty *</label>
                <select
                  value={formData.difficulty}
                  onChange={(e) => setFormData({ ...formData, difficulty: e.target.value as any })}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Question (English) *</label>
                <textarea
                  value={formData.question}
                  onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                  required
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Enter question in English..."
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Question (Hindi) - Optional</label>
                <textarea
                  value={formData.questionHindi}
                  onChange={(e) => setFormData({ ...formData, questionHindi: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Enter question in Hindi (optional)..."
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Question Image (Optional)</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="mx-auto text-gray-400 mb-2" size={32} />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        // In real app, upload to server and get URL
                        setFormData({ ...formData, questionImage: URL.createObjectURL(file) });
                      }
                    }}
                    className="hidden"
                    id="question-image"
                  />
                  <label
                    htmlFor="question-image"
                    className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition cursor-pointer"
                  >
                    Upload Image
                  </label>
                </div>
              </div>

              <div className="md:col-span-2">
                <h3 className="font-semibold text-gray-900 mb-4">Options (English) *</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {(['A', 'B', 'C', 'D'] as const).map((option) => (
                    <div key={option}>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Option {option} *</label>
                      <input
                        type="text"
                        value={formData.options[option]}
                        onChange={(e) => setFormData({
                          ...formData,
                          options: { ...formData.options, [option]: e.target.value }
                        })}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="md:col-span-2">
                <h3 className="font-semibold text-gray-900 mb-4">Options (Hindi) - Optional</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {(['A', 'B', 'C', 'D'] as const).map((option) => (
                    <div key={option}>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Option {option} (Hindi)</label>
                      <input
                        type="text"
                        value={formData.optionsHindi?.[option] || ''}
                        onChange={(e) => setFormData({
                          ...formData,
                          optionsHindi: { ...formData.optionsHindi, [option]: e.target.value }
                        })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Correct Answer *</label>
                <select
                  value={formData.correctAnswer}
                  onChange={(e) => setFormData({ ...formData, correctAnswer: e.target.value as any })}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                  <option value="A">Option A</option>
                  <option value="B">Option B</option>
                  <option value="C">Option C</option>
                  <option value="D">Option D</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Marks *</label>
                <input
                  type="number"
                  value={formData.marks}
                  onChange={(e) => setFormData({ ...formData, marks: parseInt(e.target.value) })}
                  required
                  min="1"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Negative Marks</label>
                <input
                  type="number"
                  value={formData.negativeMarks}
                  onChange={(e) => setFormData({ ...formData, negativeMarks: parseFloat(e.target.value) })}
                  min="0"
                  step="0.25"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <button
                type="button"
                onClick={() => navigate('/admin/exam/questions')}
                className="flex-1 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition shadow-lg"
              >
                <Save size={20} />
                Create Question
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddQuestion;



