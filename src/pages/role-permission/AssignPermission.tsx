import React, { useState, useEffect } from 'react';
import { ArrowLeft, Save, Shield, CheckCircle2 } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import type { Permission } from '../../types/Role';

const AssignPermission: React.FC = () => {
  const navigate = useNavigate();
  const { roleId } = useParams<{ roleId: string }>();
  
  // Mock permissions
  const [allPermissions] = useState<Permission[]>([
    { id: 'perm1', name: 'View Franchise', module: 'Franchise Management', action: 'view', description: 'View franchise details' },
    { id: 'perm2', name: 'Create Franchise', module: 'Franchise Management', action: 'create', description: 'Create new franchise' },
    { id: 'perm3', name: 'Edit Franchise', module: 'Franchise Management', action: 'edit', description: 'Modify franchise' },
    { id: 'perm4', name: 'View Course', module: 'Course Management', action: 'view', description: 'View course details' },
    { id: 'perm5', name: 'Create Course', module: 'Course Management', action: 'create', description: 'Create new courses' },
    { id: 'perm6', name: 'View Wallet', module: 'Wallet Management', action: 'view', description: 'View wallet transactions' },
    { id: 'perm7', name: 'Add Wallet Amount', module: 'Wallet Management', action: 'create', description: 'Add amount to wallet' }
  ]);

  const [selectedPermissions, setSelectedPermissions] = useState<string[]>([]);
  const roleName = 'Franchise Admin'; // In real app, fetch role name

  useEffect(() => {
    // Load existing permissions for this role
    setSelectedPermissions(['perm1', 'perm2']);
  }, [roleId]);

  const togglePermission = (permId: string) => {
    setSelectedPermissions(prev =>
      prev.includes(permId)
        ? prev.filter(id => id !== permId)
        : [...prev, permId]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Assigning permissions:', selectedPermissions);
    navigate('/admin/roles');
  };

  const groupedPermissions = allPermissions.reduce((acc, perm) => {
    if (!acc[perm.module]) {
      acc[perm.module] = [];
    }
    acc[perm.module].push(perm);
    return acc;
  }, {} as Record<string, Permission[]>);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6">
          {/* Header */}
          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={() => navigate('/admin/roles')}
              className="p-2 hover:bg-gray-100 rounded-lg transition"
            >
              <ArrowLeft size={24} className="text-gray-600" />
            </button>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <Shield className="text-indigo-600" size={32} />
                Assign Permissions
              </h1>
              <p className="text-gray-600 mt-2">
                Map modules and permissions to role: <span className="font-semibold">{roleName}</span>
              </p>
            </div>
          </div>

          {/* Permissions Selection */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {Object.entries(groupedPermissions).map(([module, perms]) => (
              <div key={module} className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                    <CheckCircle2 className="text-indigo-600" size={24} />
                    {module}
                  </h2>
                  <button
                    type="button"
                    onClick={() => {
                      const allModulePerms = perms.map(p => p.id);
                      const allSelected = allModulePerms.every(id => selectedPermissions.includes(id));
                      if (allSelected) {
                        setSelectedPermissions(prev => prev.filter(id => !allModulePerms.includes(id)));
                      } else {
                        setSelectedPermissions(prev => [...new Set([...prev, ...allModulePerms])]);
                      }
                    }}
                    className="text-sm text-indigo-600 hover:text-indigo-700 font-medium"
                  >
                    {perms.every(p => selectedPermissions.includes(p.id)) ? 'Deselect All' : 'Select All'}
                  </button>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {perms.map((perm) => (
                    <label
                      key={perm.id}
                      className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                        selectedPermissions.includes(perm.id)
                          ? 'border-indigo-500 bg-indigo-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={selectedPermissions.includes(perm.id)}
                        onChange={() => togglePermission(perm.id)}
                        className="mt-1 w-5 h-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-semibold text-gray-900">{perm.name}</span>
                          <span className="px-2 py-1 text-xs font-semibold bg-gray-100 text-gray-700 rounded">
                            {perm.action}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">{perm.description}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            ))}

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4 border-t border-gray-200">
              <button
                type="button"
                onClick={() => navigate('/admin/roles')}
                className="flex-1 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition shadow-lg"
              >
                <Save size={20} />
                Save Permissions ({selectedPermissions.length} selected)
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AssignPermission;

