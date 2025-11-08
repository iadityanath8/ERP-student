import React, { useState, useEffect } from 'react';
import { ArrowLeft, Edit, User, Mail, Phone, Calendar, FileText, Download } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import type { Admission } from '../../types/Admission';

const ViewAdmission: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [admission, setAdmission] = useState<Admission | null>(null);

  useEffect(() => {
    // Mock data
    setAdmission({
      id: id || '1',
      studentId: '1',
      rollNumber: 'BCA2024001',
      firstName: 'Rajesh',
      lastName: 'Kumar',
      email: 'rajesh@example.com',
      phone: '+91 98765 43210',
      courseId: '1',
      courseName: 'BCA',
      batchId: '1',
      batchCode: 'BCA-2024-01',
      admissionDate: '2024-11-01',
      status: 'approved',
      username: 'rajesh.kumar',
      address: '123 Main St',
      city: 'Mumbai',
      state: 'Maharashtra',
      pincode: '400001',
      dateOfBirth: '2000-01-15',
      gender: 'male',
      documents: {
        photo: '/docs/photo.jpg',
        idProof: '/docs/id.jpg',
        signature: '/docs/signature.jpg'
      },
      createdAt: '2024-11-01',
      updatedAt: '2024-11-01'
    });
  }, [id]);

  if (!admission) {
    return <div className="min-h-screen bg-gray-50 p-6 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading admission details...</p>
      </div>
    </div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate('/admin/admission')}
                className="p-2 hover:bg-gray-100 rounded-lg transition"
              >
                <ArrowLeft size={24} className="text-gray-600" />
              </button>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">View Admission</h1>
                <p className="text-gray-600 mt-2">Details with documents</p>
              </div>
            </div>
            <button
              onClick={() => navigate(`/admin/admission/edit/${id}`)}
              className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition"
            >
              <Edit size={20} />
              Edit
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <div className="flex items-center gap-3 mb-2">
                <User className="text-blue-600" size={24} />
                <span className="text-sm text-gray-600">Roll Number</span>
              </div>
              <p className="text-2xl font-bold text-gray-900">{admission.rollNumber}</p>
            </div>
            <div className="bg-green-50 rounded-lg p-6 border border-green-200">
              <div className="flex items-center gap-3 mb-2">
                <Calendar className="text-green-600" size={24} />
                <span className="text-sm text-gray-600">Admission Date</span>
              </div>
              <p className="text-2xl font-bold text-gray-900">{new Date(admission.admissionDate).toLocaleDateString()}</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Personal Information</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Name</p>
                  <p className="font-semibold text-gray-900">{admission.firstName} {admission.lastName}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="font-semibold text-gray-900">{admission.email}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Phone</p>
                  <p className="font-semibold text-gray-900">{admission.phone}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Date of Birth</p>
                  <p className="font-semibold text-gray-900">{new Date(admission.dateOfBirth).toLocaleDateString()}</p>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Course Information</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Course</p>
                  <p className="font-semibold text-gray-900">{admission.courseName}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Batch</p>
                  <p className="font-semibold text-gray-900">{admission.batchCode}</p>
                </div>
                {admission.username && (
                  <div>
                    <p className="text-sm text-gray-600">Username</p>
                    <p className="font-semibold text-gray-900">{admission.username}</p>
                  </div>
                )}
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-900">Documents</h2>
                <button
                  onClick={() => navigate(`/admin/admission/documents/${id}`)}
                  className="text-indigo-600 hover:text-indigo-700 font-medium"
                >
                  Upload Documents
                </button>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {admission.documents.photo && (
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <FileText className="text-indigo-600 mb-2" size={24} />
                    <p className="text-sm font-semibold">Photo</p>
                    <button className="text-xs text-indigo-600 mt-1">View</button>
                  </div>
                )}
                {admission.documents.idProof && (
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <FileText className="text-indigo-600 mb-2" size={24} />
                    <p className="text-sm font-semibold">ID Proof</p>
                    <button className="text-xs text-indigo-600 mt-1">View</button>
                  </div>
                )}
                {admission.documents.signature && (
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <FileText className="text-indigo-600 mb-2" size={24} />
                    <p className="text-sm font-semibold">Signature</p>
                    <button className="text-xs text-indigo-600 mt-1">View</button>
                  </div>
                )}
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => navigate(`/admin/admission/roll-number/${id}`)}
                className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Generate Roll Number
              </button>
              <button
                onClick={() => navigate(`/admin/admission/credentials/${id}`)}
                className="flex-1 px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
              >
                Assign Credentials
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAdmission;



