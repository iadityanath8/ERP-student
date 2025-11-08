import React from 'react';
import { useParams } from 'react-router-dom';
import AddSubject from './AddSubject';

const EditSubject: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  // Reuse AddSubject component with edit mode
  return <AddSubject />;
};

export default EditSubject;

