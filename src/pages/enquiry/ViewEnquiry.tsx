import React, { useState, useEffect } from 'react';
import { ArrowLeft, Edit, Calendar, Phone, Mail, MapPin, User, CheckCircle2 } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import type { Enquiry } from '../../types/Enquiry';

const ViewEnquiry: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [enquiry, setEnquiry] = useState<Enquiry | null>(null);

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
      address: '123 Main St',
      city: 'Mumbai',
      state: 'Maharashtra',
      pincode: '400001',
      createdAt: '2024-11-07',
      updatedAt: '2024-11-07'
    });
  }, [id]);

  if (!enquiry) {
    return <div className="min-h-screen bg-gray-50 p-6 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading enquiry details...</p>
      </div>
    </div>;
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800';
      case 'contacted': return 'bg-yellow-100 text-yellow-800';
      case 'follow-up': return 'bg-purple-100 text-purple-800';
      case 'converted': return 'bg-green-100 text-green-800';
      default: return 'bg-red-100 text-red-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate('/admin/enquiry')}
                className="p-2 hover:bg-gray-100 rounded-lg transition"
              >
                <ArrowLeft size={24} className="text-gray-600" />
              </button>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">View Enquiry</h1>
                <p className="text-gray-600 mt-2">Show all details</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => navigate(`/admin/enquiry/edit/${id}`)}
                className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition"
              >
                <Edit size={18} />
                Edit
              </button>
              <button
                onClick={() => navigate(`/admin/enquiry/convert/${id}`)}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
              >
                <CheckCircle2 size={18} />
                Convert to Admission
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <div className="flex items-center gap-3 mb-2">
                  <User className="text-blue-600" size={24} />
                  <span className="text-sm text-gray-600">Student Name</span>
                </div>
                <p className="text-2xl font-bold text-gray-900">{enquiry.studentName}</p>
              </div>
              <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="text-green-600" size={24} />
                  <span className="text-sm text-gray-600">Enquiry Date</span>
                </div>
                <p className="text-2xl font-bold text-gray-900">{new Date(enquiry.enquiryDate).toLocaleDateString()}</p>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="text-gray-400" size={20} />
                  <span className="text-gray-900">{enquiry.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-gray-400" size={20} />
                  <span className="text-gray-900">{enquiry.phone}</span>
                </div>
                {enquiry.address && (
                  <div className="flex items-start gap-3">
                    <MapPin className="text-gray-400 mt-1" size={20} />
                    <div>
                      <p className="text-gray-900">{enquiry.address}</p>
                      <p className="text-gray-600">{enquiry.city}, {enquiry.state} - {enquiry.pincode}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Course</h3>
                <p className="text-gray-600">{enquiry.courseName}</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Source</h3>
                <p className="text-gray-600 capitalize">{enquiry.source}</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Status</h3>
                <span className={`px-3 py-1 text-sm font-semibold rounded-full ${getStatusColor(enquiry.status)}`}>
                  {enquiry.status}
                </span>
              </div>
            </div>

            {enquiry.notes && (
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Notes</h3>
                <p className="text-gray-600">{enquiry.notes}</p>
              </div>
            )}

            <div className="flex gap-4 pt-4">
              <button
                onClick={() => navigate(`/admin/enquiry/followup/${id}`)}
                className="flex-1 px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition"
              >
                View Follow-ups
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewEnquiry;



