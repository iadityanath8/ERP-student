import React, { useState, useEffect } from 'react';
import { ArrowLeft, Plus, Edit, Trash2, Users, Search } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import type { FranchiseUser } from '../../types/Franchise';

const ManageFranchiseUser: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mock data
  const [users] = useState<FranchiseUser[]>([
    {
      id: '1',
      franchiseId: id || '1',
      name: 'John Manager',
      email: 'john@franchise.com',
      phone: '+91 98765 43210',
      role: 'manager',
      isActive: true,
      createdAt: '2024-01-15'
    },
    {
      id: '2',
      franchiseId: id || '1',
      name: 'Sarah Staff',
      email: 'sarah@franchise.com',
      phone: '+91 98765 43211',
      role: 'staff',
      isActive: true,
      createdAt: '2024-01-20'
    }
  ]);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate(`/admin/franchise/view/${id}`)}
                className="p-2 hover:bg-gray-100 rounded-lg transition"
              >
                <ArrowLeft size={24} className="text-gray-600" />
              </button>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                  <Users className="text-indigo-600" size={32} />
                  Manage Franchise Users
                </h1>
                <p className="text-gray-600 mt-2">List/add staff in that branch</p>
              </div>
            </div>
            <button
              className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition shadow-lg"
            >
              <Plus size={20} />
              Add User
            </button>
          </div>

          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search users..."
                className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Phone</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Role</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap font-semibold text-gray-900">{user.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-600">{user.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-600">{user.phone}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-3 py-1 text-xs font-semibold bg-indigo-100 text-indigo-800 rounded-full">
                        {user.role}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        user.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {user.isActive ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex gap-2">
                        <button className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg">
                          <Edit size={18} />
                        </button>
                        <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                          <Trash2 size={18} />
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

export default ManageFranchiseUser;

