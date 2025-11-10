// Integrations Types
export interface Integration {
  id: string;
  name: string;
  type: 'payment' | 'email' | 'sms' | 'whatsapp' | 'zoom' | 'youtube' | 'analytics' | 'other';
  provider: string; // e.g., 'Razorpay', 'Twilio', 'SendGrid'
  status: 'active' | 'inactive' | 'error';
  isEnabled: boolean;
  apiKey?: string;
  apiSecret?: string;
  webhookUrl?: string;
  config: Record<string, any>; // Flexible configuration object
  lastSyncAt?: string;
  lastError?: string;
  createdAt: string;
  updatedAt: string;
}

export interface IntegrationLog {
  id: string;
  integrationId: string;
  integrationName: string;
  action: 'sync' | 'webhook' | 'api_call' | 'error';
  status: 'success' | 'failed' | 'pending';
  message: string;
  requestData?: Record<string, any>;
  responseData?: Record<string, any>;
  errorMessage?: string;
  createdAt: string;
}

export interface IntegrationConfig {
  paymentGateways: Integration[];
  communicationServices: Integration[];
  videoPlatforms: Integration[];
  analyticsTools: Integration[];
}

