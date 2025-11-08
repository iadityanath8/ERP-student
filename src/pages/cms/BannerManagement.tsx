import React, { useState } from 'react';
import { Plus, Edit, Trash2, Eye, Image as ImageIcon } from 'lucide-react';
import type { CMSBanner } from '../../types/CMS';

const BannerManagement: React.FC = () => {
  const [banners, setBanners] = useState<CMSBanner[]>([
    {
      id: '1',
      title: 'Welcome to Our Platform',
      subtitle: 'Learn and Grow',
      description: 'Start your learning journey today',
      imageUrl: '/banners/banner1.jpg',
      linkUrl: '/courses',
      linkText: 'Explore Courses',
      position: 'home-hero',
      order: 1,
      isActive: true,
      createdAt: '2024-01-01T00:00:00Z',
    },
    {
      id: '2',
      title: 'Special Offer',
      subtitle: '50% Off',
      description: 'Limited time offer on all courses',
      imageUrl: '/banners/banner2.jpg',
      linkUrl: '/offers',
      linkText: 'View Offer',
      position: 'home-slider',
      order: 2,
      isActive: true,
      createdAt: '2024-01-02T00:00:00Z',
    },
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState<string>('all');

  const filteredBanners = selectedPosition === 'all'
    ? banners
    : banners.filter(b => b.position === selectedPosition);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Banner Management</h1>
        <button
          onClick={() => setShowAddForm(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Add Banner
        </button>
      </div>

      {/* Filter */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <select
          value={selectedPosition}
          onChange={(e) => setSelectedPosition(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="all">All Positions</option>
          <option value="home-hero">Home Hero</option>
          <option value="home-slider">Home Slider</option>
          <option value="sidebar">Sidebar</option>
          <option value="footer">Footer</option>
        </select>
      </div>

      {/* Banners Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBanners.map((banner) => (
          <div key={banner.id} className="bg-white rounded-lg shadow overflow-hidden">
            <div className="relative h-48 bg-gray-200 flex items-center justify-center">
              {banner.imageUrl ? (
                <img src={banner.imageUrl} alt={banner.title} className="w-full h-full object-cover" />
              ) : (
                <ImageIcon className="w-12 h-12 text-gray-400" />
              )}
              <div className="absolute top-2 right-2">
                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                  banner.isActive ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                }`}>
                  {banner.isActive ? 'Active' : 'Inactive'}
                </span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 mb-1">{banner.title}</h3>
              {banner.subtitle && (
                <p className="text-sm text-gray-600 mb-2">{banner.subtitle}</p>
              )}
              <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                <span className="capitalize">{banner.position.replace('-', ' ')}</span>
                <span>Order: {banner.order}</span>
              </div>
              <div className="flex items-center gap-2">
                <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">
                  <Edit className="w-4 h-4" />
                  Edit
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">
                  <Eye className="w-4 h-4" />
                  Preview
                </button>
                <button
                  onClick={() => setBanners(banners.filter(b => b.id !== banner.id))}
                  className="px-3 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 text-sm"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add/Edit Form Modal */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Add Banner</h2>
            {/* Form fields would go here */}
            <div className="flex justify-end gap-4 mt-6">
              <button
                onClick={() => setShowAddForm(false)}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowAddForm(false)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Create Banner
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BannerManagement;

