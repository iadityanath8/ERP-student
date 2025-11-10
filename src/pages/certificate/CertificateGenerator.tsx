import React, { useState } from 'react';
import { ArrowLeft, Download, FileText, Hash } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { Certificate } from '../../types/Certificate';

const CertificateGenerator: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    studentId: '',
    studentName: '',
    courseId: '',
    courseName: '',
    certificateType: 'completion',
    issueDate: new Date().toISOString().split('T')[0]
  });

  const handleGenerate = () => {
    console.log('Generating certificate:', formData);
    // In real app, generate PDF certificate
    alert('Certificate generated successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={() => navigate('/admin/certificate')}
              className="p-2 hover:bg-gray-100 rounded-lg transition"
            >
              <ArrowLeft size={24} className="text-gray-600" />
            </button>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <FileText className="text-indigo-600" size={32} />
                Certificate Generator
              </h1>
              <p className="text-gray-600 mt-2">Input student ID</p>
            </div>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); handleGenerate(); }} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Student ID / Roll Number *</label>
                <div className="relative">
                  <Hash className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    value={formData.studentId}
                    onChange={(e) => setFormData({ ...formData, studentId: e.target.value })}
                    required
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Enter student ID or roll number"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Certificate Type *</label>
                <select
                  value={formData.certificateType}
                  onChange={(e) => setFormData({ ...formData, certificateType: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                  <option value="completion">Course Completion</option>
                  <option value="merit">Merit Certificate</option>
                  <option value="participation">Participation Certificate</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Issue Date *</label>
                <input
                  type="date"
                  value={formData.issueDate}
                  onChange={(e) => setFormData({ ...formData, issueDate: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-900">
                <strong>Note:</strong> Certificate will be auto-generated with student details. Make sure the student has completed the course.
              </p>
            </div>

            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => navigate('/admin/certificate')}
                className="flex-1 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition shadow-lg"
              >
                <Download size={20} />
                Generate Certificate
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CertificateGenerator;



