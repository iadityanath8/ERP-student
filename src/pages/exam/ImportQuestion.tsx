import React, { useState } from 'react';
import { ArrowLeft, Upload, FileSpreadsheet, Download, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ImportQuestion: React.FC = () => {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [importing, setImporting] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleImport = () => {
    if (!selectedFile) return;
    setImporting(true);
    // In real app, parse XLSX and import questions
    setTimeout(() => {
      setImporting(false);
      alert('Questions imported successfully!');
      navigate('/admin/exam/questions');
    }, 2000);
  };

  const downloadTemplate = () => {
    // In real app, download template XLSX file
    alert('Template download will be implemented');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={() => navigate('/admin/exam/questions')}
              className="p-2 hover:bg-gray-100 rounded-lg transition"
            >
              <ArrowLeft size={24} className="text-gray-600" />
            </button>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <FileSpreadsheet className="text-indigo-600" size={32} />
                Import Question
              </h1>
              <p className="text-gray-600 mt-2">Upload XLSX</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Instructions</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                <li>Download the template file to see the required format</li>
                <li>Fill in questions, options, correct answers, and other details</li>
                <li>Upload the completed XLSX file</li>
                <li>Questions will be validated before import</li>
              </ul>
            </div>

            <div>
              <button
                onClick={downloadTemplate}
                className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
              >
                <Download size={20} />
                Download Template
              </button>
            </div>

            <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-indigo-400 transition">
              {selectedFile ? (
                <div className="space-y-4">
                  <CheckCircle2 className="mx-auto text-green-600" size={48} />
                  <div>
                    <p className="font-semibold text-gray-900">{selectedFile.name}</p>
                    <p className="text-sm text-gray-600">
                      {(selectedFile.size / 1024).toFixed(2)} KB
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedFile(null)}
                    className="text-red-600 hover:text-red-700 font-medium"
                  >
                    Remove File
                  </button>
                </div>
              ) : (
                <>
                  <FileSpreadsheet className="mx-auto text-gray-400 mb-4" size={48} />
                  <p className="text-gray-600 mb-4">Click to upload or drag and drop</p>
                  <p className="text-sm text-gray-500 mb-4">XLSX files only</p>
                  <input
                    type="file"
                    accept=".xlsx,.xls"
                    onChange={handleFileChange}
                    className="hidden"
                    id="file-upload"
                  />
                  <label
                    htmlFor="file-upload"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition cursor-pointer"
                  >
                    <Upload size={20} />
                    Choose File
                  </label>
                </>
              )}
            </div>

            {selectedFile && (
              <div className="flex gap-4">
                <button
                  onClick={() => navigate('/admin/exam/questions')}
                  className="flex-1 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={handleImport}
                  disabled={importing}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition shadow-lg disabled:opacity-50"
                >
                  {importing ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Importing...
                    </>
                  ) : (
                    <>
                      <Upload size={20} />
                      Import Questions
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImportQuestion;



