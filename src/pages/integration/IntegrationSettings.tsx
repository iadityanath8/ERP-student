import React, { useState } from 'react';
import { ArrowLeft, Save, TestTube, RefreshCw } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import type { Integration } from '../../types/Integration';

const IntegrationSettings: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  // Mock data
  const [integration] = useState<Integration>({
    id: id || '1',
    name: 'Razorpay Payment Gateway',
    type: 'payment',
    provider: 'Razorpay',
    status: 'active',
    isEnabled: true,
    apiKey: 'rzp_test_****',
    apiSecret: '****',
    webhookUrl: 'https://example.com/webhook/razorpay',
    config: {
      currency: 'INR',
      testMode: true,
      autoCapture: true,
    },
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-15T00:00:00Z',
    lastSyncAt: '2024-01-15T10:00:00Z',
  });

  const [settings, setSettings] = useState(integration.config || {});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle settings save
    console.log('Saving settings:', settings);
  };

  const handleTest = () => {
    // Handle test connection
    console.log('Testing integration...');
  };

  const handleSync = () => {
    // Handle sync
    console.log('Syncing integration...');
  };

  return (
    <div className="p-6">
      <button
        onClick={() => navigate('/admin/integration')}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
      >
        <ArrowLeft className="w-5 h-5" />
        Back to Integrations
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Settings */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
              {integration.name} - Settings
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  API Key
                </label>
                <input
                  type="text"
                  value={integration.apiKey}
                  readOnly
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50"
                />
                <p className="text-xs text-gray-500 mt-1">API Key is masked for security</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  API Secret
                </label>
                <input
                  type="password"
                  value={integration.apiSecret}
                  readOnly
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50"
                />
                <p className="text-xs text-gray-500 mt-1">API Secret is masked for security</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Webhook URL
                </label>
                <input
                  type="url"
                  value={integration.webhookUrl}
                  onChange={(e) => setSettings({ ...settings, webhookUrl: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Dynamic config based on integration type */}
              {integration.type === 'payment' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Currency
                    </label>
                    <select
                      value={settings.currency || 'INR'}
                      onChange={(e) => setSettings({ ...settings, currency: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="INR">INR - Indian Rupee</option>
                      <option value="USD">USD - US Dollar</option>
                      <option value="EUR">EUR - Euro</option>
                    </select>
                  </div>
                  <div className="flex items-center gap-4">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.testMode || false}
                        onChange={(e) => setSettings({ ...settings, testMode: e.target.checked })}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                    <span className="text-sm text-gray-700">Test Mode</span>
                  </div>
                </>
              )}

              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={handleTest}
                  className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  <TestTube className="w-5 h-5" />
                  Test Connection
                </button>
                <button
                  type="button"
                  onClick={handleSync}
                  className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  <RefreshCw className="w-5 h-5" />
                  Sync Now
                </button>
                <button
                  type="submit"
                  className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  <Save className="w-5 h-5" />
                  Save Settings
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Integration Status</h3>
            <div className="space-y-3 text-sm">
              <div>
                <span className="text-gray-500">Status:</span>
                <span className={`ml-2 px-2 py-1 text-xs font-semibold rounded-full ${
                  integration.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {integration.status}
                </span>
              </div>
              <div>
                <span className="text-gray-500">Enabled:</span>
                <span className={`ml-2 ${integration.isEnabled ? 'text-green-600' : 'text-gray-400'}`}>
                  {integration.isEnabled ? 'Yes' : 'No'}
                </span>
              </div>
              {integration.lastSyncAt && (
                <div>
                  <span className="text-gray-500">Last Sync:</span>
                  <span className="ml-2 text-gray-800">
                    {new Date(integration.lastSyncAt).toLocaleString()}
                  </span>
                </div>
              )}
            </div>
          </div>

          {integration.lastError && (
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-red-800 mb-2">Last Error</h3>
              <p className="text-sm text-red-600">{integration.lastError}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default IntegrationSettings;

