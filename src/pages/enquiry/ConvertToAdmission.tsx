import React, { useState, useEffect } from 'react';
import { ArrowLeft, CheckCircle2, Save } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import type { Enquiry } from '../../types/Enquiry';

const ConvertToAdmission: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [enquiry, setEnquiry] = useState<Enquiry | null>(null);
  const [admissionData, setAdmissionData] = useState({
    courseId: '',
    batchId: '',
    admissionDate: new Date().toISOString().split('T')[0]
  });

  useEffect(() => {
    // Mock data
    setEnquiry({
      id: id || '1',
      studentName: 'Rajesh Kumar',
      email: 'rajesh@example.com',
      phone: '+91 98765 43210',
      courseId: '1',
      courseName: 'BCA',
      source: 'website',
      status: 'new',
      enquiryDate: '2024-11-07',
      notes: 'Interested in BCA program',
      createdAt: '2024-11-07',
      updatedAt: '2024-11-07'
    });
  }, [id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Converting to admission:', { enquiry, admissionData });
    navigate('/admin/admission');
  };

  if (!enquiry) {
    return <div className="min-h-screen bg-gray-50 p-6 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading...</p>
      </div>
    </div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={() => navigate(`/admin/enquiry/view/${id}`)}
              className="p-2 hover:bg-gray-100 rounded-lg transition"
            >
              <ArrowLeft size={24} className="text-gray-600" />
            </button>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <CheckCircle2 className="text-green-600" size={32} />
                Convert to Admission
              </h1>
              <p className="text-gray-600 mt-2">Checkbox & link</p>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
            <h2 className="font-semibold text-gray-900 mb-2">Enquiry Details</h2>
            <p className="text-gray-700"><strong>Student:</strong> {enquiry.studentName}</p>
            <p className="text-gray-700"><strong>Course:</strong> {enquiry.courseName}</p>
            <p className="text-gray-700"><strong>Email:</strong> {enquiry.email}</p>
            <p className="text-gray-700"><strong>Phone:</strong> {enquiry.phone}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Course *</label>
              <select
                value={admissionData.courseId}
                onChange={(e) => setAdmissionData({ ...admissionData, courseId: e.target.value })}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option value="">Select Course</option>
                <option value="1">BCA</option>
                <option value="2">MCA</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Batch *</label>
              <select
                value={admissionData.batchId}
                onChange={(e) => setAdmissionData({ ...admissionData, batchId: e.target.value })}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option value="">Select Batch</option>
                <option value="1">BCA-2024-01</option>
                <option value="2">BCA-2024-02</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Admission Date *</label>
              <input
                type="date"
                value={admissionData.admissionDate}
                onChange={(e) => setAdmissionData({ ...admissionData, admissionDate: e.target.value })}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>

            <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
              <input
                type="checkbox"
                required
                className="w-5 h-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <span className="text-sm text-gray-700">
                I confirm that all information is correct and ready to convert this enquiry to admission
              </span>
            </div>

            <div className="flex gap-4 pt-4">
              <button
                type="button"
                onClick={() => navigate(`/admin/enquiry/view/${id}`)}
                className="flex-1 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition shadow-lg"
              >
                <CheckCircle2 size={20} />
                Convert to Admission
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConvertToAdmission;



