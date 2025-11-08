import React from 'react';
import { useParams } from 'react-router-dom';
import AddStaff from './AddStaff';

const EditStaff: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  // Reuse AddStaff component with edit mode
  return <AddStaff />;
};

export default EditStaff;



