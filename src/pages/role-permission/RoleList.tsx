import React, { useState } from 'react';
import { Plus, Edit, Eye, Trash2, Search, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { Role } from '../../types/Role';

const RoleList: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mock data
  const [roles] = useState<Role[]>([
    {
      id: '1',
      name: 'Super Admin',
      description: 'Full system access',
      permissions: ['perm1', 'perm2', 'perm3'],
      createdAt: '2024-01-15',
      updatedAt: '2024-01-15',
      isActive: true
    },
    {
      id: '2',
      name: 'Franchise Admin',
      description: 'Franchise management access',
      permissions: ['perm4', 'perm5'],
      createdAt: '2024-01-16',
      updatedAt: '2024-01-16',
      isActive: true
    },
    {
      id: '3',
      name: 'Course Manager',
      description: 'Course and program management',
      permissions: ['perm6', 'perm7'],
      createdAt: '2024-01-17',
      updatedAt: '2024-01-17',
      isActive: true
    }
  ]);

  const filteredRoles = roles.filter(role =>
    role.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    role.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <Shield className="text-indigo-600" size={32} />
                Role Management
              </h1>
              <p className="text-gray-600 mt-2">Manage system roles and their permissions</p>
            </div>
            <button
              onClick={() => navigate('/admin/roles/add')}
              className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition shadow-lg"
            >
              <Plus size={20} />
              Add New Role
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
                placeholder="Search roles by name or description..."
                className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Roles Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Permissions</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredRoles.map((role) => (
                  <tr key={role.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-semibold text-gray-900">{role.name}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-600">{role.description}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-3 py-1 text-xs font-semibold bg-indigo-100 text-indigo-800 rounded-full">
                        {role.permissions.length} Permissions
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        role.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {role.isActive ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex gap-2">
                        <button
                          onClick={() => navigate(`/admin/roles/view/${role.id}`)}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
                          title="View Access"
                        >
                          <Eye size={18} />
                        </button>
                        <button
                          onClick={() => navigate(`/admin/roles/edit/${role.id}`)}
                          className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition"
                          title="Edit Role"
                        >
                          <Edit size={18} />
                        </button>
                        <button
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                          title="Delete Role"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredRoles.length === 0 && (
            <div className="text-center py-12">
              <Shield className="mx-auto text-gray-400" size={48} />
              <p className="mt-4 text-gray-600">No roles found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RoleList;

