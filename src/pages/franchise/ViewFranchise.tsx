import React, { useState, useEffect } from 'react';
import { ArrowLeft, Edit, Building2, Mail, Phone, MapPin, User, Users, DollarSign } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import type { Franchise } from '../../types/Franchise';

const ViewFranchise: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [franchise, setFranchise] = useState<Franchise | null>(null);

  useEffect(() => {
    // Mock data - in real app, fetch from API
    setFranchise({
      id: id || '1',
      name: 'Mumbai Central Branch',
      code: 'FR001',
      ownerName: 'Rajesh Kumar',
      ownerEmail: 'rajesh@franchise.com',
      ownerPhone: '+91 98765 43210',
      address: '123 Main Street, Andheri',
      city: 'Mumbai',
      state: 'Maharashtra',
      pincode: '400001',
      country: 'India',
      status: 'active',
      registrationDate: '2024-01-15',
      totalStudents: 250,
      totalStaff: 15,
      walletBalance: 50000,
      documents: {
        photo: '/path/to/photo.jpg',
        idProof: '/path/to/id.jpg',
        signature: '/path/to/signature.jpg'
      }
    });
  }, [id]);

  if (!franchise) {
    return <div className="min-h-screen bg-gray-50 p-6 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading franchise details...</p>
      </div>
    </div>;
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'suspended': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate('/admin/franchise')}
                className="p-2 hover:bg-gray-100 rounded-lg transition"
              >
                <ArrowLeft size={24} className="text-gray-600" />
              </button>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                  <Building2 className="text-indigo-600" size={32} />
                  {franchise.name}
                </h1>
                <p className="text-gray-600 mt-2">Franchise Profile View</p>
              </div>
            </div>
            <button
              onClick={() => navigate(`/admin/franchise/edit/${id}`)}
              className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition"
            >
              <Edit size={20} />
              Edit
            </button>
          </div>

          {/* Status Badge */}
          <div className="mb-6">
            <span className={`px-4 py-2 text-sm font-semibold rounded-full ${getStatusColor(franchise.status)}`}>
              {franchise.status.charAt(0).toUpperCase() + franchise.status.slice(1)}
            </span>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-4 gap-4 mb-6">
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <div className="flex items-center gap-3">
                <Users className="text-blue-600" size={24} />
                <div>
                  <p className="text-sm text-gray-600">Total Students</p>
                  <p className="text-2xl font-bold text-gray-900">{franchise.totalStudents || 0}</p>
                </div>
              </div>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <div className="flex items-center gap-3">
                <User className="text-purple-600" size={24} />
                <div>
                  <p className="text-sm text-gray-600">Total Staff</p>
                  <p className="text-2xl font-bold text-gray-900">{franchise.totalStaff || 0}</p>
                </div>
              </div>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <div className="flex items-center gap-3">
                <DollarSign className="text-green-600" size={24} />
                <div>
                  <p className="text-sm text-gray-600">Wallet Balance</p>
                  <p className="text-2xl font-bold text-gray-900">₹{franchise.walletBalance?.toLocaleString() || 0}</p>
                </div>
              </div>
            </div>
            <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200">
              <div>
                <p className="text-sm text-gray-600">Franchise Code</p>
                <p className="text-2xl font-bold text-gray-900">{franchise.code}</p>
              </div>
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Owner Information */}
            <div className="border border-gray-200 rounded-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Owner Information</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <User className="text-gray-400" size={20} />
                  <div>
                    <p className="text-sm text-gray-600">Name</p>
                    <p className="font-semibold text-gray-900">{franchise.ownerName}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-gray-400" size={20} />
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <p className="font-semibold text-gray-900">{franchise.ownerEmail}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-gray-400" size={20} />
                  <div>
                    <p className="text-sm text-gray-600">Phone</p>
                    <p className="font-semibold text-gray-900">{franchise.ownerPhone}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Information */}
            <div className="border border-gray-200 rounded-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Location</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="text-gray-400 mt-1" size={20} />
                  <div>
                    <p className="text-sm text-gray-600">Address</p>
                    <p className="font-semibold text-gray-900">{franchise.address}</p>
                    <p className="text-gray-700">{franchise.city}, {franchise.state} - {franchise.pincode}</p>
                    <p className="text-gray-700">{franchise.country}</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Registration Date</p>
                  <p className="font-semibold text-gray-900">{new Date(franchise.registrationDate).toLocaleDateString()}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 pt-6 border-t border-gray-200 flex gap-4">
            <button
              onClick={() => navigate(`/admin/franchise/documents/${id}`)}
              className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              View Documents
            </button>
            <button
              onClick={() => navigate(`/admin/franchise/users/${id}`)}
              className="flex-1 px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition"
            >
              Manage Users
            </button>
            <button
              onClick={() => navigate(`/admin/franchise/dashboard/${id}`)}
              className="flex-1 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition"
            >
              View Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewFranchise;

