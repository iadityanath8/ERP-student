import React from 'react';
import { useParams } from 'react-router-dom';
import AddTopic from './AddTopic';

const EditTopic: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  // Reuse AddTopic component with edit mode
  return <AddTopic />;
};

export default EditTopic;

