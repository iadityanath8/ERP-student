import React, { useState } from 'react';
import { ArrowLeft, Save, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { Topic } from '../../types/Course';

const AddTopic: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<Omit<Topic, 'id' | 'createdAt' | 'updatedAt'>>({
    subjectId: '',
    subjectName: '',
    courseId: '',
    courseName: '',
    title: '',
    description: '',
    order: 1,
    isActive: true
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Creating topic:', formData);
    navigate('/admin/course/topics');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={() => navigate('/admin/course/topics')}
              className="p-2 hover:bg-gray-100 rounded-lg transition"
            >
              <ArrowLeft size={24} className="text-gray-600" />
            </button>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <BookOpen className="text-indigo-600" size={32} />
                Add Topic
              </h1>
              <p className="text-gray-600 mt-2">Add new topic under subject</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                <select
                  value={formData.subjectId}
                  onChange={(e) => {
                    const selected = e.target.options[e.target.selectedIndex];
                    const courseInfo = selected.getAttribute('data-course');
                    setFormData({
                      ...formData,
                      subjectId: e.target.value,
                      subjectName: selected.text,
                      courseId: courseInfo?.split('|')[0] || '',
                      courseName: courseInfo?.split('|')[1] || ''
                    });
                  }}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                  <option value="">Select Subject</option>
                  <option value="1" data-course="1|Data Structures">Arrays and Linked Lists</option>
                  <option value="2" data-course="1|Data Structures">Trees and Graphs</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Topic Title *</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="e.g., Introduction to Arrays"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Order *</label>
                <input
                  type="number"
                  value={formData.order}
                  onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) })}
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
                  placeholder="Enter topic description..."
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
                  <span className="text-sm font-medium text-gray-700">Active Topic</span>
                </label>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <button
                type="button"
                onClick={() => navigate('/admin/course/topics')}
                className="flex-1 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition shadow-lg"
              >
                <Save size={20} />
                Create Topic
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTopic;

