import React, { useState } from 'react';
import { ArrowLeft, Save, Video, Link as LinkIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { LiveClass } from '../../types/LiveClass';

const AddYouTubeClass: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<Omit<LiveClass, 'id' | 'createdAt' | 'updatedAt'>>({
    title: '',
    description: '',
    batchId: '',
    batchCode: '',
    courseId: '',
    courseName: '',
    subjectId: '',
    subjectName: '',
    classType: 'youtube',
    meetingLink: '',
    startTime: '',
    endTime: '',
    duration: 0,
    instructorId: '',
    instructorName: '',
    status: 'scheduled'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Creating YouTube class:', formData);
    navigate('/admin/live-class');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={() => navigate('/admin/live-class')}
              className="p-2 hover:bg-gray-100 rounded-lg transition"
            >
              <ArrowLeft size={24} className="text-gray-600" />
            </button>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <Video className="text-red-600" size={32} />
                Add YouTube Class
              </h1>
              <p className="text-gray-600 mt-2">Link, batch, subject</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Class Title *</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="e.g., Data Structures - Arrays"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Batch *</label>
                <select
                  value={formData.batchId}
                  onChange={(e) => {
                    const selected = e.target.options[e.target.selectedIndex];
                    setFormData({ ...formData, batchId: e.target.value, batchCode: selected.text });
                  }}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                  <option value="">Select Batch</option>
                  <option value="1">BCA-2024-01</option>
                  <option value="2">BCA-2024-02</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <select
                  value={formData.subjectId}
                  onChange={(e) => {
                    const selected = e.target.options[e.target.selectedIndex];
                    setFormData({ ...formData, subjectId: e.target.value, subjectName: selected.text });
                  }}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                  <option value="">Select Subject (Optional)</option>
                  <option value="1">Data Structures</option>
                  <option value="2">Database Management</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">YouTube Link *</label>
                <div className="relative">
                  <LinkIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="url"
                    value={formData.meetingLink}
                    onChange={(e) => setFormData({ ...formData, meetingLink: e.target.value })}
                    required
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="https://www.youtube.com/watch?v=..."
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Start Time *</label>
                <input
                  type="datetime-local"
                  value={formData.startTime}
                  onChange={(e) => setFormData({ ...formData, startTime: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">End Time *</label>
                <input
                  type="datetime-local"
                  value={formData.endTime}
                  onChange={(e) => {
                    setFormData({ ...formData, endTime: e.target.value });
                    if (formData.startTime) {
                      const start = new Date(formData.startTime);
                      const end = new Date(e.target.value);
                      const duration = Math.round((end.getTime() - start.getTime()) / (1000 * 60));
                      setFormData(prev => ({ ...prev, endTime: e.target.value, duration }));
                    }
                  }}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Class description..."
                />
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <button
                type="button"
                onClick={() => navigate('/admin/live-class')}
                className="flex-1 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition shadow-lg"
              >
                <Save size={20} />
                Create YouTube Class
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddYouTubeClass;



