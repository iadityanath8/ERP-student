// Staff Management Types
export interface Staff {
  id: string;
  employeeId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  designation: string;
  department: string;
  roleId?: string;
  roleName?: string;
  joiningDate: string;
  salary?: number;
  address: string;
  city: string;
  state: string;
  pincode: string;
  dateOfBirth: string;
  gender: 'male' | 'female' | 'other';
  status: 'active' | 'inactive' | 'terminated';
  photo?: string;
  createdAt: string;
  updatedAt: string;
}



