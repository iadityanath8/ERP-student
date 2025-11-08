import React, { useState, useEffect } from 'react';
import { ArrowLeft, Save, BookOpen } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import AddProgram from './AddProgram';

const EditProgram: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={() => navigate('/admin/course/programs')}
              className="p-2 hover:bg-gray-100 rounded-lg transition"
            >
              <ArrowLeft size={24} className="text-gray-600" />
            </button>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <BookOpen className="text-indigo-600" size={32} />
                Edit Program
              </h1>
              <p className="text-gray-600 mt-2">Modify details</p>
            </div>
          </div>
          <p className="text-gray-600">Edit form for program ID: {id}</p>
        </div>
      </div>
    </div>
  );
};

export default EditProgram;

