import React, { useState, useEffect } from 'react';
import { ArrowLeft, Save, Building2 } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import AddFranchise from './AddFranchise';

const UpdateFranchise: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  
  // In real app, fetch franchise data by id
  // For now, reuse AddFranchise component with edit mode
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={() => navigate('/admin/franchise')}
              className="p-2 hover:bg-gray-100 rounded-lg transition"
            >
              <ArrowLeft size={24} className="text-gray-600" />
            </button>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <Building2 className="text-indigo-600" size={32} />
                Update Franchise
              </h1>
              <p className="text-gray-600 mt-2">Modify existing franchise profile</p>
            </div>
          </div>
          <p className="text-gray-600">Edit form for franchise ID: {id}</p>
        </div>
      </div>
    </div>
  );
};

export default UpdateFranchise;

