import React, { useState } from 'react';
import { FileText, Video, Link as LinkIcon, Download, Eye, BookOpen } from 'lucide-react';
import type { StudentMaterial } from '../../types/StudentPanel';

const StudentMaterials: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'pdf' | 'video' | 'document' | 'link'>('all');

  // Mock data
  const [materials] = useState<StudentMaterial[]>([
    {
      id: '1',
      title: 'Algebra Basics - Chapter 1',
      subject: 'Mathematics',
      topic: 'Linear Equations',
      type: 'pdf',
      fileUrl: '/materials/algebra-ch1.pdf',
      uploadedAt: '2024-01-10T00:00:00Z',
    },
    {
      id: '2',
      title: 'Mechanics Video Lecture',
      subject: 'Physics',
      topic: 'Newton\'s Laws',
      type: 'video',
      fileUrl: '/materials/mechanics-video.mp4',
      uploadedAt: '2024-01-12T00:00:00Z',
    },
    {
      id: '3',
      title: 'Organic Chemistry Notes',
      subject: 'Chemistry',
      topic: 'Hydrocarbons',
      type: 'document',
      fileUrl: '/materials/chemistry-notes.docx',
      uploadedAt: '2024-01-08T00:00:00Z',
    },
    {
      id: '4',
      title: 'Reference Material',
      subject: 'Mathematics',
      topic: 'Calculus',
      type: 'link',
      fileUrl: 'https://example.com/calculus-reference',
      uploadedAt: '2024-01-05T00:00:00Z',
    },
  ]);

  const filteredMaterials = filter === 'all'
    ? materials
    : materials.filter(m => m.type === filter);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'pdf': return <FileText className="w-5 h-5 text-red-500" />;
      case 'video': return <Video className="w-5 h-5 text-blue-500" />;
      case 'document': return <FileText className="w-5 h-5 text-green-500" />;
      case 'link': return <LinkIcon className="w-5 h-5 text-purple-500" />;
      default: return <FileText className="w-5 h-5 text-gray-500" />;
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Study Materials</h1>

      {/* Filters */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <div className="flex gap-2">
          {(['all', 'pdf', 'video', 'document', 'link'] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-lg capitalize ${
                filter === f
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Materials List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMaterials.map((material) => (
          <div key={material.id} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-3 mb-4">
              {getTypeIcon(material.type)}
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800 mb-1">{material.title}</h3>
                <p className="text-sm text-gray-500">{material.subject} • {material.topic}</p>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
              <span>Uploaded: {new Date(material.uploadedAt).toLocaleDateString()}</span>
              <span className="capitalize px-2 py-1 bg-gray-100 rounded">{material.type}</span>
            </div>

            <div className="flex gap-2">
              {material.type === 'link' ? (
                <a
                  href={material.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  <LinkIcon className="w-4 h-4" />
                  Open Link
                </a>
              ) : (
                <>
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    <Eye className="w-4 h-4" />
                    View
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                    <Download className="w-4 h-4" />
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentMaterials;

