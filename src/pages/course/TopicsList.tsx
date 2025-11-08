import React, { useState } from 'react';
import { Plus, Edit, Eye, Trash2, Search, BookOpen, Filter, ArrowUp, ArrowDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { Topic } from '../../types/Course';

const TopicsList: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [filterSubject, setFilterSubject] = useState('all');
  
  // Mock data
  const [topics] = useState<Topic[]>([
    {
      id: '1',
      subjectId: '1',
      subjectName: 'Arrays and Linked Lists',
      courseId: '1',
      courseName: 'Data Structures',
      title: 'Introduction to Arrays',
      description: 'Understanding array data structure, declaration, and basic operations',
      order: 1,
      isActive: true,
      createdAt: '2024-11-05',
      updatedAt: '2024-11-05'
    },
    {
      id: '2',
      subjectId: '1',
      subjectName: 'Arrays and Linked Lists',
      courseId: '1',
      courseName: 'Data Structures',
      title: 'Linked List Implementation',
      description: 'Singly and doubly linked lists, operations, and applications',
      order: 2,
      isActive: true,
      createdAt: '2024-11-05',
      updatedAt: '2024-11-05'
    },
    {
      id: '3',
      subjectId: '2',
      subjectName: 'Trees and Graphs',
      courseId: '1',
      courseName: 'Data Structures',
      title: 'Binary Trees',
      description: 'Binary tree structure, traversal methods, and applications',
      order: 1,
      isActive: true,
      createdAt: '2024-11-06',
      updatedAt: '2024-11-06'
    }
  ]);

  const filteredTopics = topics.filter(topic => {
    const matchesSearch = topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topic.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topic.subjectName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterSubject === 'all' || topic.subjectId === filterSubject;
    return matchesSearch && matchesFilter;
  });

  // Group topics by subject
  const groupedTopics = filteredTopics.reduce((acc, topic) => {
    if (!acc[topic.subjectId]) {
      acc[topic.subjectId] = {
        subjectName: topic.subjectName,
        courseName: topic.courseName,
        topics: []
      };
    }
    acc[topic.subjectId].topics.push(topic);
    return acc;
  }, {} as Record<string, { subjectName: string; courseName: string; topics: Topic[] }>);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <BookOpen className="text-indigo-600" size={32} />
                Topics List
              </h1>
              <p className="text-gray-600 mt-2">Topics under subject</p>
            </div>
            <button
              onClick={() => navigate('/admin/course/topic/add')}
              className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition shadow-lg"
            >
              <Plus size={20} />
              Add Topic
            </button>
          </div>

          {/* Filters */}
          <div className="flex gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search topics..."
                className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <select
                value={filterSubject}
                onChange={(e) => setFilterSubject(e.target.value)}
                className="pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option value="all">All Subjects</option>
                <option value="1">Arrays and Linked Lists</option>
                <option value="2">Trees and Graphs</option>
              </select>
            </div>
          </div>

          {/* Topics by Subject */}
          <div className="space-y-6">
            {Object.entries(groupedTopics).map(([subjectId, group]) => (
              <div key={subjectId} className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">{group.subjectName}</h2>
                    <p className="text-sm text-gray-600">Course: {group.courseName}</p>
                  </div>
                  <span className="px-3 py-1 text-xs font-semibold bg-indigo-100 text-indigo-800 rounded-full">
                    {group.topics.length} topic(s)
                  </span>
                </div>

                <div className="space-y-3">
                  {group.topics
                    .sort((a, b) => a.order - b.order)
                    .map((topic) => (
                      <div
                        key={topic.id}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                      >
                        <div className="flex items-start gap-4 flex-1">
                          <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-semibold">
                            {topic.order}
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 mb-1">{topic.title}</h3>
                            <p className="text-sm text-gray-600">{topic.description}</p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => navigate(`/admin/course/topic/materials/${topic.id}`)}
                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
                            title="View Study Materials"
                          >
                            <Eye size={18} />
                          </button>
                          <button
                            onClick={() => navigate(`/admin/course/topic/edit/${topic.id}`)}
                            className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition"
                            title="Edit Topic"
                          >
                            <Edit size={18} />
                          </button>
                          <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition" title="Delete Topic">
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>

          {filteredTopics.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="mx-auto text-gray-400" size={48} />
              <p className="mt-4 text-gray-600">No topics found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopicsList;

