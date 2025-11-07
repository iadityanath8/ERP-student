export type UserRole = 'admin' | 'franchise' | 'student' | 'teacher' | 'parent';


export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  phone?: string;
  location?: string;
}