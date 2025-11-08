import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { BookOpen, Building2, Shield, Wallet, ChevronDown, ChevronRight, X, Menu } from 'lucide-react';

interface NavSection {
  title: string;
  icon: React.ElementType;
  items: NavItem[];
}

interface NavItem {
  label: string;
  path: string;
}

const AdminSidebar = () => {
  const location = useLocation();
  const [expandedSections, setExpandedSections] = useState<string[]>(['Courses', 'Franchise', 'Roles & Permissions', 'Wallet']);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navSections: NavSection[] = [
    {
      title: 'Courses',
      icon: BookOpen,
      items: [
        { label: 'Programs', path: '/admin/course/programs' },
        { label: 'Add Program', path: '/admin/course/program/add' },
        { label: 'Courses', path: '/admin/course' },
        { label: 'Add Course', path: '/admin/course/add' },
        { label: 'Subjects', path: '/admin/course/subjects' },
        { label: 'Add Subject', path: '/admin/course/subject/add' },
        { label: 'Syllabus', path: '/admin/course/syllabus' },
        { label: 'Add Syllabus', path: '/admin/course/syllabus/add' },
        { label: 'Topics', path: '/admin/course/topics' },
        { label: 'Add Topic', path: '/admin/course/topic/add' },
      ]
    },
    {
      title: 'Franchise',
      icon: Building2,
      items: [
        { label: 'Franchise List', path: '/admin/franchise' },
        { label: 'Add Franchise', path: '/admin/franchise/add' },
      ]
    },
    {
      title: 'Roles & Permissions',
      icon: Shield,
      items: [
        { label: 'Role List', path: '/admin/roles' },
        { label: 'Add Role', path: '/admin/roles/add' },
        { label: 'Permissions', path: '/admin/roles/permissions' },
      ]
    },
    {
      title: 'Wallet',
      icon: Wallet,
      items: [
        { label: 'Wallet Overview', path: '/admin/wallet' },
        { label: 'Add Amount to Franchise', path: '/admin/wallet/add-amount' },
        { label: 'Payment to Admin', path: '/admin/wallet/payment-to-admin' },
        { label: 'Transactions', path: '/admin/wallet/transactions' },
        { label: 'Wallet Report', path: '/admin/wallet/report' },
        { label: 'Notice Board', path: '/admin/wallet/notices' },
      ]
    }
  ];

  const toggleSection = (title: string) => {
    setExpandedSections(prev =>
      prev.includes(title)
        ? prev.filter(s => s !== title)
        : [...prev, title]
    );
  };

  const isActive = (path: string) => location.pathname === path;

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const SidebarContent = () => (
    <div className="p-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">Admin Panel</h2>
        <button onClick={closeMobileMenu} className="lg:hidden text-gray-500 hover:text-gray-700">
          <X size={24} />
        </button>
      </div>
      
      <nav className="space-y-1">
        {navSections.map((section) => {
          const Icon = section.icon;
          const isExpanded = expandedSections.includes(section.title);
          
          return (
            <div key={section.title} className="mb-2">
              <button
                onClick={() => toggleSection(section.title)}
                className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 rounded-lg transition-all duration-200"
              >
                <span className="flex items-center gap-3">
                  <Icon size={18} className="text-indigo-600" />
                  <span>{section.title}</span>
                </span>
                {isExpanded ? (
                  <ChevronDown size={16} className="text-gray-400" />
                ) : (
                  <ChevronRight size={16} className="text-gray-400" />
                )}
              </button>
              
              {isExpanded && (
                <div className="mt-1 ml-3 space-y-0.5">
                  {section.items.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={closeMobileMenu}
                      className={`block px-4 py-2 text-sm rounded-lg transition-all duration-200 ${
                        isActive(item.path)
                          ? 'bg-indigo-50 text-indigo-700 font-semibold'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(true)}
        className="lg:hidden fixed bottom-6 right-6 z-40 bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700 transition-all"
      >
        <Menu size={24} />
      </button>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-64 bg-white border-r border-gray-200 h-[calc(100vh-64px)] overflow-y-auto fixed left-0 top-16 shadow-md z-30">
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar */}
      {isMobileMenuOpen && (
        <>
          <div 
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={closeMobileMenu}
          />
          <aside className="lg:hidden fixed left-0 top-0 w-64 h-full bg-white shadow-xl z-50 overflow-y-auto">
            <SidebarContent />
          </aside>
        </>
      )}
    </>
  );
};

export default AdminSidebar;
