import React, { useState } from 'react';
import { ArrowLeft, Save, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { Subject } from '../../types/Course';

const AddSubject: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<Omit<Subject, 'id' | 'createdAt' | 'updatedAt'>>({
    courseId: '',
    courseName: '',
    name: '',
    code: '',
    description: '',
    credits: 0,
    hours: 0,
    isActive: true
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Creating subject:', formData);
    navigate('/admin/course/subjects');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={() => navigate('/admin/course/subjects')}
              className="p-2 hover:bg-gray-100 rounded-lg transition"
            >
              <ArrowLeft size={24} className="text-gray-600" />
            </button>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <BookOpen className="text-indigo-600" size={32} />
                Add Subject
              </h1>
              <p className="text-gray-600 mt-2">Add new subject</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Course *</label>
                <select
                  value={formData.courseId}
                  onChange={(e) => {
                    const selected = e.target.options[e.target.selectedIndex];
                    setFormData({
                      ...formData,
                      courseId: e.target.value,
                      courseName: selected.text
                    });
                  }}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                  <option value="">Select Course</option>
                  <option value="1">Data Structures</option>
                  <option value="2">Database Management</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="e.g., Arrays and Linked Lists"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject Code *</label>
                <input
                  type="text"
                  value={formData.code}
                  onChange={(e) => setFormData({ ...formData, code: e.target.value.toUpperCase() })}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="e.g., DS-ARRAY"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Credits *</label>
                <input
                  type="number"
                  value={formData.credits}
                  onChange={(e) => setFormData({ ...formData, credits: parseInt(e.target.value) })}
                  required
                  min="1"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Hours *</label>
                <input
                  type="number"
                  value={formData.hours}
                  onChange={(e) => setFormData({ ...formData, hours: parseInt(e.target.value) })}
                  required
                  min="1"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Description *</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Subject description..."
                />
              </div>

              <div>
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={formData.isActive}
                    onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                    className="w-5 h-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  />
                  <span className="text-sm font-medium text-gray-700">Active Subject</span>
                </label>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <button
                type="button"
                onClick={() => navigate('/admin/course/subjects')}
                className="flex-1 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition shadow-lg"
              >
                <Save size={20} />
                Create Subject
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddSubject;

