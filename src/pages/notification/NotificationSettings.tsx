import React, { useState } from 'react';
import { Save, Settings, Mail, MessageSquare, Bell } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const NotificationSettings: React.FC = () => {
  const navigate = useNavigate();
  const [settings, setSettings] = useState({
    emailEnabled: true,
    smsEnabled: true,
    inAppEnabled: true,
    emailProvider: 'smtp',
    smsProvider: 'twilio',
    autoSendFeeReminders: true,
    reminderDaysBefore: 3
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Saving notification settings:', settings);
    alert('Settings saved successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <Settings className="text-indigo-600" size={32} />
              Notification Settings
            </h1>
            <p className="text-gray-600 mt-2">Configure channels</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Enable Notification Channels</h3>
              <div className="space-y-4">
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={settings.emailEnabled}
                    onChange={(e) => setSettings({ ...settings, emailEnabled: e.target.checked })}
                    className="w-5 h-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  />
                  <Mail className="text-blue-600" size={20} />
                  <span className="text-sm font-medium text-gray-700">Email Notifications</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={settings.smsEnabled}
                    onChange={(e) => setSettings({ ...settings, smsEnabled: e.target.checked })}
                    className="w-5 h-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  />
                  <MessageSquare className="text-green-600" size={20} />
                  <span className="text-sm font-medium text-gray-700">SMS Notifications</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={settings.inAppEnabled}
                    onChange={(e) => setSettings({ ...settings, inAppEnabled: e.target.checked })}
                    className="w-5 h-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  />
                  <Bell className="text-indigo-600" size={20} />
                  <span className="text-sm font-medium text-gray-700">In-App Notifications</span>
                </label>
              </div>
            </div>

            {settings.emailEnabled && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Provider</label>
                <select
                  value={settings.emailProvider}
                  onChange={(e) => setSettings({ ...settings, emailProvider: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                  <option value="smtp">SMTP</option>
                  <option value="sendgrid">SendGrid</option>
                  <option value="mailgun">Mailgun</option>
                </select>
              </div>
            )}

            {settings.smsEnabled && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">SMS Provider</label>
                <select
                  value={settings.smsProvider}
                  onChange={(e) => setSettings({ ...settings, smsProvider: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                  <option value="twilio">Twilio</option>
                  <option value="aws_sns">AWS SNS</option>
                  <option value="other">Other</option>
                </select>
              </div>
            )}

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Auto-Notifications</h3>
              <label className="flex items-center space-x-3 mb-4">
                <input
                  type="checkbox"
                  checked={settings.autoSendFeeReminders}
                  onChange={(e) => setSettings({ ...settings, autoSendFeeReminders: e.target.checked })}
                  className="w-5 h-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                />
                <span className="text-sm font-medium text-gray-700">Auto-send Fee Payment Reminders</span>
              </label>
              {settings.autoSendFeeReminders && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Days Before Due Date</label>
                  <input
                    type="number"
                    value={settings.reminderDaysBefore}
                    onChange={(e) => setSettings({ ...settings, reminderDaysBefore: parseInt(e.target.value) })}
                    min="1"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
              )}
            </div>

            <div className="flex gap-4 pt-4">
              <button
                type="button"
                onClick={() => navigate('/admin/notification')}
                className="flex-1 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition shadow-lg"
              >
                <Save size={20} />
                Save Settings
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NotificationSettings;



