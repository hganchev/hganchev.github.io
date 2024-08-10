import React from 'react';
import { useParams } from 'react-router-dom';
import projectsData from '../../utils/projectsData';

function PortfolioDetail() {
  const { id } = useParams();
  const project = projectsData.projects.find(project => project.id === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <h1>{project.name}</h1>
      <p><strong>Date:</strong> {project.date}</p>
      <p><strong>Label:</strong> {project.label}</p>
      <p><strong>Task Description:</strong> {project.taskDescription}</p>
      <p><strong>Lessons Learned:</strong> {project.lessonsLearned}</p>
      <p><strong>Technologies Used:</strong> {project.technologiesUsed}</p>
      <p><strong>Time Spent:</strong> {project.timeSpent}</p>
    </div>
  );
}

export default PortfolioDetail;
