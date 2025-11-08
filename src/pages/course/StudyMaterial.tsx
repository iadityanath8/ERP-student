import React, { useState, useEffect } from 'react';
import { ArrowLeft, Upload, FileText, Video, Link as LinkIcon, Download, Eye, Trash2, Plus, BookOpen } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import type { StudyMaterial } from '../../types/Course';

const StudyMaterialPage: React.FC = () => {
  const navigate = useNavigate();
  const { topicId } = useParams<{ topicId: string }>();
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  
  // Mock data
  const [materials] = useState<StudyMaterial[]>([
    {
      id: '1',
      topicId: topicId || '1',
      topicName: 'Introduction to Arrays',
      subjectId: '1',
      subjectName: 'Arrays and Linked Lists',
      title: 'Array Basics PDF',
      description: 'Complete guide to array data structure',
      fileUrl: '/materials/array-basics.pdf',
      fileName: 'array-basics.pdf',
      fileSize: 1024000,
      fileType: 'application/pdf',
      materialType: 'pdf',
      uploadedBy: 'Admin User',
      uploadedAt: '2024-11-05',
      isActive: true
    },
    {
      id: '2',
      topicId: topicId || '1',
      topicName: 'Introduction to Arrays',
      subjectId: '1',
      subjectName: 'Arrays and Linked Lists',
      title: 'Array Video Tutorial',
      description: 'Video explanation of arrays',
      fileUrl: 'https://youtube.com/watch?v=example',
      fileName: 'array-tutorial.mp4',
      fileSize: 0,
      fileType: 'video/mp4',
      materialType: 'video',
      uploadedBy: 'Admin User',
      uploadedAt: '2024-11-05',
      isActive: true
    }
  ]);

  const [formData, setFormData] = useState<Omit<StudyMaterial, 'id' | 'uploadedBy' | 'uploadedAt'>>({
    topicId: topicId || '',
    topicName: 'Introduction to Arrays',
    subjectId: '1',
    subjectName: 'Arrays and Linked Lists',
    title: '',
    description: '',
    fileUrl: '',
    fileName: '',
    fileSize: 0,
    fileType: '',
    materialType: 'pdf',
    isActive: true
  });

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
    if (!selectedFile && formData.materialType !== 'link') {
      alert('Please select a file or provide a link');
      return;
    }
    console.log('Uploading study material:', formData, selectedFile);
    setShowUploadForm(false);
    // Handle upload logic
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return 'N/A';
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
  };

  const getMaterialIcon = (type: string) => {
    switch (type) {
      case 'pdf':
      case 'document':
        return <FileText className="text-red-600" size={24} />;
      case 'video':
        return <Video className="text-blue-600" size={24} />;
      case 'link':
        return <LinkIcon className="text-green-600" size={24} />;
      default:
        return <FileText className="text-gray-600" size={24} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate('/admin/course/topics')}
                className="p-2 hover:bg-gray-100 rounded-lg transition"
              >
                <ArrowLeft size={24} className="text-gray-600" />
              </button>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                  <BookOpen className="text-indigo-600" size={32} />
                  Study Material
                </h1>
                <p className="text-gray-600 mt-2">Form for topics - Upload/view files</p>
              </div>
            </div>
            <button
              onClick={() => setShowUploadForm(!showUploadForm)}
              className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition shadow-lg"
            >
              <Plus size={20} />
              {showUploadForm ? 'Cancel' : 'Add Material'}
            </button>
          </div>

          {/* Upload Form */}
          {showUploadForm && (
            <div className="mb-6 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Upload Study Material</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Material Type *</label>
                    <select
                      value={formData.materialType}
                      onChange={(e) => setFormData({ ...formData, materialType: e.target.value as any })}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    >
                      <option value="pdf">PDF Document</option>
                      <option value="document">Word Document</option>
                      <option value="video">Video</option>
                      <option value="link">External Link</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Title *</label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="e.g., Array Basics PDF"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Description *</label>
                    <textarea
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      required
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="Enter material description..."
                    />
                  </div>

                  {formData.materialType === 'link' ? (
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Link URL *</label>
                      <input
                        type="url"
                        value={formData.fileUrl}
                        onChange={(e) => setFormData({ ...formData, fileUrl: e.target.value })}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        placeholder="https://example.com"
                      />
                    </div>
                  ) : (
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Upload File *</label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-indigo-400 transition">
                        {selectedFile ? (
                          <div className="flex items-center justify-center gap-3">
                            {getMaterialIcon(formData.materialType)}
                            <div className="text-left">
                              <p className="font-semibold text-gray-900">{selectedFile.name}</p>
                              <p className="text-sm text-gray-600">{formatFileSize(selectedFile.size)}</p>
                            </div>
                          </div>
                        ) : (
                          <>
                            <Upload className="mx-auto text-gray-400 mb-4" size={48} />
                            <p className="text-gray-600 mb-4">Click to upload or drag and drop</p>
                            <input
                              type="file"
                              onChange={handleFileChange}
                              accept=".pdf,.doc,.docx,.mp4,.mp3,.zip"
                              className="hidden"
                              id="material-upload"
                            />
                            <label
                              htmlFor="material-upload"
                              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition cursor-pointer"
                            >
                              <Upload size={20} />
                              Choose File
                            </label>
                          </>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => {
                      setShowUploadForm(false);
                      setSelectedFile(null);
                      setFormData({
                        ...formData,
                        title: '',
                        description: '',
                        fileUrl: '',
                        fileName: '',
                        fileSize: 0,
                        fileType: ''
                      });
                    }}
                    className="flex-1 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition shadow-lg"
                  >
                    <Upload size={20} />
                    Upload Material
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Materials List */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Study Materials</h2>
            {materials.map((material) => (
              <div
                key={material.id}
                className="flex items-center justify-between p-6 border border-gray-200 rounded-lg hover:shadow-md transition"
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className="flex-shrink-0">
                    {getMaterialIcon(material.materialType)}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">{material.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{material.description}</p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>Type: {material.materialType.toUpperCase()}</span>
                      {material.fileSize > 0 && <span>Size: {formatFileSize(material.fileSize)}</span>}
                      <span>Uploaded: {new Date(material.uploadedAt).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  {material.materialType === 'link' ? (
                    <a
                      href={material.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
                      title="Open Link"
                    >
                      <LinkIcon size={18} />
                    </a>
                  ) : (
                    <>
                      <button
                        onClick={() => window.open(material.fileUrl, '_blank')}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
                        title="View"
                      >
                        <Eye size={18} />
                      </button>
                      <button
                        onClick={() => {
                          const link = document.createElement('a');
                          link.href = material.fileUrl;
                          link.download = material.fileName;
                          link.click();
                        }}
                        className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition"
                        title="Download"
                      >
                        <Download size={18} />
                      </button>
                    </>
                  )}
                  <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition" title="Delete">
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {materials.length === 0 && !showUploadForm && (
            <div className="text-center py-12">
              <BookOpen className="mx-auto text-gray-400" size={48} />
              <p className="mt-4 text-gray-600">No study materials uploaded yet</p>
              <button
                onClick={() => setShowUploadForm(true)}
                className="mt-4 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition"
              >
                Upload First Material
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudyMaterialPage;

