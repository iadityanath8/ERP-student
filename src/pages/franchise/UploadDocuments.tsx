import React, { useState, useEffect } from 'react';
import { ArrowLeft, Upload, FileImage, FileText, CheckCircle2 } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

const UploadDocuments: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [documents, setDocuments] = useState({
    photo: null as File | null,
    idProof: null as File | null,
    signature: null as File | null
  });

  const handleFileChange = (type: 'photo' | 'idProof' | 'signature', file: File | null) => {
    setDocuments({ ...documents, [type]: file });
  };

  const handleSubmit = () => {
    console.log('Uploading documents:', documents);
    // Handle upload logic
    navigate(`/admin/franchise/view/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={() => navigate(`/admin/franchise/view/${id}`)}
              className="p-2 hover:bg-gray-100 rounded-lg transition"
            >
              <ArrowLeft size={24} className="text-gray-600" />
            </button>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Upload Proof Documents</h1>
              <p className="text-gray-600 mt-2">Photo, ID, Signature</p>
            </div>
          </div>

          <div className="space-y-6">
            {/* Photo Upload */}
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-indigo-400 transition">
              <FileImage className="mx-auto text-gray-400 mb-4" size={48} />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Franchise Photo</h3>
              <p className="text-sm text-gray-600 mb-4">Upload franchise/branch photo</p>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange('photo', e.target.files?.[0] || null)}
                className="hidden"
                id="photo-upload"
              />
              <label
                htmlFor="photo-upload"
                className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition cursor-pointer"
              >
                <Upload size={20} />
                {documents.photo ? 'Change Photo' : 'Upload Photo'}
              </label>
              {documents.photo && (
                <div className="mt-4 flex items-center justify-center gap-2 text-green-600">
                  <CheckCircle2 size={20} />
                  <span className="text-sm font-medium">{documents.photo.name}</span>
                </div>
              )}
            </div>

            {/* ID Proof Upload */}
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-indigo-400 transition">
              <FileText className="mx-auto text-gray-400 mb-4" size={48} />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">ID Proof</h3>
              <p className="text-sm text-gray-600 mb-4">Upload government issued ID proof</p>
              <input
                type="file"
                accept="image/*,.pdf"
                onChange={(e) => handleFileChange('idProof', e.target.files?.[0] || null)}
                className="hidden"
                id="idproof-upload"
              />
              <label
                htmlFor="idproof-upload"
                className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition cursor-pointer"
              >
                <Upload size={20} />
                {documents.idProof ? 'Change ID Proof' : 'Upload ID Proof'}
              </label>
              {documents.idProof && (
                <div className="mt-4 flex items-center justify-center gap-2 text-green-600">
                  <CheckCircle2 size={20} />
                  <span className="text-sm font-medium">{documents.idProof.name}</span>
                </div>
              )}
            </div>

            {/* Signature Upload */}
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-indigo-400 transition">
              <FileText className="mx-auto text-gray-400 mb-4" size={48} />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Signature</h3>
              <p className="text-sm text-gray-600 mb-4">Upload owner signature</p>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange('signature', e.target.files?.[0] || null)}
                className="hidden"
                id="signature-upload"
              />
              <label
                htmlFor="signature-upload"
                className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition cursor-pointer"
              >
                <Upload size={20} />
                {documents.signature ? 'Change Signature' : 'Upload Signature'}
              </label>
              {documents.signature && (
                <div className="mt-4 flex items-center justify-center gap-2 text-green-600">
                  <CheckCircle2 size={20} />
                  <span className="text-sm font-medium">{documents.signature.name}</span>
                </div>
              )}
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200 flex gap-4">
            <button
              onClick={() => navigate(`/admin/franchise/view/${id}`)}
              className="flex-1 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="flex-1 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition shadow-lg"
            >
              Save Documents
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadDocuments;

