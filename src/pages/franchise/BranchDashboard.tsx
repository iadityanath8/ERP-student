import React, { useState, useEffect } from 'react';
import { ArrowLeft, Users, BookOpen, DollarSign, TrendingUp, Activity, Building2 } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import type { FranchiseDashboard } from '../../types/Franchise';

const BranchDashboard: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [dashboard, setDashboard] = useState<FranchiseDashboard | null>(null);

  useEffect(() => {
    // Mock data
    setDashboard({
      franchiseId: id || '1',
      franchiseName: 'Mumbai Central Branch',
      stats: {
        totalStudents: 250,
        totalStaff: 15,
        activeCourses: 12,
        monthlyRevenue: 250000,
        walletBalance: 50000
      },
      recentActivity: [
        'New student enrolled - Priya Sharma',
        'Course "BCA Semester 1" started',
        'Monthly fee collection completed',
        'Staff meeting scheduled for next week'
      ]
    });
  }, [id]);

  if (!dashboard) {
    return <div className="min-h-screen bg-gray-50 p-6 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading dashboard...</p>
      </div>
    </div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={() => navigate(`/admin/franchise/view/${id}`)}
              className="p-2 hover:bg-gray-100 rounded-lg transition"
            >
              <ArrowLeft size={24} className="text-gray-600" />
            </button>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <Building2 className="text-indigo-600" size={32} />
                Branch Dashboard
              </h1>
              <p className="text-gray-600 mt-2">Franchise-level summary - {dashboard.franchiseName}</p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-6">
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <div className="flex items-center gap-3 mb-2">
                <Users className="text-blue-600" size={24} />
                <span className="text-sm text-gray-600">Total Students</span>
              </div>
              <p className="text-3xl font-bold text-gray-900">{dashboard.stats.totalStudents}</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
              <div className="flex items-center gap-3 mb-2">
                <Users className="text-purple-600" size={24} />
                <span className="text-sm text-gray-600">Total Staff</span>
              </div>
              <p className="text-3xl font-bold text-gray-900">{dashboard.stats.totalStaff}</p>
            </div>
            <div className="bg-green-50 rounded-lg p-6 border border-green-200">
              <div className="flex items-center gap-3 mb-2">
                <BookOpen className="text-green-600" size={24} />
                <span className="text-sm text-gray-600">Active Courses</span>
              </div>
              <p className="text-3xl font-bold text-gray-900">{dashboard.stats.activeCourses}</p>
            </div>
            <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
              <div className="flex items-center gap-3 mb-2">
                <DollarSign className="text-yellow-600" size={24} />
                <span className="text-sm text-gray-600">Monthly Revenue</span>
              </div>
              <p className="text-3xl font-bold text-gray-900">₹{dashboard.stats.monthlyRevenue.toLocaleString()}</p>
            </div>
            <div className="bg-indigo-50 rounded-lg p-6 border border-indigo-200">
              <div className="flex items-center gap-3 mb-2">
                <DollarSign className="text-indigo-600" size={24} />
                <span className="text-sm text-gray-600">Wallet Balance</span>
              </div>
              <p className="text-3xl font-bold text-gray-900">₹{dashboard.stats.walletBalance.toLocaleString()}</p>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Activity className="text-indigo-600" size={24} />
              Recent Activity
            </h2>
            <div className="space-y-3">
              {dashboard.recentActivity.map((activity, index) => (
                <div key={index} className="flex gap-3 p-3 bg-white rounded-lg">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2"></div>
                  <p className="text-gray-700 flex-1">{activity}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BranchDashboard;

