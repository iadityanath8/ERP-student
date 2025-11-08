import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { User, UserRole } from '../types/User';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string, role: UserRole) => Promise<boolean>;
  logout: () => void;
  updateUser: (userData: Partial<User>) => void;
}

// Mock users database (in real app, this would be API calls)
const mockUsers: Record<string, { password: string; user: User }> = {
  'admin@university.edu': {
    password: 'admin123',
    user: {
      id: '1',
      name: 'Admin User',
      email: 'admin@university.edu',
      role: 'admin',
      phone: '+91 98765 43210',
      location: 'Mumbai, Maharashtra',
    },
  },
  'franchise@university.edu': {
    password: 'franchise123',
    user: {
      id: '2',
      name: 'Franchise Owner',
      email: 'franchise@university.edu',
      role: 'franchise',
      phone: '+91 98765 43211',
      location: 'Delhi, NCR',
    },
  },
  'teacher@university.edu': {
    password: 'teacher123',
    user: {
      id: '3',
      name: 'John Instructor',
      email: 'teacher@university.edu',
      role: 'teacher',
      phone: '+91 98765 43212',
      location: 'Bangalore, Karnataka',
    },
  },
  'student@university.edu': {
    password: 'student123',
    user: {
      id: '4',
      name: 'Jane Student',
      email: 'student@university.edu',
      role: 'student',
      phone: '+91 98765 43213',
      location: 'Pune, Maharashtra',
    },
  },
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: async (email: string, password: string, role: UserRole) => {
        // Simulate API call delay
        await new Promise((resolve) => setTimeout(resolve, 500));

        const userData = mockUsers[email.toLowerCase()];
        
        if (!userData) {
          // If email doesn't exist, create a new user with the selected role
          const newUser: User = {
            id: Date.now().toString(),
            name: email.split('@')[0].replace(/[^a-zA-Z]/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'User',
            email: email.toLowerCase(),
            role: role,
            phone: '+91 00000 00000',
            location: 'India',
          };
          
          set({ user: newUser, isAuthenticated: true });
          return true;
        }

        // Check if password matches and role matches
        if (userData.password === password && userData.user.role === role) {
          set({ user: userData.user, isAuthenticated: true });
          return true;
        }

        // If password doesn't match but role matches, still allow (for testing)
        if (userData.user.role === role) {
          set({ user: userData.user, isAuthenticated: true });
          return true;
        }

        return false;
      },
      logout: () => {
        set({ user: null, isAuthenticated: false });
      },
      updateUser: (userData: Partial<User>) => {
        set((state) => ({
          user: state.user ? { ...state.user, ...userData } : null,
        }));
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);

