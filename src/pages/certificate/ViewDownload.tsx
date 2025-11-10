import React, { useState, useEffect } from 'react';
import { ArrowLeft, Download, FileText, Eye } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import type { Certificate, Marksheet } from '../../types/Certificate';

const ViewDownload: React.FC = () => {
  const navigate = useNavigate();
  const { id, type } = useParams<{ id: string; type: 'certificate' | 'marksheet' }>();
  const [document, setDocument] = useState<Certificate | Marksheet | null>(null);

  useEffect(() => {
    if (type === 'certificate') {
      setDocument({
        id: id || '1',
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
      });
    } else {
      setDocument({
        id: id || '1',
        studentId: '1',
        studentName: 'Rajesh Kumar',
        rollNumber: 'BCA2024001',
        courseId: '1',
        courseName: 'BCA',
        batchId: '1',
        batchCode: 'BCA-2024-01',
        subjects: [
          { subjectId: '1', subjectName: 'Data Structures', marksObtained: 85, maxMarks: 100, grade: 'A' }
        ],
        totalMarks: 85,
        maxTotalMarks: 100,
        percentage: 85,
        result: 'pass',
        issueDate: '2024-11-05',
        fileUrl: '/marksheets/marksheet1.pdf',
        createdAt: '2024-11-05'
      });
    }
  }, [id, type]);

  if (!document) {
    return <div className="min-h-screen bg-gray-50 p-6 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading document...</p>
      </div>
    </div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate('/admin/certificate')}
                className="p-2 hover:bg-gray-100 rounded-lg transition"
              >
                <ArrowLeft size={24} className="text-gray-600" />
              </button>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">View / Download</h1>
                <p className="text-gray-600 mt-2">PDF export</p>
              </div>
            </div>
            <button
              onClick={() => {
                const link = document.createElement('a');
                link.href = document.fileUrl;
                link.download = `${type === 'certificate' ? 'certificate' : 'marksheet'}-${id}.pdf`;
                link.click();
              }}
              className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition"
            >
              <Download size={20} />
              Download PDF
            </button>
          </div>

          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-8 mb-6 border border-indigo-200">
            <div className="text-center mb-6">
              <FileText className="mx-auto text-indigo-600 mb-4" size={48} />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {type === 'certificate' ? 'Certificate' : 'Marksheet'}
              </h2>
              {type === 'certificate' && 'certificateNumber' in document && (
                <p className="text-gray-600">Certificate Number: {document.certificateNumber}</p>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-gray-600 mb-1">Student Name</p>
                <p className="font-bold text-gray-900">{document.studentName}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Roll Number</p>
                <p className="font-bold text-gray-900">{document.rollNumber}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Course</p>
                <p className="font-bold text-gray-900">{document.courseName}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Issue Date</p>
                <p className="font-bold text-gray-900">{new Date(document.issueDate).toLocaleDateString()}</p>
              </div>
            </div>

            {type === 'marksheet' && 'subjects' in document && (
              <div className="mt-6 border-t border-indigo-200 pt-6">
                <h3 className="font-semibold text-gray-900 mb-4">Subject-wise Marks</h3>
                <div className="space-y-2">
                  {document.subjects.map((subject, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-white rounded-lg">
                      <span className="font-semibold text-gray-900">{subject.subjectName}</span>
                      <span className="text-gray-700">
                        {subject.marksObtained} / {subject.maxMarks} ({subject.grade})
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-indigo-200 flex justify-between items-center">
                  <span className="font-bold text-gray-900">Total</span>
                  <span className="font-bold text-gray-900">
                    {document.totalMarks} / {document.maxTotalMarks} ({document.percentage}%)
                  </span>
                </div>
                <div className="mt-2">
                  <span className={`px-3 py-1 text-sm font-semibold rounded-full ${
                    document.result === 'pass' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    Result: {document.result.toUpperCase()}
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => window.open(document.fileUrl, '_blank')}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              <Eye size={20} />
              View PDF
            </button>
            <button
              onClick={() => {
                const link = document.createElement('a');
                link.href = document.fileUrl;
                link.download = `${type}-${id}.pdf`;
                link.click();
              }}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
            >
              <Download size={20} />
              Download PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDownload;



