import React, { useState } from 'react';
import { Plus, Edit, Eye, Trash2, Search, Building2, MoreVertical } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { Franchise } from '../../types/Franchise';

const FranchiseList: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mock data
  const [franchises] = useState<Franchise[]>([
    {
      id: '1',
      name: 'Mumbai Central Branch',
      code: 'FR001',
      ownerName: 'Rajesh Kumar',
      ownerEmail: 'rajesh@franchise.com',
      ownerPhone: '+91 98765 43210',
      address: '123 Main Street',
      city: 'Mumbai',
      state: 'Maharashtra',
      pincode: '400001',
      country: 'India',
      status: 'active',
      registrationDate: '2024-01-15',
      totalStudents: 250,
      totalStaff: 15,
      walletBalance: 50000
    },
    {
      id: '2',
      name: 'Delhi North Branch',
      code: 'FR002',
      ownerName: 'Priya Sharma',
      ownerEmail: 'priya@franchise.com',
      ownerPhone: '+91 98765 43211',
      address: '456 Park Avenue',
      city: 'Delhi',
      state: 'Delhi',
      pincode: '110001',
      country: 'India',
      status: 'active',
      registrationDate: '2024-02-20',
      totalStudents: 180,
      totalStaff: 12,
      walletBalance: 35000
    },
    {
      id: '3',
      name: 'Bangalore South Branch',
      code: 'FR003',
      ownerName: 'Amit Patel',
      ownerEmail: 'amit@franchise.com',
      ownerPhone: '+91 98765 43212',
      address: '789 Tech Park',
      city: 'Bangalore',
      state: 'Karnataka',
      pincode: '560001',
      country: 'India',
      status: 'pending',
      registrationDate: '2024-03-10',
      totalStudents: 0,
      totalStaff: 0,
      walletBalance: 0
    }
  ]);

  const filteredFranchises = franchises.filter(franchise =>
    franchise.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    franchise.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
    franchise.ownerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    franchise.city.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <Building2 className="text-indigo-600" size={32} />
                Franchise Management
              </h1>
              <p className="text-gray-600 mt-2">All registered branches</p>
            </div>
            <button
              onClick={() => navigate('/admin/franchise/add')}
              className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition shadow-lg"
            >
              <Plus size={20} />
              Add Franchise
            </button>
          </div>

          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name, code, owner, or city..."
                className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Franchises Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFranchises.map((franchise) => (
              <div key={franchise.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{franchise.name}</h3>
                    <p className="text-sm text-gray-500">Code: {franchise.code}</p>
                  </div>
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <MoreVertical size={18} className="text-gray-600" />
                  </button>
                </div>

                <div className="space-y-2 mb-4">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Owner:</span> {franchise.ownerName}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Location:</span> {franchise.city}, {franchise.state}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Students:</span> {franchise.totalStudents || 0}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Wallet:</span> ₹{franchise.walletBalance?.toLocaleString() || 0}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(franchise.status)}`}>
                    {franchise.status.charAt(0).toUpperCase() + franchise.status.slice(1)}
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => navigate(`/admin/franchise/view/${franchise.id}`)}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
                      title="View"
                    >
                      <Eye size={18} />
                    </button>
                    <button
                      onClick={() => navigate(`/admin/franchise/edit/${franchise.id}`)}
                      className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition"
                      title="Edit"
                    >
                      <Edit size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredFranchises.length === 0 && (
            <div className="text-center py-12">
              <Building2 className="mx-auto text-gray-400" size={48} />
              <p className="mt-4 text-gray-600">No franchises found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FranchiseList;

