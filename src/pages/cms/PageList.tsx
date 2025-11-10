import React, { useState } from 'react';
import { Plus, Search, Eye, Edit, Trash2, Globe, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { CMSPage } from '../../types/CMS';

const PageList: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data
  const [pages] = useState<CMSPage[]>([
    {
      id: '1',
      title: 'Home Page',
      slug: 'home',
      content: '<p>Welcome to our platform...</p>',
      pageType: 'landing',
      isPublished: true,
      isHomePage: true,
      author: 'admin',
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-15T00:00:00Z',
      publishedAt: '2024-01-01T00:00:00Z',
    },
    {
      id: '2',
      title: 'About Us',
      slug: 'about-us',
      content: '<p>About our company...</p>',
      pageType: 'static',
      isPublished: true,
      isHomePage: false,
      author: 'admin',
      createdAt: '2024-01-02T00:00:00Z',
      updatedAt: '2024-01-10T00:00:00Z',
      publishedAt: '2024-01-02T00:00:00Z',
    },
    {
      id: '3',
      title: 'Contact Us',
      slug: 'contact',
      content: '<p>Get in touch...</p>',
      pageType: 'static',
      isPublished: false,
      isHomePage: false,
      author: 'admin',
      createdAt: '2024-01-03T00:00:00Z',
      updatedAt: '2024-01-03T00:00:00Z',
    },
  ]);

  const filteredPages = pages.filter(page =>
    page.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    page.slug.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">CMS Pages</h1>
        <button
          onClick={() => navigate('/admin/cms/page/add')}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Add Page
        </button>
      </div>

      {/* Search */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search pages..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Pages List */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Slug</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Updated</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredPages.map((page) => (
                <tr key={page.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {page.isHomePage && <Globe className="w-4 h-4 text-blue-500" />}
                      <div>
                        <div className="text-sm font-medium text-gray-900">{page.title}</div>
                        {page.isHomePage && (
                          <span className="text-xs text-blue-600">Home Page</span>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    /{page.slug}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 capitalize">
                    {page.pageType}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      page.isPublished ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {page.isPublished ? 'Published' : 'Draft'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {new Date(page.updatedAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => navigate(`/admin/cms/page/preview/${page.id}`)}
                        className="text-blue-600 hover:text-blue-900"
                        title="Preview"
                      >
                        <Eye className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => navigate(`/admin/cms/page/edit/${page.id}`)}
                        className="text-green-600 hover:text-green-900"
                        title="Edit"
                      >
                        <Edit className="w-5 h-5" />
                      </button>
                      {!page.isHomePage && (
                        <button
                          onClick={() => console.log('Delete page:', page.id)}
                          className="text-red-600 hover:text-red-900"
                          title="Delete"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PageList;

