import React, { useState } from 'react';
import { Mail, Lock, User, Phone, School, MapPin, Building2, FileText, Users, GraduationCap } from 'lucide-react';

const RegisterSchoolPage = ({ onNavigate }: any) => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        schoolName: '',
        schoolCode: '',
        affiliationNumber: '',
        boardType: 'CBSE',
        establishedYear: '',
        principalName: '',
        principalEmail: '',
        principalPhone: '',
        schoolEmail: '',
        schoolPhone: '',
        website: '',
        address: '',
        city: '',
        state: '',
        pincode: '',
        country: 'India',
        totalStudents: '',
        totalTeachers: '',
        totalClasses: '',
        hasTransport: false,
        hasHostel: false,
        hasLibrary: false,
        hasLab: false,
        password: '',
        confirmPassword: ''
    });

    const handleSubmit = (e: React.MouseEvent) => {
        e.preventDefault();
        if (step < 4) {
            setStep(step + 1);
        } else {
            onNavigate('login');
        }
    };

    const handleCheckboxChange = (field: string) => {
        setFormData({ ...formData, [field]: !formData[field as keyof typeof formData] });
    };

    return (
        <div className="min-h-screen bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50 py-8 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8">
                    <div className="text-center mb-8">
                        <div className="bg-linear-to-r from-indigo-600 to-purple-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                            <School className="text-white" size={40} />
                        </div>
                        <h1 className="text-3xl font-bold text-gray-900">Register Your School</h1>
                        <p className="text-gray-600 mt-2">Join our comprehensive School Management System</p>
                    </div>

                    {/* Progress Steps */}
                    <div className="flex items-center justify-between mb-8">
                        {[1, 2, 3, 4].map((s) => (
                            <div key={s} className="flex items-center flex-1">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                                    step >= s ? 'bg-indigo-600 text-white shadow-lg' : 'bg-gray-200 text-gray-500'
                                }`}>
                                    {s}
                                </div>
                                {s < 4 && (
                                    <div className={`flex-1 h-1 mx-2 transition-all ${step > s ? 'bg-indigo-600' : 'bg-gray-200'}`} />
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Step Labels */}
                    <div className="flex justify-between mb-8 text-xs sm:text-sm">
                        <span className={`flex-1 text-center ${step >= 1 ? 'text-indigo-600 font-semibold' : 'text-gray-500'}`}>
                            School Info
                        </span>
                        <span className={`flex-1 text-center ${step >= 2 ? 'text-indigo-600 font-semibold' : 'text-gray-500'}`}>
                            Principal Info
                        </span>
                        <span className={`flex-1 text-center ${step >= 3 ? 'text-indigo-600 font-semibold' : 'text-gray-500'}`}>
                            Location
                        </span>
                        <span className={`flex-1 text-center ${step >= 4 ? 'text-indigo-600 font-semibold' : 'text-gray-500'}`}>
                            Setup
                        </span>
                    </div>

                    <div className="space-y-6">
                        {/* Step 1: School Information */}
                        {step === 1 && (
                            <>
                                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                    <School size={24} className="text-indigo-600" />
                                    School Information
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">School Name *</label>
                                        <div className="relative">
                                            <School className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                            <input
                                                type="text"
                                                value={formData.schoolName}
                                                onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
                                                className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                                placeholder="e.g., Sunrise International School"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">School Code *</label>
                                        <div className="relative">
                                            <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                            <input
                                                type="text"
                                                value={formData.schoolCode}
                                                onChange={(e) => setFormData({ ...formData, schoolCode: e.target.value })}
                                                className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                                placeholder="e.g., SCH001"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Affiliation Number</label>
                                        <div className="relative">
                                            <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                            <input
                                                type="text"
                                                value={formData.affiliationNumber}
                                                onChange={(e) => setFormData({ ...formData, affiliationNumber: e.target.value })}
                                                className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                                placeholder="e.g., CBSE/123456"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Board Type *</label>
                                        <select
                                            value={formData.boardType}
                                            onChange={(e) => setFormData({ ...formData, boardType: e.target.value })}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                        >
                                            <option value="CBSE">CBSE</option>
                                            <option value="ICSE">ICSE</option>
                                            <option value="State Board">State Board</option>
                                            <option value="IB">International Baccalaureate (IB)</option>
                                            <option value="IGCSE">IGCSE</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Established Year *</label>
                                        <input
                                            type="number"
                                            value={formData.establishedYear}
                                            onChange={(e) => setFormData({ ...formData, establishedYear: e.target.value })}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                            placeholder="e.g., 1995"
                                            min={1800}
                                            max={new Date().getFullYear()}
                                        />
                                    </div>

                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">School Email *</label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                            <input
                                                type="email"
                                                value={formData.schoolEmail}
                                                onChange={(e) => setFormData({ ...formData, schoolEmail: e.target.value })}
                                                className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                                placeholder="info@school.edu"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">School Phone *</label>
                                        <div className="relative">
                                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                            <input
                                                type="tel"
                                                value={formData.schoolPhone}
                                                onChange={(e) => setFormData({ ...formData, schoolPhone: e.target.value })}
                                                className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                                placeholder="+91 98765 43210"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Website (Optional)</label>
                                        <div className="relative">
                                            <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                            <input
                                                type="url"
                                                value={formData.website}
                                                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                                                className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                                placeholder="www.school.edu"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}

                        {/* Step 2: Principal Information */}
                        {step === 2 && (
                            <>
                                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                    <User size={24} className="text-indigo-600" />
                                    Principal/Admin Information
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Principal Full Name *</label>
                                        <div className="relative">
                                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                            <input
                                                type="text"
                                                value={formData.principalName}
                                                onChange={(e) => setFormData({ ...formData, principalName: e.target.value })}
                                                className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                                placeholder="Enter principal's full name"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Principal Email *</label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                            <input
                                                type="email"
                                                value={formData.principalEmail}
                                                onChange={(e) => setFormData({ ...formData, principalEmail: e.target.value })}
                                                className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                                placeholder="principal@school.edu"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Principal Phone *</label>
                                        <div className="relative">
                                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                            <input
                                                type="tel"
                                                value={formData.principalPhone}
                                                onChange={(e) => setFormData({ ...formData, principalPhone: e.target.value })}
                                                className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                                placeholder="+91 98765 43210"
                                            />
                                        </div>
                                    </div>

                                    <div className="md:col-span-2 bg-blue-50 border border-blue-200 rounded-lg p-4">
                                        <p className="text-sm text-blue-800">
                                            <strong>Note:</strong> The principal's email will be used as the primary admin account for school management.
                                        </p>
                                    </div>
                                </div>
                            </>
                        )}

                        {/* Step 3: Location & Additional Details */}
                        {step === 3 && (
                            <>
                                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                    <MapPin size={24} className="text-indigo-600" />
                                    Location & School Details
                                </h2>
                                
                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Complete Address *</label>
                                        <div className="relative">
                                            <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
                                            <textarea
                                                value={formData.address}
                                                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                                className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                                placeholder="Enter complete school address"
                                                rows={3}
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-3 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">City *</label>
                                            <input
                                                type="text"
                                                value={formData.city}
                                                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                                placeholder="Enter city"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">State *</label>
                                            <input
                                                type="text"
                                                value={formData.state}
                                                onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                                placeholder="Enter state"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">PIN Code *</label>
                                            <input
                                                type="text"
                                                value={formData.pincode}
                                                onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                                placeholder="Enter PIN code"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-3 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Total Students</label>
                                            <div className="relative">
                                                <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                                <input
                                                    type="number"
                                                    value={formData.totalStudents}
                                                    onChange={(e) => setFormData({ ...formData, totalStudents: e.target.value })}
                                                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                                    placeholder="e.g., 500"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Total Teachers</label>
                                            <div className="relative">
                                                <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                                <input
                                                    type="number"
                                                    value={formData.totalTeachers}
                                                    onChange={(e) => setFormData({ ...formData, totalTeachers: e.target.value })}
                                                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                                    placeholder="e.g., 50"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Total Classes</label>
                                            <div className="relative">
                                                <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                                <input
                                                    type="number"
                                                    value={formData.totalClasses}
                                                    onChange={(e) => setFormData({ ...formData, totalClasses: e.target.value })}
                                                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                                    placeholder="e.g., 30"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-3">School Facilities</label>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <label className="flex items-center space-x-3 p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    checked={formData.hasTransport}
                                                    onChange={() => handleCheckboxChange('hasTransport')}
                                                    className="w-5 h-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                                                />
                                                <span className="text-gray-700">Transport Facility</span>
                                            </label>
                                            <label className="flex items-center space-x-3 p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    checked={formData.hasHostel}
                                                    onChange={() => handleCheckboxChange('hasHostel')}
                                                    className="w-5 h-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                                                />
                                                <span className="text-gray-700">Hostel Facility</span>
                                            </label>
                                            <label className="flex items-center space-x-3 p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    checked={formData.hasLibrary}
                                                    onChange={() => handleCheckboxChange('hasLibrary')}
                                                    className="w-5 h-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                                                />
                                                <span className="text-gray-700">Library</span>
                                            </label>
                                            <label className="flex items-center space-x-3 p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    checked={formData.hasLab}
                                                    onChange={() => handleCheckboxChange('hasLab')}
                                                    className="w-5 h-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                                                />
                                                <span className="text-gray-700">Computer/Science Labs</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}

                        {/* Step 4: Account Setup */}
                        {step === 4 && (
                            <>
                                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                    <Lock size={24} className="text-indigo-600" />
                                    Setup Admin Account
                                </h2>
                                <div className="space-y-6">
                                    <div className="bg-linear-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-lg p-4">
                                        <p className="text-sm text-indigo-900">
                                            <strong>Creating admin account for:</strong> {formData.principalEmail || 'principal@school.edu'}
                                        </p>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Create Password *</label>
                                        <div className="relative">
                                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                            <input
                                                type="password"
                                                value={formData.password}
                                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                                className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                                placeholder="Create a strong password"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password *</label>
                                        <div className="relative">
                                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                            <input
                                                type="password"
                                                value={formData.confirmPassword}
                                                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                                                className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                                placeholder="Confirm your password"
                                            />
                                        </div>
                                    </div>

                                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                        <p className="text-sm text-gray-700 font-medium mb-2">Password Requirements:</p>
                                        <ul className="text-sm text-gray-600 space-y-1">
                                            <li>• At least 8 characters long</li>
                                            <li>• Include uppercase and lowercase letters</li>
                                            <li>• Include at least one number</li>
                                            <li>• Include at least one special character (@, #, $, etc.)</li>
                                        </ul>
                                    </div>

                                    <div className="space-y-3">
                                        <label className="flex items-start space-x-3">
                                            <input
                                                type="checkbox"
                                                className="w-5 h-5 mt-0.5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                                            />
                                            <span className="text-sm text-gray-700">
                                                I agree to the Terms and Conditions and Privacy Policy
                                            </span>
                                        </label>
                                        <label className="flex items-start space-x-3">
                                            <input
                                                type="checkbox"
                                                className="w-5 h-5 mt-0.5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                                            />
                                            <span className="text-sm text-gray-700">
                                                I want to receive updates and newsletters about School ERP features
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            </>
                        )}

                        {/* Navigation Buttons */}
                        <div className="flex gap-4 pt-4">
                            {step > 1 && (
                                <button
                                    type="button"
                                    onClick={() => setStep(step - 1)}
                                    className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition duration-200"
                                >
                                    Previous
                                </button>
                            )}
                            <button
                                type="button"
                                onClick={handleSubmit}
                                className="flex-1 bg-linear-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition duration-200 shadow-lg hover:shadow-xl"
                            >
                                {step === 4 ? 'Complete Registration' : 'Next Step'}
                            </button>
                        </div>
                    </div>

                    <div className="mt-6 text-center">
                        <button
                            onClick={() => onNavigate('login')}
                            className="text-indigo-600 hover:text-indigo-700 font-medium"
                        >
                            Already have an account? Sign in
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterSchoolPage;