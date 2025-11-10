// Income & Expenses Types
export interface IncomeHead {
  id: string;
  name: string;
  description: string;
  isActive: boolean;
  createdAt: string;
}

export interface IncomeEntry {
  id: string;
  incomeHeadId: string;
  incomeHeadName: string;
  amount: number;
  date: string;
  description: string;
  paymentMethod: 'cash' | 'bank' | 'online';
  referenceNumber?: string;
  createdBy: string;
  createdAt: string;
}

export interface ExpenseHead {
  id: string;
  name: string;
  description: string;
  isActive: boolean;
  createdAt: string;
}

export interface ExpenseEntry {
  id: string;
  expenseHeadId: string;
  expenseHeadName: string;
  amount: number;
  date: string;
  description: string;
  paymentMethod: 'cash' | 'bank' | 'online';
  referenceNumber?: string;
  createdBy: string;
  createdAt: string;
}



