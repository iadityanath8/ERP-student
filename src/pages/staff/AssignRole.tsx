import React, { useState, useEffect } from 'react';
import { ArrowLeft, Save, Shield } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

const AssignRole: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [selectedRole, setSelectedRole] = useState('');

  const [roles] = useState([
    { id: '1', name: 'Teacher', description: 'Teaching staff role' },
    { id: '2', name: 'Manager', description: 'Management role' },
    { id: '3', name: 'Admin', description: 'Administrative role' }
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Assigning role:', selectedRole, 'to staff:', id);
    navigate(`/admin/staff/view/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={() => navigate(`/admin/staff/view/${id}`)}
              className="p-2 hover:bg-gray-100 rounded-lg transition"
            >
              <ArrowLeft size={24} className="text-gray-600" />
            </button>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <Shield className="text-indigo-600" size={32} />
                Assign Role
              </h1>
              <p className="text-gray-600 mt-2">Link to permissions</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Select Role *</label>
              <div className="space-y-3">
                {roles.map((role) => (
                  <label
                    key={role.id}
                    className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                      selectedRole === role.id
                        ? 'border-indigo-500 bg-indigo-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="role"
                      value={role.id}
                      checked={selectedRole === role.id}
                      onChange={(e) => setSelectedRole(e.target.value)}
                      className="mt-1 w-5 h-5 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                    />
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">{role.name}</p>
                      <p className="text-sm text-gray-600">{role.description}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-900">
                <strong>Note:</strong> Assigning a role will grant the staff member all permissions associated with that role.
              </p>
            </div>

            <div className="flex gap-4 pt-4">
              <button
                type="button"
                onClick={() => navigate(`/admin/staff/view/${id}`)}
                className="flex-1 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={!selectedRole}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Save size={20} />
                Assign Role
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AssignRole;



