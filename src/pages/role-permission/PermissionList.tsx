import React, { useState } from 'react';
import { Search, Shield, CheckCircle2 } from 'lucide-react';
import type { Permission } from '../../types/Role';

const PermissionList: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mock data
  const [permissions] = useState<Permission[]>([
    {
      id: 'perm1',
      name: 'View Franchise',
      module: 'Franchise Management',
      action: 'view',
      description: 'View franchise details and list'
    },
    {
      id: 'perm2',
      name: 'Create Franchise',
      module: 'Franchise Management',
      action: 'create',
      description: 'Create new franchise'
    },
    {
      id: 'perm3',
      name: 'Edit Franchise',
      module: 'Franchise Management',
      action: 'edit',
      description: 'Modify franchise information'
    },
    {
      id: 'perm4',
      name: 'View Course',
      module: 'Course Management',
      action: 'view',
      description: 'View course details'
    },
    {
      id: 'perm5',
      name: 'Create Course',
      module: 'Course Management',
      action: 'create',
      description: 'Create new courses'
    },
    {
      id: 'perm6',
      name: 'View Wallet',
      module: 'Wallet Management',
      action: 'view',
      description: 'View wallet transactions'
    },
    {
      id: 'perm7',
      name: 'Add Wallet Amount',
      module: 'Wallet Management',
      action: 'create',
      description: 'Add amount to franchise wallet'
    }
  ]);

  const filteredPermissions = permissions.filter(perm =>
    perm.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    perm.module.toLowerCase().includes(searchQuery.toLowerCase()) ||
    perm.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const groupedPermissions = filteredPermissions.reduce((acc, perm) => {
    if (!acc[perm.module]) {
      acc[perm.module] = [];
    }
    acc[perm.module].push(perm);
    return acc;
  }, {} as Record<string, Permission[]>);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <Shield className="text-indigo-600" size={32} />
              Permission List
            </h1>
            <p className="text-gray-600 mt-2">All available system permissions organized by module</p>
          </div>

          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search permissions by name, module, or description..."
                className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Permissions by Module */}
          <div className="space-y-6">
            {Object.entries(groupedPermissions).map(([module, perms]) => (
              <div key={module} className="border border-gray-200 rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="text-indigo-600" size={24} />
                  {module}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {perms.map((perm) => (
                    <div
                      key={perm.id}
                      className="p-4 border border-gray-200 rounded-lg hover:border-indigo-300 hover:shadow-md transition"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-gray-900">{perm.name}</h3>
                        <span className="px-2 py-1 text-xs font-semibold bg-indigo-100 text-indigo-800 rounded">
                          {perm.action}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{perm.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {filteredPermissions.length === 0 && (
            <div className="text-center py-12">
              <Shield className="mx-auto text-gray-400" size={48} />
              <p className="mt-4 text-gray-600">No permissions found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PermissionList;

