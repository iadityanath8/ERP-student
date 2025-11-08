import React, { useState } from 'react';
import { Plus, Settings, CheckCircle, XCircle, AlertCircle, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { Integration } from '../../types/Integration';

const IntegrationList: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data
  const [integrations] = useState<Integration[]>([
    {
      id: '1',
      name: 'Razorpay Payment Gateway',
      type: 'payment',
      provider: 'Razorpay',
      status: 'active',
      isEnabled: true,
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-15T00:00:00Z',
      lastSyncAt: '2024-01-15T10:00:00Z',
      config: {},
    },
    {
      id: '2',
      name: 'Twilio SMS',
      type: 'sms',
      provider: 'Twilio',
      status: 'active',
      isEnabled: true,
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-15T00:00:00Z',
      lastSyncAt: '2024-01-15T09:00:00Z',
      config: {},
    },
    {
      id: '3',
      name: 'Zoom Meetings',
      type: 'zoom',
      provider: 'Zoom',
      status: 'error',
      isEnabled: false,
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-15T00:00:00Z',
      lastError: 'Invalid API credentials',
      config: {},
    },
  ]);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'error':
        return <XCircle className="w-5 h-5 text-red-500" />;
      case 'inactive':
        return <AlertCircle className="w-5 h-5 text-gray-500" />;
      default:
        return <AlertCircle className="w-5 h-5 text-gray-500" />;
    }
  };

  const filteredIntegrations = integrations.filter(integration =>
    integration.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    integration.provider.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Integrations</h1>
        <button
          onClick={() => navigate('/admin/integration/add')}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Add Integration
        </button>
      </div>

      {/* Search */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search integrations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Integrations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredIntegrations.map((integration) => (
          <div key={integration.id} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{integration.name}</h3>
                <p className="text-sm text-gray-500">{integration.provider}</p>
              </div>
              {getStatusIcon(integration.status)}
            </div>

            <div className="mb-4">
              <span className="inline-block px-2 py-1 text-xs font-semibold rounded bg-blue-100 text-blue-800 capitalize">
                {integration.type}
              </span>
            </div>

            <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
              <span>Status: <span className="capitalize font-medium">{integration.status}</span></span>
              <span className={integration.isEnabled ? 'text-green-600' : 'text-gray-400'}>
                {integration.isEnabled ? 'Enabled' : 'Disabled'}
              </span>
            </div>

            {integration.lastError && (
              <div className="mb-4 p-2 bg-red-50 border border-red-200 rounded text-sm text-red-700">
                {integration.lastError}
              </div>
            )}

            <div className="flex gap-2">
              <button
                onClick={() => navigate(`/admin/integration/settings/${integration.id}`)}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                <Settings className="w-4 h-4" />
                Settings
              </button>
              <button
                onClick={() => navigate(`/admin/integration/logs/${integration.id}`)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Logs
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IntegrationList;

