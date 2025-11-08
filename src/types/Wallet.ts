// Franchise Wallet Types
export interface WalletTransaction {
  id: string;
  franchiseId: string;
  franchiseName: string;
  type: 'credit' | 'debit';
  amount: number;
  description: string;
  transactionDate: string;
  status: 'completed' | 'pending' | 'failed';
  referenceNumber: string;
  initiatedBy: string;
  initiatedByRole: 'admin' | 'franchise';
}

export interface WalletOverview {
  franchiseId: string;
  franchiseName: string;
  currentBalance: number;
  totalCredits: number;
  totalDebits: number;
  pendingTransactions: number;
  lastTransactionDate: string;
}

export interface WalletReport {
  franchiseId?: string;
  startDate: string;
  endDate: string;
  totalCredits: number;
  totalDebits: number;
  netAmount: number;
  transactions: WalletTransaction[];
}

export interface Notice {
  id: string;
  title: string;
  content: string;
  link?: string;
  priority: 'high' | 'medium' | 'low';
  createdAt: string;
  expiresAt?: string;
  isActive: boolean;
}

