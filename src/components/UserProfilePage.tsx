import { useState } from 'react';
import { User, Camera } from 'lucide-react';


const UserProfilePage = ({ user, onNavigate }: any) => {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        name: user.name,
        email: user.email,
        phone: user.phone || '',
        location: user.location || ''
    });

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-white shadow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <button
                        onClick={() => onNavigate('dashboard')}
                        className="text-indigo-600 hover:text-indigo-700 font-medium"
                    >
                        ← Back to Dashboard
                    </button>
                </div>
            </div>

            <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    {/* Cover Photo */}
                    <div className="h-32 bg-linear-to-r from-indigo-500 to-purple-600"></div>

                    {/* Profile Section */}
                    <div className="px-6 pb-6">
                        <div className="flex flex-col sm:flex-row items-center sm:items-end -mt-16 mb-6">
                            <div className="relative">
                                <div className="w-32 h-32 rounded-full bg-white p-2 shadow-lg">
                                    {user.avatar ? (
                                        <img src={user.avatar} alt="Profile" className="w-full h-full rounded-full object-cover" />
                                    ) : (
                                        <div className="w-full h-full rounded-full bg-indigo-100 flex items-center justify-center">
                                            <User size={48} className="text-indigo-600" />
                                        </div>
                                    )}
                                </div>
                                <button className="absolute bottom-2 right-2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50">
                                    <Camera size={20} className="text-gray-600" />
                                </button>
                            </div>

                            <div className="mt-4 sm:mt-0 sm:ml-6 text-center sm:text-left flex-1">
                                <h1 className="text-3xl font-bold text-gray-900">{user.name}</h1>
                                <p className="text-gray-600 capitalize">{user.role}</p>
                            </div>

                            <button
                                onClick={() => setIsEditing(!isEditing)}
                                className="mt-4 sm:mt-0 px-6 py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition duration-200"
                            >
                                {isEditing ? 'Cancel' : 'Edit Profile'}
                            </button>
                        </div>

                        <div className="border-t pt-6">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">Personal Information</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        disabled={!isEditing}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent disabled:bg-gray-50"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        disabled={!isEditing}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent disabled:bg-gray-50"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                                    <input
                                        type="text"
                                        value={formData.location}
                                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                        disabled={!isEditing}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent disabled:bg-gray-50"
                                    />
                                </div>
                            </div>

                            {isEditing && (
                                <div className="mt-6">
                                    <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition duration-200">
                                        Save Changes
                                    </button>
                                </div>
                            )}
                        </div>

                        <div className="border-t mt-6 pt-6">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">Change Password</h2>
                            <div className="space-y-4 max-w-md">
                                <input
                                    type="password"
                                    placeholder="Current Password"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                />
                                <input
                                    type="password"
                                    placeholder="New Password"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                />
                                <input
                                    type="password"
                                    placeholder="Confirm New Password"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                />
                                <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition duration-200">
                                    Update Password
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default UserProfilePage;