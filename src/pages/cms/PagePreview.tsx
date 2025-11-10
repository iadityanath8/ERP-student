import React from 'react';
import { ArrowLeft, Globe } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import type { CMSPage } from '../../types/CMS';

const PagePreview: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  // Mock data
  const page: CMSPage = {
    id: id || '1',
    title: 'Home Page',
    slug: 'home',
    content: '<h1>Welcome to Our Platform</h1><p>This is a preview of the page content.</p>',
    pageType: 'landing',
    isPublished: true,
    isHomePage: true,
    author: 'admin',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-15T00:00:00Z',
    publishedAt: '2024-01-01T00:00:00Z',
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>
        <div className="flex items-center gap-2">
          <Globe className="w-5 h-5 text-gray-500" />
          <span className="text-sm text-gray-500">Preview Mode</span>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="mb-4 pb-4 border-b">
          <h1 className="text-2xl font-bold text-gray-800">{page.title}</h1>
          <p className="text-sm text-gray-500 mt-1">URL: /{page.slug}</p>
        </div>
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: page.content }}
        />
      </div>
    </div>
  );
};

export default PagePreview;

