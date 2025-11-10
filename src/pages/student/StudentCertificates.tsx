import React, { useState } from 'react';
import { Award, Download, Eye, FileText } from 'lucide-react';
import type { StudentCertificate } from '../../types/StudentPanel';

const StudentCertificates: React.FC = () => {
  // Mock data
  const [certificates] = useState<StudentCertificate[]>([
    {
      id: '1',
      courseName: 'Mathematics Fundamentals',
      certificateType: 'completion',
      issueDate: '2024-01-15',
      certificateNumber: 'CERT-2024-001',
      fileUrl: '/certificates/cert-001.pdf',
    },
    {
      id: '2',
      courseName: 'Physics Advanced',
      certificateType: 'merit',
      issueDate: '2024-01-10',
      certificateNumber: 'CERT-2024-002',
      fileUrl: '/certificates/cert-002.pdf',
    },
  ]);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">My Certificates</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((certificate) => (
          <div key={certificate.id} className="bg-white rounded-lg shadow p-6">
            <div className="text-center mb-4">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="w-10 h-10 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{certificate.courseName}</h3>
              <p className="text-sm text-gray-500 capitalize">{certificate.certificateType} Certificate</p>
            </div>

            <div className="space-y-2 text-sm text-gray-600 mb-4">
              <div className="flex justify-between">
                <span>Certificate No:</span>
                <span className="font-medium text-gray-800">{certificate.certificateNumber}</span>
              </div>
              <div className="flex justify-between">
                <span>Issue Date:</span>
                <span className="font-medium text-gray-800">
                  {new Date(certificate.issueDate).toLocaleDateString()}
                </span>
              </div>
            </div>

            <div className="flex gap-2">
              <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                <Eye className="w-4 h-4" />
                View
              </button>
              <button className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Download className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentCertificates;

