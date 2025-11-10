import React, { useState } from 'react';
import { BarChart3, TrendingUp, Users, DollarSign, Award } from 'lucide-react';

const AnalyticsDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <BarChart3 className="text-indigo-600" size={32} />
              Analytics Dashboard
            </h1>
            <p className="text-gray-600 mt-2">Overall insights</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-6">
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <div className="flex items-center gap-3 mb-2">
                <Users className="text-blue-600" size={24} />
                <span className="text-sm text-gray-600">Total Students</span>
              </div>
              <p className="text-3xl font-bold text-gray-900">1,250</p>
            </div>
            <div className="bg-green-50 rounded-lg p-6 border border-green-200">
              <div className="flex items-center gap-3 mb-2">
                <DollarSign className="text-green-600" size={24} />
                <span className="text-sm text-gray-600">Total Revenue</span>
              </div>
              <p className="text-3xl font-bold text-gray-900">₹25M</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
              <div className="flex items-center gap-3 mb-2">
                <Award className="text-purple-600" size={24} />
                <span className="text-sm text-gray-600">Avg. Score</span>
              </div>
              <p className="text-3xl font-bold text-gray-900">85%</p>
            </div>
            <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="text-yellow-600" size={24} />
                <span className="text-sm text-gray-600">Growth Rate</span>
              </div>
              <p className="text-3xl font-bold text-gray-900">+15%</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-50 rounded-lg p-12 text-center border border-gray-200">
              <BarChart3 className="mx-auto text-gray-400 mb-4" size={48} />
              <p className="text-gray-500">Revenue trends chart</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-12 text-center border border-gray-200">
              <BarChart3 className="mx-auto text-gray-400 mb-4" size={48} />
              <p className="text-gray-500">Student enrollment chart</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-12 text-center border border-gray-200">
            <BarChart3 className="mx-auto text-gray-400 mb-4" size={48} />
            <p className="text-gray-500">Additional analytics charts and insights will appear here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;



