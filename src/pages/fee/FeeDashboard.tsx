import React, { useState, useEffect } from 'react';
import { DollarSign, TrendingUp, Calendar, BarChart3 } from 'lucide-react';
import type { FeeDashboard } from '../../types/Fee';

const FeeDashboardPage: React.FC = () => {
  const [dashboard, setDashboard] = useState<FeeDashboard | null>(null);

  useEffect(() => {
    setDashboard({
      totalRevenue: 2500000,
      pendingDues: 150000,
      monthlyRevenue: 250000,
      courseWiseRevenue: [
        { courseName: 'BCA', amount: 1200000 },
        { courseName: 'MCA', amount: 800000 },
        { courseName: 'BBA', amount: 500000 }
      ],
      monthlyBreakdown: [
        { month: 'Jan', amount: 200000 },
        { month: 'Feb', amount: 220000 },
        { month: 'Mar', amount: 250000 }
      ]
    });
  }, []);

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
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Fee Dashboard</h1>
            <p className="text-gray-600 mt-2">Summary by course & month</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-6">
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <div className="flex items-center gap-3 mb-2">
                <DollarSign className="text-blue-600" size={24} />
                <span className="text-sm text-gray-600">Total Revenue</span>
              </div>
              <p className="text-3xl font-bold text-gray-900">₹{dashboard.totalRevenue.toLocaleString()}</p>
            </div>
            <div className="bg-red-50 rounded-lg p-6 border border-red-200">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="text-red-600" size={24} />
                <span className="text-sm text-gray-600">Pending Dues</span>
              </div>
              <p className="text-3xl font-bold text-gray-900">₹{dashboard.pendingDues.toLocaleString()}</p>
            </div>
            <div className="bg-green-50 rounded-lg p-6 border border-green-200">
              <div className="flex items-center gap-3 mb-2">
                <Calendar className="text-green-600" size={24} />
                <span className="text-sm text-gray-600">Monthly Revenue</span>
              </div>
              <p className="text-3xl font-bold text-gray-900">₹{dashboard.monthlyRevenue.toLocaleString()}</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
              <div className="flex items-center gap-3 mb-2">
                <BarChart3 className="text-purple-600" size={24} />
                <span className="text-sm text-gray-600">Collection Rate</span>
              </div>
              <p className="text-3xl font-bold text-gray-900">94%</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Course-wise Revenue</h2>
              <div className="space-y-3">
                {dashboard.courseWiseRevenue.map((course, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-gray-700">{course.courseName}</span>
                    <span className="font-bold text-gray-900">₹{course.amount.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Monthly Breakdown</h2>
              <div className="space-y-3">
                {dashboard.monthlyBreakdown.map((month, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-gray-700">{month.month}</span>
                    <span className="font-bold text-gray-900">₹{month.amount.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeeDashboardPage;

