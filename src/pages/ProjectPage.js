import React from 'react';
import { useParams } from 'react-router-dom';
import ProjectDetails from '../components/ProjectDetails';

const ProjectPage = () => {
  const { id } = useParams();
  return <ProjectDetails projectId={id} />;
};

export default ProjectPage;
