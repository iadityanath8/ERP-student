import React, { useState } from 'react';
import { Download, Eye, Search, FileText } from 'lucide-react';
import type { Certificate } from '../../types/Certificate';

const CertificateList: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const [certificates] = useState<Certificate[]>([
    {
      id: '1',
      studentId: '1',
      studentName: 'Rajesh Kumar',
      rollNumber: 'BCA2024001',
      courseId: '1',
      courseName: 'BCA',
      certificateType: 'completion',
      issueDate: '2024-11-05',
      certificateNumber: 'CERT-2024-001',
      templateId: '1',
      fileUrl: '/certificates/cert1.pdf',
      createdAt: '2024-11-05'
    }
  ]);

  const filteredCertificates = certificates.filter(cert =>
    cert.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cert.rollNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cert.certificateNumber.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Certificate List</h1>
            <p className="text-gray-600 mt-2">History</p>
          </div>

          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search certificates..."
                className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Certificate #</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Student</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Course</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Issue Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredCertificates.map((cert) => (
                  <tr key={cert.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap font-semibold text-gray-900">{cert.certificateNumber}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-semibold text-gray-900">{cert.studentName}</div>
                      <div className="text-sm text-gray-500">{cert.rollNumber}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{cert.courseName}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-3 py-1 text-xs font-semibold bg-indigo-100 text-indigo-800 rounded-full capitalize">
                        {cert.certificateType}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {new Date(cert.issueDate).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex gap-2">
                        <button
                          onClick={() => window.open(cert.fileUrl, '_blank')}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
                        >
                          <Eye size={18} />
                        </button>
                        <button
                          onClick={() => {
                            const link = document.createElement('a');
                            link.href = cert.fileUrl;
                            link.download = `${cert.certificateNumber}.pdf`;
                            link.click();
                          }}
                          className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition"
                        >
                          <Download size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateList;



