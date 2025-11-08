import React, { useState, useEffect, useRef } from 'react';
import {
    Menu, X, School, Home, Users, BookOpen, Calendar,
    FileText, DollarSign, Settings, Bell, Search,
    ChevronDown, LogOut, GraduationCap, Award,
    ClipboardList, BarChart3, MessageSquare, UserCircle,
} from 'lucide-react';
import { useNavigate } from "react-router-dom";

import { Link } from 'react-router-dom';
import type { User } from '../types/User';

interface NavbarProps {
    user?: User | null;
    currentPage: string;
    onLogout?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
    user,
    currentPage,
    onLogout
}) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const onNavigate = useNavigate();
    const profileRef = useRef<HTMLDivElement | null>(null);
    const notificationRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
          const target = event.target as Node;
    
          if (
            isProfileDropdownOpen &&
            profileRef.current &&
            !profileRef.current.contains(target)
          ) {
            setIsProfileDropdownOpen(false);
          }
    
          if (
            isNotificationOpen &&
            notificationRef.current &&
            !notificationRef.current.contains(target)
          ) {
            setIsNotificationOpen(false);
          }
        };
    
        document.addEventListener("mousedown", handleClickOutside);
    
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [isProfileDropdownOpen, isNotificationOpen]);

    const getNavigationItems = () => {
        if (!user) return [];

        switch (user.role) {
            case 'admin':
                return [
                    { id: 'dashboard', label: 'Dashboard', icon: Home, page: 'dashboard' },
                    { id: 'schools', label: 'Schools', icon: School, page: 'schools' },
                    { id: 'users', label: 'Users', icon: Users, page: 'users' },
                    { id: 'courses', label: 'Courses', icon: BookOpen, page: 'courses' },
                    { id: 'reports', label: 'Reports', icon: BarChart3, page: 'reports' },
                    { id: 'finance', label: 'Finance', icon: DollarSign, page: 'finance' },
                ];
            case 'franchise':
                return [
                    { id: 'dashboard', label: 'Dashboard', icon: Home, page: 'dashboard' },
                    { id: 'students', label: 'Students', icon: Users, page: 'students' },
                    { id: 'teachers', label: 'Teachers', icon: GraduationCap, page: 'teachers' },
                    { id: 'classes', label: 'Classes', icon: BookOpen, page: 'classes' },
                    { id: 'attendance', label: 'Attendance', icon: ClipboardList, page: 'attendance' },
                    { id: 'exams', label: 'Exams', icon: Award, page: 'exams' },
                    { id: 'fees', label: 'Fees', icon: DollarSign, page: 'fees' },
                ];
            case 'teacher':
                return [
                    { id: 'dashboard', label: 'Dashboard', icon: Home, page: 'dashboard' },
                    { id: 'classes', label: 'My Classes', icon: BookOpen, page: 'classes' },
                    { id: 'students', label: 'Students', icon: Users, page: 'students' },
                    { id: 'attendance', label: 'Attendance', icon: ClipboardList, page: 'attendance' },
                    { id: 'assignments', label: 'Assignments', icon: FileText, page: 'assignments' },
                    { id: 'grades', label: 'Grades', icon: Award, page: 'grades' },
                ];
            case 'student':
                return [
                    { id: 'dashboard', label: 'Dashboard', icon: Home, page: 'dashboard' },
                    { id: 'courses', label: 'My Courses', icon: BookOpen, page: 'courses' },
                    { id: 'assignments', label: 'Assignments', icon: FileText, page: 'assignments' },
                    { id: 'attendance', label: 'Attendance', icon: Calendar, page: 'attendance' },
                    { id: 'grades', label: 'Grades', icon: Award, page: 'grades' },
                    { id: 'schedule', label: 'Schedule', icon: Calendar, page: 'schedule' },
                ];
            case 'parent':
                return [
                    { id: 'dashboard', label: 'Dashboard', icon: Home, page: 'dashboard' },
                    { id: 'children', label: 'My Children', icon: Users, page: 'children' },
                    { id: 'attendance', label: 'Attendance', icon: Calendar, page: 'attendance' },
                    { id: 'grades', label: 'Report Cards', icon: Award, page: 'grades' },
                    { id: 'fees', label: 'Fee Payment', icon: DollarSign, page: 'fees' },
                    { id: 'communication', label: 'Messages', icon: MessageSquare, page: 'communication' },
                ];
            default:
                return [];
        }
    };

    const navigationItems = getNavigationItems();

    //   DUMMY DATA
    const notifications = [
        { id: 1, text: 'New assignment posted in Mathematics', time: '5 min ago', unread: true },
        { id: 2, text: 'Parent-teacher meeting scheduled', time: '1 hour ago', unread: true },
        { id: 3, text: 'Fee payment reminder', time: '2 hours ago', unread: false },
        { id: 4, text: 'Grade updated for Science exam', time: '1 day ago', unread: false },
    ];

    const unreadCount = notifications.filter(n => n.unread).length;

    const getRoleBadgeColor = () => {
        if (!user) return 'bg-gray-100 text-gray-700';
        switch (user.role) {
            case 'admin': return 'bg-red-100 text-red-700';
            case 'franchise': return 'bg-purple-100 text-purple-700';
            case 'teacher': return 'bg-blue-100 text-blue-700';
            case 'student': return 'bg-green-100 text-green-700';
            case 'parent': return 'bg-yellow-100 text-yellow-700';
            default: return 'bg-gray-100 text-gray-700';
        }
    };

    const handleLogout = () => {
        if (onLogout) {
            onLogout();
        }
        onNavigate('login');
    };

    // If user is not logged in, show minimal navbar
    if (!user) {
        return (
            <nav className="bg-white shadow-md sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center space-x-3">
                            <div className="bg-linear-to-r from-indigo-600 to-purple-600 w-10 h-10 rounded-lg flex items-center justify-center shadow-md">
                                <School className="text-white" size={24} />
                            </div>
                            <div>
                                <h1 className="text-xl font-bold text-gray-900">School ERP</h1>
                                <p className="text-xs text-gray-500">Education Management System</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Link to="/login"
                                className="px-4 py-2 text-sm font-medium text-indigo-600 hover:text-indigo-700"
                            >
                                Login
                            </Link>
                            <Link
                                to="register-franchise"
                                className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 shadow-md"
                            >
                                Register School
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }

    return (
        <nav className="bg-white shadow-lg sticky top-0 z-50">
            {/* Top Bar */}
            <div className="border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo and School Name */}
                        <div className="flex items-center space-x-3">
                            <div className="bg-linear-to-r from-indigo-600 to-purple-600 w-10 h-10 rounded-lg flex items-center justify-center shadow-md">
                                <School className="text-white" size={24} />
                            </div>
                            <div className="hidden md:block">
                                <h1 className="text-xl font-bold text-gray-900">School ERP</h1>
                                <p className="text-xs text-gray-500">Sunrise International School</p>
                            </div>
                        </div>

                        {/* Search Bar - Hidden on mobile */}
                        <div className="hidden lg:flex flex-1 max-w-md mx-8">
                            <div className="relative w-full">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Search students, courses, reports..."
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                />
                            </div>
                        </div>

                        {/* Right Side Icons */}
                        <div className="flex items-center space-x-4">
                            {/* Search Icon - Mobile Only */}
                            <button className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                                <Search size={20} />
                            </button>

                            {/* Notifications */}
                            <div className="relative">
                                <button
                                    onClick={() => {
                                        setIsNotificationOpen(!isNotificationOpen);
                                        setIsProfileDropdownOpen(false);
                                    }}
                                    className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg relative"
                                >
                                    <Bell size={20} />
                                    {unreadCount > 0 && (
                                        <span className="absolute top-1 right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                                            {unreadCount}
                                        </span>
                                    )}
                                </button>

                                {/* Notification Dropdown */}
                                {isNotificationOpen && (
                                    <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-2 max-h-96 overflow-y-auto" ref={notificationRef}>
                                        <div className="px-4 py-2 border-b border-gray-200 flex justify-between items-center">
                                            <h3 className="font-semibold text-gray-900">Notifications</h3>
                                            <span className="text-xs text-indigo-600 font-medium">{unreadCount} new</span>
                                        </div>
                                        {notifications.map((notification) => (
                                            <div
                                                key={notification.id}
                                                className={`px-4 py-3 hover:bg-gray-50 cursor-pointer border-l-4 ${notification.unread ? 'bg-blue-50 border-indigo-500' : 'border-transparent'
                                                    }`}
                                            >
                                                <p className={`text-sm ${notification.unread ? 'text-gray-900 font-medium' : 'text-gray-700'}`}>
                                                    {notification.text}
                                                </p>
                                                <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                                            </div>
                                        ))}
                                        <div className="px-4 py-2 border-t border-gray-200 text-center">
                                            <button className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">
                                                View All Notifications
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Profile Dropdown */}
                            <div className="relative">
                                <button
                                    onClick={() => {
                                        setIsProfileDropdownOpen(!isProfileDropdownOpen);
                                        setIsNotificationOpen(false);
                                    }}
                                    className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg"
                                >
                                    <div className="w-8 h-8 bg-linear-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                                        {user.avatar ? (
                                            <img src={user.avatar} alt={user.name} className="w-full h-full rounded-full object-cover" />
                                        ) : (
                                            <span className="text-white font-semibold text-sm">{user.name.charAt(0)}</span>
                                        )}
                                    </div>
                                    <div className="hidden md:block text-left">
                                        <p className="text-sm font-semibold text-gray-900">{user.name}</p>
                                        <p className={`text-xs px-2 py-0.5 rounded-full inline-block ${getRoleBadgeColor()}`}>
                                            {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                                        </p>
                                    </div>
                                    <ChevronDown size={16} className="text-gray-600 hidden md:block" />
                                </button>

                                {/* Profile Dropdown Menu */}
                                {isProfileDropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2" ref={profileRef}>
                                        <div className="px-4 py-3 border-b border-gray-200">
                                            <p className="text-sm font-semibold text-gray-900">{user.name}</p>
                                            <p className="text-xs text-gray-500">{user.email}</p>
                                            {user.location && (
                                                <p className="text-xs text-gray-500 mt-1">📍 {user.location}</p>
                                            )}
                                        </div>
                                        <button
                                            onClick={() => {
                                                onNavigate('/profile');
                                                setIsProfileDropdownOpen(false);
                                            }}
                                            className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
                                        >
                                            <UserCircle size={16} />
                                            <span>My Profile</span>
                                        </button>
                                        <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2">
                                            <Settings size={16} />
                                            <span>Settings</span>
                                        </button>
                                        <div className="border-t border-gray-200 mt-2"></div>
                                        <button
                                            onClick={handleLogout}
                                            className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center space-x-2"
                                        >
                                            <LogOut size={16} />
                                            <span>Sign Out</span>
                                        </button>
                                    </div>
                                )}
                            </div>

                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                            >
                                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Links - Desktop */}
            <div className="hidden lg:block border-b border-gray-200 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex space-x-1">
                        {navigationItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = currentPage === item.page;
                            return (
                                <button
                                    key={item.id}
                                    onClick={() => onNavigate(item.page)}
                                    className={`flex items-center space-x-2 px-4 py-3 text-sm font-medium rounded-t-lg transition-all ${isActive
                                        ? 'text-indigo-600 bg-white border-b-2 border-indigo-600 shadow-sm'
                                        : 'text-gray-600 hover:text-gray-900 hover:bg-white'
                                        }`}
                                >
                                    <Icon size={18} />
                                    <span>{item.label}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden border-t border-gray-200 bg-white">
                    <div className="px-4 py-2 space-y-1 max-h-96 overflow-y-auto">
                        {navigationItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = currentPage === item.page;
                            return (
                                <button
                                    key={item.id}
                                    onClick={() => {
                                        onNavigate(item.page);
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className={`w-full flex items-center space-x-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors ${isActive
                                        ? 'text-indigo-600 bg-indigo-50'
                                        : 'text-gray-600 hover:bg-gray-50'
                                        }`}
                                >
                                    <Icon size={20} />
                                    <span>{item.label}</span>
                                </button>
                            );
                        })}

                        {/* Mobile Search */}
                        <div className="pt-2">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Search..."
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;