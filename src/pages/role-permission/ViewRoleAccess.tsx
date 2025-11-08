import React, { useState, useEffect } from 'react';
import { ArrowLeft, Shield, CheckCircle2, XCircle } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import type { RoleAccess, Permission } from '../../types/Role';

const ViewRoleAccess: React.FC = () => {
  const navigate = useNavigate();
  const { roleId } = useParams<{ roleId: string }>();
  
  const [roleAccess, setRoleAccess] = useState<RoleAccess | null>(null);

  useEffect(() => {
    // Mock data - in real app, fetch from API
    setRoleAccess({
      roleId: roleId || '1',
      roleName: 'Franchise Admin',
      modules: [
        {
          module: 'Franchise Management',
          permissions: [
            { id: 'perm1', name: 'View Franchise', module: 'Franchise Management', action: 'view', description: 'View franchise details' },
            { id: 'perm2', name: 'Create Franchise', module: 'Franchise Management', action: 'create', description: 'Create new franchise' },
            { id: 'perm3', name: 'Edit Franchise', module: 'Franchise Management', action: 'edit', description: 'Modify franchise' }
          ]
        },
        {
          module: 'Course Management',
          permissions: [
            { id: 'perm4', name: 'View Course', module: 'Course Management', action: 'view', description: 'View course details' },
            { id: 'perm5', name: 'Create Course', module: 'Course Management', action: 'create', description: 'Create new courses' }
          ]
        }
      ]
    });
  }, [roleId]);

  if (!roleAccess) {
    return <div className="min-h-screen bg-gray-50 p-6 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading role access...</p>
      </div>
    </div>;
  }

  const totalPermissions = roleAccess.modules.reduce((sum, mod) => sum + mod.permissions.length, 0);

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
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <Shield className="text-indigo-600" size={32} />
                Role Access Preview
              </h1>
              <p className="text-gray-600 mt-2">
                Preview allowed actions for role: <span className="font-semibold text-indigo-600">{roleAccess.roleName}</span>
              </p>
            </div>
          </div>

          {/* Summary Card */}
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 mb-6 border border-indigo-200">
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-gray-600">Role Name</p>
                <p className="text-xl font-bold text-gray-900">{roleAccess.roleName}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Modules</p>
                <p className="text-xl font-bold text-gray-900">{roleAccess.modules.length}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Permissions</p>
                <p className="text-xl font-bold text-gray-900">{totalPermissions}</p>
              </div>
            </div>
          </div>

          {/* Permissions by Module */}
          <div className="space-y-6">
            {roleAccess.modules.map((moduleData, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="text-indigo-600" size={24} />
                  {moduleData.module}
                  <span className="ml-auto text-sm font-normal text-gray-500">
                    {moduleData.permissions.length} permission(s)
                  </span>
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {moduleData.permissions.map((perm) => (
                    <div
                      key={perm.id}
                      className="p-4 bg-green-50 border border-green-200 rounded-lg"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="text-green-600" size={18} />
                          <span className="font-semibold text-gray-900">{perm.name}</span>
                        </div>
                        <span className="px-2 py-1 text-xs font-semibold bg-green-100 text-green-800 rounded">
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

          {/* Action Button */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <button
              onClick={() => navigate(`/admin/roles/assign/${roleId}`)}
              className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition shadow-lg"
            >
              Modify Permissions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewRoleAccess;

