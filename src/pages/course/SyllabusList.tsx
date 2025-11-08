import React, { useState } from 'react';
import { Plus, Download, Eye, Trash2, Search, FileText, Filter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { Syllabus } from '../../types/Course';

const SyllabusList: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCourse, setFilterCourse] = useState('all');
  
  // Mock data
  const [syllabi] = useState<Syllabus[]>([
    {
      id: '1',
      courseId: '1',
      courseName: 'Data Structures',
      subjectId: '1',
      subjectName: 'Arrays and Linked Lists',
      title: 'BCA Data Structures Syllabus 2024',
      description: 'Complete syllabus for Data Structures course',
      fileUrl: '/syllabus/ds-syllabus.pdf',
      fileName: 'ds-syllabus.pdf',
      fileSize: 2048000,
      fileType: 'application/pdf',
      uploadedBy: 'Admin User',
      uploadedAt: '2024-11-05',
      isActive: true
    },
    {
      id: '2',
      courseId: '2',
      courseName: 'Database Management',
      title: 'BCA Database Management Syllabus 2024',
      description: 'Complete syllabus for Database Management course',
      fileUrl: '/syllabus/db-syllabus.pdf',
      fileName: 'db-syllabus.pdf',
      fileSize: 1536000,
      fileType: 'application/pdf',
      uploadedBy: 'Admin User',
      uploadedAt: '2024-11-04',
      isActive: true
    }
  ]);

  const filteredSyllabi = syllabi.filter(syllabus => {
    const matchesSearch = syllabus.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      syllabus.courseName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      syllabus.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterCourse === 'all' || syllabus.courseId === filterCourse;
    return matchesSearch && matchesFilter;
  });

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <FileText className="text-indigo-600" size={32} />
                Syllabus List
              </h1>
              <p className="text-gray-600 mt-2">All uploaded syllabus</p>
            </div>
            <button
              onClick={() => navigate('/admin/course/syllabus/add')}
              className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition shadow-lg"
            >
              <Plus size={20} />
              Add Syllabus
            </button>
          </div>

          {/* Filters */}
          <div className="flex gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search syllabus by title, course, or description..."
                className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <select
                value={filterCourse}
                onChange={(e) => setFilterCourse(e.target.value)}
                className="pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option value="all">All Courses</option>
                <option value="1">Data Structures</option>
                <option value="2">Database Management</option>
              </select>
            </div>
          </div>

          {/* Syllabus Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSyllabi.map((syllabus) => (
              <div key={syllabus.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{syllabus.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{syllabus.description}</p>
                  </div>
                  <FileText className="text-indigo-600 flex-shrink-0 ml-2" size={24} />
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Course:</span>
                    <span className="font-semibold text-gray-900">{syllabus.courseName}</span>
                  </div>
                  {syllabus.subjectName && (
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Subject:</span>
                      <span className="font-semibold text-gray-900">{syllabus.subjectName}</span>
                    </div>
                  )}
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">File:</span>
                    <span className="font-semibold text-gray-900">{syllabus.fileName}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Size:</span>
                    <span className="font-semibold text-gray-900">{formatFileSize(syllabus.fileSize)}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Uploaded:</span>
                    <span className="font-semibold text-gray-900">
                      {new Date(syllabus.uploadedAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>

                <div className="flex gap-2 pt-4 border-t border-gray-200">
                  <button
                    onClick={() => window.open(syllabus.fileUrl, '_blank')}
                    className="flex-1 flex items-center justify-center gap-2 p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
                  >
                    <Eye size={18} />
                    View
                  </button>
                  <button
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = syllabus.fileUrl;
                      link.download = syllabus.fileName;
                      link.click();
                    }}
                    className="flex-1 flex items-center justify-center gap-2 p-2 text-green-600 hover:bg-green-50 rounded-lg transition"
                  >
                    <Download size={18} />
                    Download
                  </button>
                  <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition">
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredSyllabi.length === 0 && (
            <div className="text-center py-12">
              <FileText className="mx-auto text-gray-400" size={48} />
              <p className="mt-4 text-gray-600">No syllabus found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SyllabusList;

