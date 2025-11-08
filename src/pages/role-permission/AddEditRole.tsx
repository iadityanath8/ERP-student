import React, { useState, useEffect } from 'react';
import { ArrowLeft, Save, Shield } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import type { Role } from '../../types/Role';

const AddEditRole: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id?: string }>();
  const isEdit = !!id;

  const [formData, setFormData] = useState<Omit<Role, 'id' | 'createdAt' | 'updatedAt'>>({
    name: '',
    description: '',
    permissions: [],
    isActive: true
  });

  useEffect(() => {
    if (isEdit) {
      // Load role data - in real app, fetch from API
      setFormData({
        name: 'Franchise Admin',
        description: 'Franchise management access',
        permissions: ['perm1', 'perm2'],
        isActive: true
      });
    }
  }, [id, isEdit]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle save logic
    console.log('Saving role:', formData);
    navigate('/admin/roles');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
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
                {isEdit ? 'Edit Role' : 'Add New Role'}
              </h1>
              <p className="text-gray-600 mt-2">
                {isEdit ? 'Modify role details and permissions' : 'Create a new role for the system'}
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Role Name *
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="e.g., Franchise Admin"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description *
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                required
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Describe the role's purpose and responsibilities..."
              />
            </div>

            <div>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={formData.isActive}
                  onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                  className="w-5 h-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                />
                <span className="text-sm font-medium text-gray-700">Active Role</span>
              </label>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-600 mb-4">
                Permissions will be assigned on the next step. Click "Assign Permissions" after saving.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
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
                {isEdit ? 'Update Role' : 'Create Role'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEditRole;

