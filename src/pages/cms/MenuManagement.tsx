import React, { useState } from 'react';
import { Plus, Edit, Trash2, ArrowUp, ArrowDown, GripVertical } from 'lucide-react';
import type { CMSMenu } from '../../types/CMS';

const MenuManagement: React.FC = () => {
  const [menus, setMenus] = useState<CMSMenu[]>([
    {
      id: '1',
      name: 'home',
      label: 'Home',
      url: '/',
      type: 'page',
      order: 1,
      isActive: true,
    },
    {
      id: '2',
      name: 'about',
      label: 'About Us',
      url: '/about-us',
      type: 'page',
      order: 2,
      isActive: true,
    },
    {
      id: '3',
      name: 'courses',
      label: 'Courses',
      url: '/courses',
      type: 'dropdown',
      order: 3,
      isActive: true,
      children: [
        {
          id: '3-1',
          name: 'all-courses',
          label: 'All Courses',
          url: '/courses',
          type: 'page',
          parentId: '3',
          order: 1,
          isActive: true,
        },
      ],
    },
    {
      id: '4',
      name: 'contact',
      label: 'Contact',
      url: '/contact',
      type: 'page',
      order: 4,
      isActive: true,
    },
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [editingMenu, setEditingMenu] = useState<CMSMenu | null>(null);

  const handleAdd = () => {
    setEditingMenu(null);
    setShowAddForm(true);
  };

  const handleEdit = (menu: CMSMenu) => {
    setEditingMenu(menu);
    setShowAddForm(true);
  };

  const handleDelete = (id: string) => {
    setMenus(menus.filter(m => m.id !== id && m.parentId !== id));
  };

  const moveUp = (index: number) => {
    if (index > 0) {
      const newMenus = [...menus];
      [newMenus[index - 1], newMenus[index]] = [newMenus[index], newMenus[index - 1]];
      newMenus[index - 1].order = index;
      newMenus[index].order = index + 1;
      setMenus(newMenus);
    }
  };

  const moveDown = (index: number) => {
    if (index < menus.length - 1) {
      const newMenus = [...menus];
      [newMenus[index], newMenus[index + 1]] = [newMenus[index + 1], newMenus[index]];
      newMenus[index].order = index + 1;
      newMenus[index + 1].order = index + 2;
      setMenus(newMenus);
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Menu Management</h1>
        <button
          onClick={handleAdd}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Add Menu Item
        </button>
      </div>

      {/* Menu List */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Order</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Label</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">URL</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {menus.map((menu, index) => (
                <React.Fragment key={menu.id}>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <GripVertical className="w-5 h-5 text-gray-400" />
                        <span className="text-sm text-gray-900">{menu.order}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">{menu.label}</div>
                      {menu.children && menu.children.length > 0 && (
                        <div className="text-xs text-gray-500 mt-1">
                          {menu.children.length} sub-item(s)
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">{menu.url}</td>
                    <td className="px-6 py-4 text-sm text-gray-500 capitalize">{menu.type}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        menu.isActive ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                      }`}>
                        {menu.isActive ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => moveUp(index)}
                          disabled={index === 0}
                          className="text-gray-600 hover:text-gray-900 disabled:opacity-50"
                        >
                          <ArrowUp className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => moveDown(index)}
                          disabled={index === menus.length - 1}
                          className="text-gray-600 hover:text-gray-900 disabled:opacity-50"
                        >
                          <ArrowDown className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleEdit(menu)}
                          className="text-green-600 hover:text-green-900"
                        >
                          <Edit className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleDelete(menu.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                  {menu.children && menu.children.map((child) => (
                    <tr key={child.id} className="bg-gray-50">
                      <td className="px-6 py-4 pl-12">
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-500">└─ {child.order}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-700 pl-4">{child.label}</div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">{child.url}</td>
                      <td className="px-6 py-4 text-sm text-gray-500 capitalize">{child.type}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                          child.isActive ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                        }`}>
                          {child.isActive ? 'Active' : 'Inactive'}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium">
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => handleEdit(child)}
                            className="text-green-600 hover:text-green-900"
                          >
                            <Edit className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => handleDelete(child.id)}
                            className="text-red-600 hover:text-red-900"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add/Edit Form Modal */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {editingMenu ? 'Edit Menu Item' : 'Add Menu Item'}
            </h2>
            {/* Form fields would go here */}
            <div className="flex justify-end gap-4 mt-6">
              <button
                onClick={() => setShowAddForm(false)}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowAddForm(false)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                {editingMenu ? 'Update' : 'Create'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuManagement;

