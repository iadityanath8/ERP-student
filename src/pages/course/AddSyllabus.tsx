import React, { useState } from 'react';
import { ArrowLeft, Save, Upload, FileText, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { Syllabus } from '../../types/Course';

const AddSyllabus: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<Omit<Syllabus, 'id' | 'uploadedBy' | 'uploadedAt'>>({
    courseId: '',
    courseName: '',
    subjectId: '',
    subjectName: '',
    title: '',
    description: '',
    fileUrl: '',
    fileName: '',
    fileSize: 0,
    fileType: '',
    isActive: true
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setFormData({
        ...formData,
        fileName: file.name,
        fileSize: file.size,
        fileType: file.type
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile) {
      alert('Please select a file');
      return;
    }
    console.log('Uploading syllabus:', formData, selectedFile);
    // Handle file upload logic here
    navigate('/admin/course/syllabus');
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={() => navigate('/admin/course/syllabus')}
              className="p-2 hover:bg-gray-100 rounded-lg transition"
            >
              <ArrowLeft size={24} className="text-gray-600" />
            </button>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <FileText className="text-indigo-600" size={32} />
                Add Syllabus
              </h1>
              <p className="text-gray-600 mt-2">File upload form</p>
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
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject (Optional)</label>
                <select
                  value={formData.subjectId}
                  onChange={(e) => {
                    const selected = e.target.options[e.target.selectedIndex];
                    setFormData({
                      ...formData,
                      subjectId: e.target.value,
                      subjectName: selected.text
                    });
                  }}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                  <option value="">Select Subject (Optional)</option>
                  <option value="1">Arrays and Linked Lists</option>
                  <option value="2">Trees and Graphs</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Syllabus Title *</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="e.g., BCA Data Structures Syllabus 2024"
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
                  placeholder="Enter syllabus description..."
                />
              </div>

              {/* File Upload */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Upload Syllabus File *</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-indigo-400 transition">
                  {selectedFile ? (
                    <div className="space-y-4">
                      <div className="flex items-center justify-center gap-3">
                        <FileText className="text-indigo-600" size={32} />
                        <div className="text-left">
                          <p className="font-semibold text-gray-900">{selectedFile.name}</p>
                          <p className="text-sm text-gray-600">{formatFileSize(selectedFile.size)}</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedFile(null);
                            setFormData({ ...formData, fileName: '', fileSize: 0, fileType: '' });
                          }}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                        >
                          <X size={20} />
                        </button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <Upload className="mx-auto text-gray-400 mb-4" size={48} />
                      <p className="text-gray-600 mb-4">Click to upload or drag and drop</p>
                      <p className="text-sm text-gray-500 mb-4">PDF, DOC, DOCX (Max 10MB)</p>
                      <input
                        type="file"
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                        id="file-upload"
                      />
                      <label
                        htmlFor="file-upload"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition cursor-pointer"
                      >
                        <Upload size={20} />
                        Choose File
                      </label>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <button
                type="button"
                onClick={() => navigate('/admin/course/syllabus')}
                className="flex-1 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition shadow-lg"
              >
                <Save size={20} />
                Upload Syllabus
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddSyllabus;

